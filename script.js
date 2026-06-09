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
