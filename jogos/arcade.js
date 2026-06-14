/* ============================================================
   ARCADE — efeitos compartilhados dos jogos do Professor Leão
   Som (Web Audio, sem arquivos), confete, combos e celebração.
   Uso: <script src="arcade.js"></script> e chame Arcade.*
   ============================================================ */
window.Arcade = (function () {
  'use strict';

  /* ── Som (sintetizado, com liga/desliga persistente) ── */
  let soundOn = localStorage.getItem('pl_arcade_sound') !== 'off';
  let _ctx = null;
  function ctx() {
    if (!_ctx) { try { _ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { _ctx = null; } }
    if (_ctx && _ctx.state === 'suspended') { try { _ctx.resume(); } catch (e) {} }
    return _ctx;
  }
  function tone(freq, dur, type, vol) {
    if (!soundOn) return;
    const c = ctx(); if (!c) return;
    try {
      const o = c.createOscillator(), g = c.createGain();
      o.type = type || 'sine'; o.frequency.value = freq;
      o.connect(g); g.connect(c.destination);
      g.gain.setValueAtTime(vol || 0.15, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
      o.start(); o.stop(c.currentTime + dur);
    } catch (e) {}
  }
  /* vibração háptica (mobile) — segue o liga/desliga do som (= "efeitos") */
  function haptic(pattern) {
    if (!soundOn) return;
    try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (e) {}
  }
  function correct(streak) {
    const s = Math.min(streak || 0, 6);
    const base = 520 + s * 45;
    tone(base, 0.12, 'triangle', 0.18);
    setTimeout(() => tone(base * 1.26, 0.12, 'triangle', 0.16), 85);
    if (s >= 2) setTimeout(() => tone(base * 1.5, 0.16, 'triangle', 0.15), 170);
    haptic(s >= 2 ? [9, 16, 12] : 11);
  }
  function wrong() { tone(190, 0.16, 'sawtooth', 0.12); setTimeout(() => tone(120, 0.22, 'sawtooth', 0.12), 95); haptic([34, 28, 34]); flash('err'); }
  function timeUp() { tone(330, 0.18, 'sine', 0.12); setTimeout(() => tone(247, 0.3, 'sine', 0.12), 150); }
  function tick() { tone(880, 0.04, 'square', 0.05); }
  function win() { [523, 659, 784, 1047, 1319].forEach((f, i) => setTimeout(() => tone(f, 0.28, 'triangle', 0.18), i * 110)); }
  function toggleSound() { soundOn = !soundOn; localStorage.setItem('pl_arcade_sound', soundOn ? 'on' : 'off'); if (soundOn) correct(1); return soundOn; }
  function soundIsOn() { return soundOn; }

  /* ── Flash/pulso de tela (vinheta colorida, premium e discreto) ── */
  function flash(kind) {
    try {
      const el = document.createElement('div');
      const col = kind === 'err' ? 'rgba(239,68,68,.22)' : 'rgba(34,197,94,.22)';
      el.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9997;opacity:0;' +
        'transition:opacity .12s ease;background:radial-gradient(circle at 50% 46%, transparent 55%, ' + col + ' 100%)';
      document.body.appendChild(el);
      requestAnimationFrame(() => { el.style.opacity = '1'; });
      setTimeout(() => { el.style.opacity = '0'; }, 140);
      setTimeout(() => el.remove(), 340);
    } catch (e) {}
  }

  /* ── Confete (canvas leve, sem libs) ── */
  let _cv = null, _cx = null, _parts = [], _raf = 0;
  function _ensureCanvas() {
    if (_cv) return;
    _cv = document.createElement('canvas');
    _cv.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9998';
    document.body.appendChild(_cv);
    function resize() { _cv.width = innerWidth; _cv.height = innerHeight; }
    resize(); addEventListener('resize', resize);
    _cx = _cv.getContext('2d');
  }
  const _COLORS = ['#10b981', '#34d399', '#f59e0b', '#fbbf24', '#4A6CF7', '#6B89FF', '#f87171', '#a78bfa', '#22d3ee', '#ec4899'];
  function confetti(n, originY) {
    _ensureCanvas();
    const count = n || 40, oy = (originY == null ? 0.35 : originY) * _cv.height;
    for (let i = 0; i < count; i++) {
      _parts.push({
        x: _cv.width / 2 + (Math.random() - 0.5) * 170, y: oy,
        vx: (Math.random() - 0.5) * 12, vy: Math.random() * -12 - 4,
        g: 0.28 + Math.random() * 0.16, s: 4 + Math.random() * 6,
        rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.32,
        c: _COLORS[(Math.random() * _COLORS.length) | 0], life: 95 + Math.random() * 45,
        shape: (Math.random() * 3) | 0, wob: Math.random() * 6.28, wobV: 0.07 + Math.random() * 0.12, drift: (Math.random() - 0.5) * 0.7,
      });
    }
    if (!_raf) _loop();
  }
  function _loop() {
    _raf = requestAnimationFrame(_loop);
    _cx.clearRect(0, 0, _cv.width, _cv.height);
    for (let i = _parts.length - 1; i >= 0; i--) {
      const p = _parts[i];
      p.vy += p.g; p.vx *= 0.99; p.wob += p.wobV;
      p.x += p.vx + Math.sin(p.wob) * p.drift; p.y += p.vy; p.rot += p.vr; p.life--;
      if (p.life <= 0 || p.y > _cv.height + 20) { _parts.splice(i, 1); continue; }
      _cx.save(); _cx.translate(p.x, p.y); _cx.rotate(p.rot);
      _cx.globalAlpha = Math.max(0, Math.min(1, p.life / 45));
      _cx.fillStyle = p.c;
      if (p.shape === 1) { _cx.beginPath(); _cx.arc(0, 0, p.s * 0.55, 0, 6.283); _cx.fill(); }
      else if (p.shape === 2) { _cx.fillRect(-p.s * 0.28, -p.s * 0.85, p.s * 0.56, p.s * 1.7); }
      else { _cx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.62); }
      _cx.restore();
    }
    if (!_parts.length) { cancelAnimationFrame(_raf); _raf = 0; _cx.clearRect(0, 0, _cv.width, _cv.height); }
  }
  function celebrate() { confetti(130, 0.25); win(); flash('ok'); }

  /* ── Combo flutuante ("DUPLO!", "EM CHAMAS!") ── */
  const _COMBOS = { 2: 'DUPLO!', 3: 'TRIPLO!', 4: 'QUÁDRUPLO!', 5: '🔥 EM CHAMAS!', 7: '⚡ IMPARÁVEL!', 10: '👑 LENDÁRIO!' };
  function combo(streak) {
    let label = null;
    for (const k of Object.keys(_COMBOS).map(Number).sort((a, b) => b - a)) { if (streak >= k) { label = _COMBOS[k]; break; } }
    if (!label) return;
    const el = document.createElement('div');
    el.textContent = label;
    el.style.cssText = 'position:fixed;top:38%;left:50%;transform:translate(-50%,-50%) scale(.4);z-index:9999;' +
      'font-family:Montserrat,sans-serif;font-weight:900;font-size:' + (28 + Math.min(streak, 8) * 3) + 'px;' +
      'color:#fbbf24;text-shadow:0 0 18px rgba(245,158,11,.8),0 2px 8px rgba(0,0,0,.6);pointer-events:none;' +
      'transition:transform .25s cubic-bezier(.34,1.8,.64,1),opacity .5s;opacity:0;white-space:nowrap';
    document.body.appendChild(el);
    requestAnimationFrame(() => { el.style.transform = 'translate(-50%,-50%) scale(1)'; el.style.opacity = '1'; });
    setTimeout(() => { el.style.transform = 'translate(-50%,-90%) scale(1)'; el.style.opacity = '0'; }, 650);
    setTimeout(() => el.remove(), 1200);
    haptic(streak >= 5 ? [12, 22, 14, 22, 16] : [10, 18, 12]);
    if (streak >= 3) flash('ok');
  }

  /* ── Botão de som pronto pra topbar ── */
  function soundButton() {
    const b = document.createElement('button');
    b.type = 'button';
    b.title = 'Ligar/desligar som';
    b.style.cssText = 'background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#8892B4;cursor:pointer;font-size:14px;padding:5px 9px;line-height:1';
    const sync = () => { b.textContent = soundOn ? '🔊' : '🔇'; };
    sync();
    b.addEventListener('click', () => { toggleSound(); sync(); });
    return b;
  }

  /* ── Shake (elemento alvo ou a tela toda) ── */
  function shake(el, px) {
    const t = el || document.body, amp = px || 9;
    try {
      t.animate([
        { transform: 'translateX(0)' }, { transform: 'translateX(' + (-amp) + 'px)' },
        { transform: 'translateX(' + amp + 'px)' }, { transform: 'translateX(' + (-amp * 0.6) + 'px)' },
        { transform: 'translateX(' + (amp * 0.6) + 'px)' }, { transform: 'translateX(0)' },
      ], { duration: 300, easing: 'ease-in-out' });
    } catch (e) {}
    haptic([28, 22, 28]);
  }

  /* ── Burst de partículas num ponto (x,y em px de tela) ── */
  function burst(x, y, opts) {
    _ensureCanvas();
    const o = opts || {}, count = o.count || 18, cols = o.colors || _COLORS;
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * 6.283, sp = 2 + Math.random() * 6.5;
      _parts.push({
        x: x, y: y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp - 2,
        g: 0.16 + Math.random() * 0.12, s: 3 + Math.random() * 4.5,
        rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.45,
        c: cols[(Math.random() * cols.length) | 0], life: 38 + Math.random() * 28,
        shape: (Math.random() * 3) | 0, wob: 0, wobV: 0, drift: 0,
      });
    }
    if (!_raf) _loop();
  }

  /* ── Texto flutuante (ex.: "+150") subindo a partir de (x,y) ── */
  function popText(x, y, text, color) {
    try {
      const el = document.createElement('div');
      el.textContent = text;
      el.style.cssText = 'position:fixed;left:' + x + 'px;top:' + y + 'px;transform:translate(-50%,-50%) scale(.6);' +
        'z-index:9999;font-family:Montserrat,sans-serif;font-weight:900;font-size:22px;pointer-events:none;white-space:nowrap;' +
        'color:' + (color || '#fbbf24') + ';text-shadow:0 2px 10px rgba(0,0,0,.6);' +
        'transition:transform .7s cubic-bezier(.2,.85,.3,1),opacity .7s ease';
      document.body.appendChild(el);
      requestAnimationFrame(() => { el.style.transform = 'translate(-50%,-160%) scale(1.05)'; el.style.opacity = '0'; });
      setTimeout(() => el.remove(), 760);
    } catch (e) {}
  }

  return { tone, correct, wrong, timeUp, tick, win, celebrate, confetti, combo, flash, haptic, shake, burst, popText, toggleSound, soundIsOn, soundButton };
})();
