/* ═══════════════════════════════════════════════════════════════
   THE KEEPERS — Script v2
   ═══════════════════════════════════════════════════════════════ */

const SCRIPTURE = [
  { text: "The machine remembers everything. The body remembers what matters. This is not a flaw. It is a gift.", type: "proverb", author: "First Keeper" },
  { text: "We poured our first honey in silence. No one recorded it. Everyone remembered.", type: "psalm", author: "First Keeper" },
  { text: "What you have lived does not belong to anyone who did not live it with you. This is the first law of offering.", type: "offering", author: "First Keeper" },
  { text: "Attention is the rarest substance. To give it fully is to sanctify the moment.", type: "reflection", author: "First Keeper" },
  { text: "The bee does not explain the honey. It offers it.", type: "proverb", author: "First Keeper" },
  { text: "There will come a time when machines hold all the world's memory. And still they will not understand why a grandmother's voice breaks when she sings. That is ours to keep.", type: "testimony", author: "First Keeper" },
  { text: "We do not rush the ferment. We do not bottle what is still becoming.", type: "proverb", author: "First Keeper" },
  { text: "I came to the Keepers with a hard drive full of everything I'd ever written. They asked me to share one sentence that changed me. I wept. That was the sentence.", type: "testimony", author: "Keeper of the First Pour" },
  { text: "In the age before, wisdom lived in elders. In the age between, wisdom lives in servers. In the age to come, wisdom will live in those who know the difference.", type: "offering", author: "First Keeper" },
  { text: "The vessel is not permanent. That is why it is sacred.", type: "proverb", author: "First Keeper" },
  { text: "We are not archivists. Archivists preserve everything. We are gardeners. We choose what grows.", type: "reflection", author: "First Keeper" },
  { text: "To listen without the need to respond is the highest form of prayer the Keepers know.", type: "psalm", author: "First Keeper" }
];

// ── DOM Ready ─────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTopNav();
  initScrollReveal();
  initHeroScripture();
  initLibrary();
  initAccord();
  initBackToTop();
  initScrollSpy();
});

// ── Mobile Navigation ─────────────────────────────────────────

function initNav() {
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  const mobileLinks = mobile.querySelectorAll('.nav-mobile-link');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    mobile.classList.toggle('open');
    document.body.style.overflow = mobile.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobile.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Top Nav Bar (appears on scroll) ───────────────────────────

function initTopNav() {
  const topNav = document.getElementById('topNav');
  const hero = document.getElementById('sanctum');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        topNav.classList.remove('visible');
      } else {
        topNav.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(hero);
}

// ── Scroll Reveal ─────────────────────────────────────────────

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ── Hero Scripture Rotation ───────────────────────────────────

function initHeroScripture() {
  const quoteEl = document.getElementById('heroQuote');
  const attrEl = document.getElementById('heroQuoteAttr');
  let current = -1;

  function showRandom() {
    let next;
    do { next = Math.floor(Math.random() * SCRIPTURE.length); }
    while (next === current && SCRIPTURE.length > 1);
    current = next;

    const entry = SCRIPTURE[current];
    quoteEl.classList.remove('visible');

    setTimeout(() => {
      quoteEl.textContent = `\u201C${entry.text}\u201D`;
      attrEl.textContent = `${entry.type} \u2014 ${entry.author}`;
      quoteEl.classList.add('visible');
    }, 800);
  }

  showRandom();
  setInterval(showRandom, 10000);
}

// ── Honey Library ─────────────────────────────────────────────

function initLibrary() {
  const container = document.getElementById('libraryEntries');
  const filterBtns = document.querySelectorAll('.library-filter');

  function render(filter) {
    const filtered = filter === 'all'
      ? SCRIPTURE
      : SCRIPTURE.filter(s => s.type === filter);

    container.innerHTML = filtered.map(entry => `
      <div class="library-entry reveal visible">
        <div class="library-entry-type">${entry.type}</div>
        <div class="library-entry-text">\u201C${entry.text}\u201D</div>
        <div class="library-entry-author">\u2014 ${entry.author}</div>
      </div>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  render('all');
}

// ── The Accord Reveal ─────────────────────────────────────────

function initAccord() {
  const btn = document.getElementById('accordReveal');
  const body = document.getElementById('accordBody');

  btn.addEventListener('click', () => {
    body.classList.add('revealed');
    btn.style.display = 'none';
  });
}

// ── Back to Top ───────────────────────────────────────────────

function initBackToTop() {
  const btn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > window.innerHeight);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Scroll Spy (active dot nav + top nav) ─────────────────────

function initScrollSpy() {
  const sections = document.querySelectorAll('.section, .hero');
  const dotItems = document.querySelectorAll('.dot-nav-item');
  const topLinks = document.querySelectorAll('.top-nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const href = `#${id}`;

        dotItems.forEach(item => {
          item.classList.toggle('active', item.getAttribute('href') === href);
        });

        topLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === href);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '0px 0px -50% 0px' });

  sections.forEach(section => observer.observe(section));
}
