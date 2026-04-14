/* ============================================================
   🌌 MAIN SCRIPT
   - Animated starfield
   - Dynamic content rendering from data.js
   - Smooth scroll & sticky header highlights
   - Scroll-reveal animations
   ============================================================ */

// ── Starfield Animation ──────────────────────────────────────
(function initStarfield() {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function create() {
    resize();
    stars = [];
    const count = Math.min(300, Math.floor(canvas.width * canvas.height / 4000));
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.003 + 0.001,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.phase += s.speed;
      const alpha = 0.4 + 0.4 * Math.abs(Math.sin(s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,200,255,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', create);
  create();
  draw();
})();

// ── Render Content from SITE data ────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderAbout();
  renderResearch();
  renderPublications();
  renderCV();
  renderBlog();
  renderSoftware();
  renderResources();
  renderContact();
  renderFooter();
  initScrollReveal();
  initActiveNav();
});

/* ── Navigation ──────────────────────────────────────────── */
function renderNav() {
  const el = document.getElementById('nav-list');
  if (!el) return;
  el.innerHTML = `
    <li><span class="nav-name">${SITE.hero.name}</span></li>
    <li><a href="#about">About</a></li>
    <li><a href="#research">Research</a></li>
    <li><a href="#publications">Publications</a></li>
    <li><a href="#cv">CV</a></li>
    <li><a href="#blog">Blog</a></li>
    <li><a href="#software">Software</a></li>
    <li><a href="#resources">Resources</a></li>
    <li><a href="#contact">Contact</a></li>
  `;
}

/* ── Hero ─────────────────────────────────────────────────── */
function renderHero() {
  const el = document.getElementById('hero-content');
  if (!el) return;
  const h = SITE.hero;

  // Avatar: show image if path provided, otherwise show emoji
  const avatarContent = h.avatar.endsWith('.jpg') || h.avatar.endsWith('.png') || h.avatar.endsWith('.webp')
    ? `<img src="${h.avatar}" alt="${h.name}">`
    : h.avatar;

  el.innerHTML = `
    <div class="hero-inner">
      <div>
        <div class="hero-badge">${h.badge}</div>
        <h1 class="hero-name">${h.name}</h1>
        <div class="hero-title">${h.title}</div>
        <div class="hero-uni">${h.university}</div>
        <p class="hero-bio">${h.bio}</p>
        <div class="hero-links">
          <a href="#research" class="btn btn-primary">View Research</a>
          <a href="#publications" class="btn btn-outline">Publications</a>
          <a href="#blog" class="btn btn-outline">Writings</a>
          <a href="#contact" class="btn btn-outline">Get in Touch</a>
        </div>
      </div>
      <div class="avatar">${avatarContent}</div>
    </div>
  `;
}

/* ── About ────────────────────────────────────────────────── */
function renderAbout() {
  const el = document.getElementById('about-content');
  if (!el) return;
  const a = SITE.about;

  const paragraphs = a.paragraphs.map(p => `<p>${p}</p>`).join('');
  const stats = a.stats.map(s => `
    <div class="stat-card">
      <div class="stat-num">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="section-label">About Me</div>
    <div class="section-title">Who I am</div>
    <div class="section-line"></div>
    <div class="about-grid">
      <div class="about-text">${paragraphs}</div>
      <div class="stats-grid">${stats}</div>
    </div>
  `;
}

/* ── Research ─────────────────────────────────────────────── */
function renderResearch() {
  const el = document.getElementById('research-content');
  if (!el) return;

  const cards = SITE.research.map(r => `
    <div class="res-card">
      <div class="res-icon">${r.icon}</div>
      <div class="res-title">${r.title}</div>
      <div class="res-desc">${r.description}</div>
      <span class="res-tag">${r.tag}</span>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="section-label">Research</div>
    <div class="section-title">What I work on</div>
    <div class="section-line"></div>
    <div class="research-grid">${cards}</div>
  `;
}

/* ── Publications ─────────────────────────────────────────── */
function renderPublications() {
  const el = document.getElementById('publications-content');
  if (!el) return;

  const items = SITE.publications.map(p => {
    let links = '';
    if (p.arxiv) links += `<a href="${p.arxiv}" class="pub-link" target="_blank" rel="noopener">arXiv</a>`;
    if (p.doi)   links += `<a href="${p.doi}" class="pub-link" target="_blank" rel="noopener">DOI</a>`;

    return `
      <div class="pub-item">
        <div class="pub-year">${p.year}</div>
        <div>
          <div class="pub-title">${p.title}</div>
          <div class="pub-authors">${p.authors}</div>
          <div class="pub-journal">${p.journal}</div>
          ${links ? `<div class="pub-links">${links}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  el.innerHTML = `
    <div class="section-label">Publications</div>
    <div class="section-title">Selected papers</div>
    <div class="section-line"></div>
    <div class="pub-list">${items}</div>
  `;
}

/* ── CV ───────────────────────────────────────────────────── */
function renderCV() {
  const el = document.getElementById('cv-content');
  if (!el) return;
  const cv = SITE.cv;

  function timeline(entries) {
    return entries.map(e => `
      <div class="tl-item">
        <div class="tl-dot"></div>
        <div>
          <div class="tl-year">${e.year}</div>
          <div class="tl-role">${e.role}</div>
          <div class="tl-place">${e.place}</div>
        </div>
      </div>
    `).join('');
  }

  function skillCloud(skills) {
    return skills.map(s => `<span class="skill">${s}</span>`).join('');
  }

  el.innerHTML = `
    <div class="section-label">Curriculum Vitae</div>
    <div class="section-title">Background & Skills</div>
    <div class="section-line"></div>
    <div class="cv-grid">
      <div>
        <div class="cv-section-title">Education</div>
        <div class="timeline">${timeline(cv.education)}</div>
        <div class="cv-section-title" style="margin-top:1.5rem">Experience</div>
        <div class="timeline">${timeline(cv.experience)}</div>
      </div>
      <div>
        <div class="cv-section-title">Technical Skills</div>
        <div class="skills-cloud">${skillCloud(cv.technicalSkills)}</div>
        <div class="cv-section-title" style="margin-top:2rem">Observational</div>
        <div class="skills-cloud">${skillCloud(cv.observationalSkills)}</div>
        <a href="${cv.downloadLink}" class="cv-download" target="_blank" rel="noopener">⬇ Download full CV (PDF)</a>
      </div>
    </div>
  `;
}

/* ── Software & Tools ─────────────────────────────────────── */
function renderSoftware() {
  const el = document.getElementById('software-content');
  if (!el) return;

  const cards = SITE.software.map(s => {
    const wip = s.underConstruction;
    const cls = `blog-card${wip ? ' under-construction' : ''}`;
    const href = wip ? 'javascript:void(0)' : s.link;
    return `
    <a href="${href}" class="${cls}">
      <div class="blog-img ${s.gradient}">${s.emoji}</div>
      <div class="blog-body">
        <div class="blog-title">${s.title}</div>
        <div class="blog-excerpt">${s.excerpt}</div>
        <span class="blog-tag">${s.tag}</span>
      </div>
    </a>
  `;
  }).join('');

  el.innerHTML = `
    <div class="section-label">Software & Tools</div>
    <div class="section-title">What I build</div>
    <div class="section-line"></div>
    <div class="blog-grid">${cards}</div>
  `;
}

/* ── Resources & Links ────────────────────────────────────── */
function renderResources() {
  const el = document.getElementById('resources-content');
  if (!el) return;

  const cards = SITE.resources.map(r => {
    const wip = r.underConstruction;
    const cls = `blog-card${wip ? ' under-construction' : ''}`;
    const href = wip ? 'javascript:void(0)' : r.link;
    return `
    <a href="${href}" class="${cls}">
      <div class="blog-img ${r.gradient}">${r.emoji}</div>
      <div class="blog-body">
        <div class="blog-title">${r.title}</div>
        <div class="blog-excerpt">${r.excerpt}</div>
      </div>
    </a>
  `;
  }).join('');

  el.innerHTML = `
    <div class="section-label">Resources</div>
    <div class="section-title">Useful links</div>
    <div class="section-line"></div>
    <div class="blog-grid">${cards}</div>
  `;
}

/* ── Blog ─────────────────────────────────────────────────── */
function renderBlog() {
  const el = document.getElementById('blog-content');
  if (!el) return;

  function blogCards(items) {
    return items.map(b => {
      const wip = b.underConstruction;
      const cls = `blog-card${wip ? ' under-construction' : ''}`;
      const href = wip ? 'javascript:void(0)' : b.link;
      return `
      <a href="${href}" class="${cls}">
        <div class="blog-img ${b.gradient}">${b.emoji}</div>
        <div class="blog-body">
          <div class="blog-date">${b.date}</div>
          <div class="blog-title">${b.title}</div>
          <div class="blog-excerpt">${b.excerpt}</div>
          <span class="blog-tag">${b.tag}</span>
        </div>
      </a>
    `;
    }).join('');
  }

  const gpCards = blogCards(SITE.blog.generalPublic);
  const techCards = blogCards(SITE.blog.technical);

  el.innerHTML = `
    <div class="section-label">Blog</div>
    <div class="section-title">Science writing & tutorials</div>
    <div class="section-line"></div>

    <div class="blog-subsection-title">🌍 General Public</div>
    <div class="blog-grid">${gpCards}</div>

    <div class="blog-subsection-title" style="margin-top:3rem">🔭 For Astrophysicists — Tutorials</div>
    <div class="blog-grid">${techCards}</div>
  `;
}

/* ── Contact ──────────────────────────────────────────────── */
function renderContact() {
  const el = document.getElementById('contact-content');
  if (!el) return;
  const c = SITE.contact;

  const socials = c.social.map(s => `
    <a href="${s.url}" class="social-btn" target="_blank" rel="noopener">${s.icon} ${s.label}</a>
  `).join('');

  el.innerHTML = `
    <div class="contact-inner">
      <div class="section-label" style="text-align:center">Contact</div>
      <div class="section-title">Get in touch</div>
      <div class="section-line" style="margin:0 auto 2.5rem"></div>
      <p class="contact-desc">${c.description}</p>
      <a href="mailto:${c.email}" class="contact-email">${c.email}</a>
      <div class="social-links">${socials}</div>
    </div>
  `;
}

/* ── Footer ───────────────────────────────────────────────── */
function renderFooter() {
  const el = document.getElementById('footer-content');
  if (!el) return;
  el.innerHTML = `<p>${SITE.footer}</p>`;
}

/* ── Scroll-Reveal ────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── Active Nav Highlight on Scroll ───────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { rootMargin: '-30% 0px -70% 0px' });

  sections.forEach(s => observer.observe(s));
}
