/* ============================================
   PROFESSOR LEÃO – SCRIPT PRINCIPAL
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── HEADER SCROLL ──────────────────────────
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ── MOBILE MENU ────────────────────────────
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  if (toggle && menu) {
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
  }

  // ── SCROLL ANIMATIONS ──────────────────────
  const animTargets = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
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
      const el     = entry.target;
      const target = parseInt(el.dataset.target);
      const step   = Math.ceil(target / (1800 / 16));
      let cur = 0;
      const timer = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = cur >= 10000 ? '+' + (cur / 1000).toFixed(0) + 'K'
          : cur >= 1000 ? '+' + cur.toLocaleString('pt-BR')
          : el.dataset.target == 95 ? cur + '%' : '+' + cur;
        if (cur >= target) {
          clearInterval(timer);
          if (target === 1000)  el.textContent = '+1.000';
          else if (target === 500)   el.textContent = '+500h';
          else if (target === 10000) el.textContent = '+10.000';
          else if (target === 95)    el.textContent = '95%';
        }
      }, 16);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  // ── CURSO FILTER ───────────────────────────
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.curso-card').forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
        if (show) card.style.animation = 'fadeIn 0.3s ease forwards';
      });
    });
  });

  // ── CATEGORY PILLS ─────────────────────────
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('category-pill--active'));
      pill.classList.add('category-pill--active');
    });
  });

  // ── CONTACT FORM ───────────────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = '<span>Enviando...</span>';
      setTimeout(() => {
        contactForm.innerHTML = `
          <div class="placeholder__icon form__success-icon">✅</div>
          <div class="form__success-title">Mensagem enviada!</div>
          <p class="form__success-text">
            Obrigado pelo contato! O Professor Leão vai retornar em breve.<br/>
            Enquanto isso, siga no Instagram <strong>@professor.leao</strong>.
          </p>`;
        contactForm.classList.add('form--success');
      }, 1200);
    });
  }

  // ── SMOOTH ANCHOR SCROLL ───────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
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

// Inject fadeIn keyframe
const _styleTag = document.createElement('style');
_styleTag.textContent = `
  @keyframes fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
`;
document.head.appendChild(_styleTag);

