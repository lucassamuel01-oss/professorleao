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
   Copiado e adaptado do Elite Feminina — todas as matérias
   baseadas nos editais reais de cada concurso.
   ============================================================ */

const MATERIAS_PUB = {
  'CFO PMBA': [
    'Língua Portuguesa',
    'Direito Constitucional',
    'Direito Administrativo',
    'Direito Penal',
    'Legislação PM',
    'Ciências Humanas',
    'Matemática / RLM',
    'Informática',
    'Língua Inglesa'
  ],
  'SD PMBA': [
    'Língua Portuguesa',
    'Matemática',
    'Atualidades',
    'Informática',
    'História do Brasil',
    'Geografia do Brasil',
    'Direito Constitucional',
    'Direitos Humanos',
    'Direito Administrativo',
    'Direito Penal',
    'Direito Penal Militar',
    'Igualdade Racial e de Gênero'
  ],
  'Matemática Básica': [
    'Conjuntos Numéricos',
    'MMC e MDC',
    'Frações e Números Decimais',
    'Potenciação e Radiciação',
    'Porcentagem e Juros',
    'Regra de Três',
    'Razão e Proporção',
    'PA e PG',
    'Funções do 1° e 2° Graus',
    'Equações e Sistemas',
    'Geometria Plana',
    'Geometria Espacial',
    'Estatística'
  ],
  'Correios': [
    'Matemática',
    'Língua Portuguesa',
    'Raciocínio Lógico',
    'Informática',
    'Atualidades',
    'Conhecimentos Específicos da Área'
  ]
};

function formatarTelefone(valor) {
  const n = String(valor).replace(/\D/g, '').slice(0, 11);
  if (n.length <= 2)  return n;
  if (n.length <= 6)  return `(${n.slice(0,2)}) ${n.slice(2)}`;
  if (n.length <= 10) return `(${n.slice(0,2)}) ${n.slice(2,6)}-${n.slice(6)}`;
  return `(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7)}`;
}

(function initPubPlano() {
  const pubConcurso   = document.getElementById('pubConcurso');
  const pubDataProva  = document.getElementById('pubDataProva');
  const pubHorasDia   = document.getElementById('pubHorasDia');
  const pubDiasSemana = document.getElementById('pubDiasSemana');
  const pubDifBox     = document.getElementById('pubDifBox');
  const pubFacBox     = document.getElementById('pubFacBox');
  const pubPlanForm   = document.getElementById('pubPlanForm');
  if (!pubPlanForm) return;

  function criarCheckboxes(container, name, lista) {
    if (!container) return;
    container.innerHTML = lista.map((m, i) => `
      <label class="pub-cb-label" for="${name}-${i}">
        <input type="checkbox" id="${name}-${i}" name="${name}" value="${m}" />
        <span>${m}</span>
      </label>
    `).join('');
  }

  function preencherMaterias(concurso) {
    const lista = MATERIAS_PUB[concurso] || MATERIAS_PUB['SD PMBA'];
    criarCheckboxes(pubDifBox, 'pubDificuldade', lista);
    criarCheckboxes(pubFacBox, 'pubFacilidade', lista);
    document.querySelectorAll('.switch-pub').forEach(b =>
      b.classList.toggle('active', b.dataset.val === concurso)
    );
  }

  function atualizarPreview() {
    const dateVal = pubDataProva ? pubDataProva.value : '';
    const horas   = parseInt(pubHorasDia ? pubHorasDia.value : '') || 0;
    const dias    = parseInt(pubDiasSemana ? pubDiasSemana.value : '') || 0;

    if (dateVal) {
      const hoje  = new Date(); hoje.setHours(0,0,0,0);
      const prova = new Date(dateVal + 'T00:00:00');
      const diff  = Math.max(0, Math.ceil((prova - hoje) / 86400000));
      document.getElementById('pubDaysLeft').textContent = diff;
      if (diff <= 15)      document.getElementById('pubMode').textContent = '🔥 Sprint final';
      else if (diff <= 30) document.getElementById('pubMode').textContent = '⚡ Reta final';
      else if (diff <= 90) document.getElementById('pubMode').textContent = '⚡ Intensivo';
      else                 document.getElementById('pubMode').textContent = '📅 Base';
    } else {
      document.getElementById('pubDaysLeft').textContent = '--';
      document.getElementById('pubMode').textContent = 'Missão';
    }

    const weekly = horas * dias;
    document.getElementById('pubWeeklyLoad').textContent = weekly ? weekly + 'h' : '--';

    if (horas && dias) {
      const ciclos = Math.floor((horas * 60) / 30);
      document.getElementById('pubPomodoroText').textContent =
        `Treino com ${horas}h por dia, ${dias} dias por semana, total de ${weekly}h semanais. ${ciclos} ciclos Pomodoro/dia (25min foco + 5min pausa). Após 4 ciclos: 20min de descanso.`;
    } else {
      document.getElementById('pubPomodoroText').textContent =
        'Informe seus dados para ver a estratégia de estudo.';
    }
  }

  function salvarLeadLocal(formData) {
    try {
      const leads = JSON.parse(localStorage.getItem('pl_leads') || '[]');
      leads.push({ ...formData, criadoEm: new Date().toISOString() });
      localStorage.setItem('pl_leads', JSON.stringify(leads));
    } catch(e) { console.warn('Erro ao salvar lead:', e); }
  }

  if (pubConcurso) {
    pubConcurso.addEventListener('change', () => {
      if (pubConcurso.value) preencherMaterias(pubConcurso.value);
      atualizarPreview();
    });
  }

  document.querySelectorAll('.switch-pub').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.val;
      if (pubConcurso) pubConcurso.value = val;
      preencherMaterias(val);
      atualizarPreview();
    });
  });

  [pubDataProva, pubHorasDia, pubDiasSemana].forEach(el => {
    if (!el) return;
    el.addEventListener('input', atualizarPreview);
    el.addEventListener('change', atualizarPreview);
  });

  const pubTelefone = document.getElementById('pubTelefone');
  if (pubTelefone) {
    pubTelefone.addEventListener('input', e => {
      e.target.value = formatarTelefone(e.target.value);
    });
  }

  if (pubDifBox) pubDifBox.addEventListener('change', () => {});
  if (pubFacBox) pubFacBox.addEventListener('change', () => {});

  pubPlanForm.addEventListener('submit', e => {
    e.preventDefault();

    const concurso   = pubConcurso ? pubConcurso.value : 'CFO PMBA';
    const nome       = (document.getElementById('pubNome')        || {}).value || '';
    const email      = (document.getElementById('pubEmail')       || {}).value || '';
    const telefone   = (document.getElementById('pubTelefone')    || {}).value || '';
    const dataProva  = pubDataProva ? pubDataProva.value : '';
    const horas      = parseInt(pubHorasDia ? pubHorasDia.value : '') || 2;
    const dias       = parseInt(pubDiasSemana ? pubDiasSemana.value : '') || 5;
    const nivel      = (document.getElementById('pubNivel')       || {}).value || 'intermediario';
    const trabalha   = (document.getElementById('pubTrabalha')    || {}).value || '';
    const estudou    = (document.getElementById('pubEstudouAntes')|| {}).value || '';
    const notaAlvo   = (document.getElementById('pubNotaAlvo')    || {}).value || '';
    const obs        = (document.getElementById('pubObservacoes') || {}).value || '';

    const diffs = [...document.querySelectorAll('[name=pubDificuldade]:checked')].map(c => c.value);
    const facs  = [...document.querySelectorAll('[name=pubFacilidade]:checked')].map(c => c.value);
    const subs  = MATERIAS_PUB[concurso] || MATERIAS_PUB['SD PMBA'];

    // Prioridade: dificuldades > todas as matérias; excluir facilidades
    const prioritized = diffs.length
      ? diffs
      : subs.filter(s => !facs.includes(s));

    // Salvar lead no localStorage
    salvarLeadLocal({ nome, email, telefone, concurso, dataProva, horas, dias, nivel, trabalha, estudou, notaAlvo, dificuldades: diffs, facilidades: facs, obs });

    const hoje = new Date(); hoje.setHours(0,0,0,0);
    const daysLeft = dataProva
      ? Math.max(1, Math.ceil((new Date(dataProva + 'T00:00:00') - hoje) / 86400000))
      : 60;
    const weekDays   = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'].slice(0, dias);
    const sessPerDay = Math.max(1, Math.floor(horas * 60 / 55));

    const result = document.getElementById('pubPlanResult');
    let html = `
      <div style="margin-bottom:16px;">
        <h4 style="font-size:18px;margin-bottom:6px;">📋 Plano Pomodoro — ${concurso}</h4>
        <p style="font-size:13px;color:var(--gray-mid);">
          ${nome ? `<strong style="color:var(--accent-light)">${nome}</strong> · ` : ''}
          <strong style="color:var(--accent-light)">${horas}h/dia × ${dias} dias</strong> = ${horas*dias}h/semana ·
          <strong style="color:var(--white)">${daysLeft} dias até a prova</strong>
          ${nivel ? ` · Nível: <strong style="color:var(--white)">${nivel}</strong>` : ''}
        </p>
        ${diffs.length ? `<p style="font-size:12px;color:var(--gray-mid);margin-top:4px;">⚠️ Prioridade: <strong style="color:var(--white)">${diffs.slice(0,3).join(', ')}</strong></p>` : ''}
      </div>`;

    weekDays.forEach((day, i) => {
      html += `<div class="prd-day"><div class="prd-day-title">📅 ${day}</div>`;
      for (let s = 0; s < sessPerDay; s++) {
        const sub  = prioritized[((i * sessPerDay) + s) % prioritized.length];
        const tipo = s === 0 ? 'Teoria' : (s === sessPerDay - 1 && sessPerDay > 2 ? 'Revisão' : 'Questões');
        html += `<div class="prd-session">⏱ Sessão ${s+1} (25min): <strong>${sub}</strong> — ${tipo}</div>`;
      }
      html += `</div>`;
    });

    const waMsg = encodeURIComponent(
      `Olá Professor Leão! Gerei meu plano de estudos para ${concurso}${nome ? ` (sou ${nome})` : ''} e quero começar meus estudos.`
    );
    html += `
      <div class="plan-wa-cta">
        <div>
          <strong>💡 Dica do Professor Leão</strong>
          <p>Imprima e cole na parede. A execução consistente supera qualquer estratégia perfeita. Foco e disciplina!</p>
        </div>
        <a href="https://wa.me/5577999229281?text=${waMsg}" target="_blank" rel="noopener" class="btn btn--primary btn--sm">
          Falar com o Professor →
        </a>
      </div>`;

    if (result) {
      result.innerHTML = html;
      result.classList.add('show');
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Inicializar com CFO PMBA
  preencherMaterias('CFO PMBA');
  atualizarPreview();
})();

/* ── Formatador de telefone (formulário de contato) ── */
document.addEventListener('DOMContentLoaded', () => {
  ['whatsapp', 'telefone', 'pubTelefone'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', e => {
      e.target.value = formatarTelefone(e.target.value);
    });
  });
});
