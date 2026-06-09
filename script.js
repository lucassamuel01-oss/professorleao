/* ============================================
   PROFESSOR LEÃO – SCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── HEADER SCROLL ──────────────────────────
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── MOBILE MENU ────────────────────────────
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── SCROLL ANIMATIONS (AOS-like) ───────────
  const animTargets = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.aosDelay || 0);
      setTimeout(() => el.classList.add('animated'), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.12 });
  animTargets.forEach(el => observer.observe(el));

  // ── COUNTER ANIMATION ──────────────────────
  const counters = document.querySelectorAll('.estatistica-item__number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const duration = 1800;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current >= 1000
          ? (current >= 10000 ? '+' + (current / 1000).toFixed(0) + 'K' : '+' + current.toLocaleString('pt-BR'))
          : (el.dataset.target == 95 ? current + '%' : '+' + current);
        if (current >= target) {
          clearInterval(timer);
          // Final display
          if (target === 1000) el.textContent = '+1.000';
          else if (target === 500) el.textContent = '+500h';
          else if (target === 10000) el.textContent = '+10.000';
          else if (target === 95) el.textContent = '95%';
        }
      }, 16);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  // ── CURSO FILTER ───────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cursoCards = document.querySelectorAll('.curso-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cursoCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ── BLOG CATEGORY PILLS ────────────────────
  const catPills = document.querySelectorAll('.category-pill');
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('category-pill--active'));
      pill.classList.add('category-pill--active');
    });
  });

  // ── CONTACT FORM ───────────────────────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = '<span>Enviando...</span>';

      // Simulate submit (replace with real backend/formspree/emailjs)
      setTimeout(() => {
        form.innerHTML = `
          <div class="placeholder__icon form__success-icon">✅</div>
          <div class="form__success-title">Mensagem enviada!</div>
          <p class="form__success-text">
            Obrigado pelo contato! O Professor Leão vai retornar em breve.<br />
            Enquanto isso, siga no Instagram <strong>@professor.leao</strong>.
          </p>
        `;
        form.classList.add('form--success');
      }, 1200);
    });
  }

  // ── SMOOTH ANCHOR SCROLL ───────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── HERO SCROLL INDICATOR ──────────────────
  const scrollIndicator = document.querySelector('.hero__scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '1';
    }, { passive: true });
  }

});

// Inject fadeIn keyframe dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

/* ============================================================
   PLANO DE ESTUDOS – PÁGINA PÚBLICA
   (Importado e adaptado do Elite Feminina)
   ============================================================ */

const MATERIAS_PUB = {
  'CFO PMBA':  ['Matemática','Português','Direito Constitucional','Direito Administrativo','Direito Penal','Legislação PM','Informática','Inglês','Raciocínio Lógico'],
  'SD PMBA':   ['Matemática','Português','História e Geog. da BA','Atualidades','Legislação PM','Direito Constitucional','Informática','Raciocínio Lógico'],
  'PM':        ['Matemática','Português','Raciocínio Lógico','Informática','Legislação Específica','Conhecimentos Gerais'],
  'PC':        ['Matemática','Português','Raciocínio Lógico','Informática','Direito Penal','Direito Processual Penal'],
  'PF':        ['Matemática','Português','Raciocínio Lógico','Informática','Direito Constitucional','Direito Administrativo','Inglês'],
  'PRF':       ['Matemática','Português','Raciocínio Lógico','Informática','Legislação de Trânsito','Física'],
  'Bombeiros': ['Matemática','Português','Raciocínio Lógico','Físico-Química','Informática','Conhecimentos Gerais'],
  'Correios':  ['Matemática','Português','Raciocínio Lógico','Informática','Atualidades','Conhecimentos Específicos'],
  'Outro':     ['Matemática','Português','Raciocínio Lógico','Informática','Conhecimentos Gerais','Legislação Específica'],
};

(function initPubPlano() {
  const pubConcurso   = document.getElementById('pubConcurso');
  const pubDataProva  = document.getElementById('pubDataProva');
  const pubHorasDia   = document.getElementById('pubHorasDia');
  const pubDiasSemana = document.getElementById('pubDiasSemana');
  const pubDifBox     = document.getElementById('pubDifBox');
  const pubPlanForm   = document.getElementById('pubPlanForm');
  if (!pubPlanForm) return; // página sem o plano (ex: login.html)

  function buildCheckboxes(concurso) {
    const list = MATERIAS_PUB[concurso] || MATERIAS_PUB['Outro'];
    pubDifBox.innerHTML = list.map(m => `
      <label class="pub-cb-label">
        <input type="checkbox" name="pubDificuldade" value="${m}" /> ${m}
      </label>
    `).join('');
  }

  function updatePreview() {
    const dateVal = pubDataProva.value;
    const horas   = parseInt(pubHorasDia.value) || 0;
    const dias    = parseInt(pubDiasSemana.value) || 0;

    if (dateVal) {
      const diff = Math.max(0, Math.ceil((new Date(dateVal + 'T00:00:00') - new Date()) / 86400000));
      document.getElementById('pubDaysLeft').textContent = diff;
      document.getElementById('pubMode').textContent =
        diff < 30 ? '🔥 Sprint' : diff < 90 ? '⚡ Intensivo' : '📅 Regular';
    } else {
      document.getElementById('pubDaysLeft').textContent = '--';
      document.getElementById('pubMode').textContent = '--';
    }
    const weekly = horas * dias;
    document.getElementById('pubWeeklyLoad').textContent = weekly ? weekly + 'h' : '--';
    if (horas && dias) {
      const ciclos = Math.floor((horas * 60) / 30);
      document.getElementById('pubPomodoroText').textContent =
        `${ciclos} ciclos Pomodoro/dia (${horas}h = ${ciclos}×25min foco + pausas de 5min). Após 4 ciclos: 20min de descanso.`;
    }
  }

  if (pubConcurso) {
    pubConcurso.addEventListener('change', () => {
      if (pubConcurso.value) buildCheckboxes(pubConcurso.value);
      updatePreview();
    });
  }

  document.querySelectorAll('.switch-pub').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.val;
      if (pubConcurso) pubConcurso.value = val;
      document.querySelectorAll('.switch-pub').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildCheckboxes(val);
      updatePreview();
    });
  });

  [pubDataProva, pubHorasDia, pubDiasSemana].forEach(el => {
    if (!el) return;
    el.addEventListener('input', updatePreview);
    el.addEventListener('change', updatePreview);
  });

  pubPlanForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const concurso  = pubConcurso ? pubConcurso.value : 'Concurso';
    const dataProva = pubDataProva ? pubDataProva.value : '';
    const horas     = parseInt(pubHorasDia ? pubHorasDia.value : '') || 2;
    const dias      = parseInt(pubDiasSemana ? pubDiasSemana.value : '') || 5;
    const nivel     = (document.getElementById('pubNivel') || {}).value || 'intermediario';
    const diffs     = [...document.querySelectorAll('[name=pubDificuldade]:checked')].map(c => c.value);
    const subs      = MATERIAS_PUB[concurso] || MATERIAS_PUB['Outro'];
    const prioritized = diffs.length ? diffs : subs;

    const daysLeft  = dataProva
      ? Math.max(1, Math.ceil((new Date(dataProva + 'T00:00:00') - new Date()) / 86400000))
      : 60;
    const weekDays  = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'].slice(0, dias);
    const sessPerDay = Math.max(1, Math.floor(horas * 60 / 55));

    const result = document.getElementById('pubPlanResult');
    let html = `<h4>📋 Plano Pomodoro — ${concurso} · ${daysLeft} dias</h4>
    <p style="font-size:13px;color:var(--gray-mid);margin-bottom:16px;">
      <strong style="color:var(--accent-light)">${horas}h/dia × ${dias} dias</strong> = ${horas*dias}h/semana.
      Nível: <strong style="color:var(--white)">${nivel}</strong>.
      Prioridades: <strong style="color:var(--white)">${prioritized.slice(0,3).join(', ')}</strong>.
    </p>`;

    weekDays.forEach((day, i) => {
      html += `<div class="prd-day"><div class="prd-day-title">📅 ${day}</div>`;
      for (let s = 0; s < sessPerDay; s++) {
        const sub  = prioritized[(i * sessPerDay + s) % prioritized.length];
        const tipo = s === 0 ? 'Teoria' : (s === sessPerDay - 1 && sessPerDay > 2 ? 'Revisão' : 'Questões');
        html += `<div class="prd-session">⏱ Sessão ${s+1} (25min): <strong>${sub}</strong> — ${tipo}</div>`;
      }
      html += `</div>`;
    });

    html += `
      <div class="plan-wa-cta">
        <div>
          <strong>💡 Dica do Professor Leão</strong>
          <p>Imprima e cole na parede. A execução consistente supera qualquer estratégia perfeita. Foco e disciplina!</p>
        </div>
        <a href="https://wa.me/5577999229281?text=Olá%20Professor%20Leão!%20Gerei%20meu%20plano%20para%20${encodeURIComponent(concurso)}%20e%20quero%20começar%20meus%20estudos."
           target="_blank" rel="noopener" class="btn btn--primary btn--sm">
          Falar com o Professor →
        </a>
      </div>`;

    if (result) {
      result.innerHTML = html;
      result.classList.add('show');
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Inicializar
  buildCheckboxes('CFO PMBA');
  updatePreview();
})();

/* ── Formatador de telefone (contato) ── */
document.addEventListener('DOMContentLoaded', () => {
  const phoneInputs = ['whatsapp', 'telefone'].map(id => document.getElementById(id)).filter(Boolean);
  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g,'').slice(0,11);
      if      (v.length <= 2)  e.target.value = v;
      else if (v.length <= 6)  e.target.value = `(${v.slice(0,2)}) ${v.slice(2)}`;
      else if (v.length <= 10) e.target.value = `(${v.slice(0,2)}) ${v.slice(2,6)}-${v.slice(6)}`;
      else                     e.target.value = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
    });
  });
});
