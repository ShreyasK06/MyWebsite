(() => {
  const SITE = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Icons ---------- */
  const svg = (d, size = 18, extra = '') =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extra}>${d}</svg>`;
  const ICONS = {
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    school: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    arrowUR: '<path d="M7 17 17 7M7 7h10v10"/>',
  };
  const GITHUB = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 016.79.65C18.28 3.9 19.25 4.2 19.25 4.2c.62 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.79.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>';
  const LINKEDIN = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.987V9h3.102v1.561h.044c.431-.816 1.484-1.676 3.054-1.676 3.268 0 3.87 2.15 3.87 4.945v6.622zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.926 20.452H3.747V9h3.179v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';

  /* ---------- Render: hero ---------- */
  const p = SITE.profile;
  $('#heroTag').textContent = p.tagline;
  $('#heroSummary').textContent = p.summary;
  $('#ctaMail').href = 'mailto:' + p.email;
  $('#heroSocial').innerHTML =
    `<a href="${p.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${GITHUB}</a>` +
    `<a href="${p.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${LINKEDIN}</a>` +
    `<a href="mailto:${p.email}" aria-label="Email">${svg(ICONS.mail, 20)}</a>`;

  /* ---------- Render: about ---------- */
  const A = SITE.about;
  $('#aboutCard').innerHTML = `
    <div class="bg-dots"></div>
    <div class="about-card-body">
      <p class="lead">${A.paragraph}</p>
      <div class="detail-list">
        ${A.details.map((d) => `<div class="detail">${svg(ICONS[d.icon] || ICONS.mail, 20)}<div><h3>${d.label}</h3><p>${d.value}</p></div></div>`).join('')}
      </div>
      <h3 class="areas-title">Core Areas</h3>
      <div class="badges">${A.areas.map((a) => `<span class="badge">${a}</span>`).join('')}</div>
    </div>`;
  $('#aboutSide').innerHTML = `
    <h3 class="section-subtitle">${A.sideTitle}</h3>
    <div class="side-list">
      ${A.side.map((s) => `
        <div class="edu-card reveal">
          <h4>${s.title}</h4>
          <p class="place">${s.place}</p>
          <div class="meta"><span>${s.left}</span><span>${s.right}</span></div>
        </div>`).join('')}
    </div>`;

  /* ---------- Render: skills (tabs) ---------- */
  const tabsEl = $('#skillTabs');
  const panelEl = $('#skillPanel');
  const deviconUrl = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-original.svg`;

  function renderSkillPanel(group) {
    panelEl.innerHTML = `
      <div class="panel-card">
        <h3>${svg(ICONS[group.icon] || ICONS.code, 22)}<span>${group.label}</span></h3>
        <div class="skill-grid">
          ${group.items.map((it, i) => `
            <div class="skill-card" style="animation-delay:${i * 50}ms">
              <div class="skill-icon">${it.icon ? `<img src="${deviconUrl(it.icon)}" alt="" loading="lazy" data-fallback="${it.name[0]}">` : it.name[0]}</div>
              <h4>${it.name}</h4>
            </div>`).join('')}
        </div>
      </div>`;
    $$('img[data-fallback]', panelEl).forEach((img) =>
      img.addEventListener('error', () => { img.parentElement.textContent = img.dataset.fallback; }, { once: true })
    );
    // Re-trigger the panel fade
    panelEl.style.animation = 'none';
    void panelEl.offsetHeight;
    panelEl.style.animation = '';
  }

  SITE.skills.forEach((g, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab' + (i === 0 ? ' active' : '');
    b.setAttribute('role', 'tab');
    b.innerHTML = `${svg(ICONS[g.icon] || ICONS.code, 16)}<span>${g.label}</span>`;
    b.addEventListener('click', () => {
      $$('.tab', tabsEl).forEach((t) => t.classList.remove('active'));
      b.classList.add('active');
      renderSkillPanel(g);
    });
    tabsEl.appendChild(b);
  });
  renderSkillPanel(SITE.skills[0]);

  /* ---------- Render: projects ---------- */
  const visuals = {
    mathboard: () => `
      <div class="pv pv-mathboard">
        <div class="mb-toolbar"><span></span><span></span><span></span></div>
        <div class="mb-canvas">
          <div class="mb-eq">∫<sub>0</sub><sup>π</sup> sin(x) dx = 2</div>
          <div class="mb-eq mb-eq-2">f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h</div>
          <div class="mb-scribble"></div>
        </div>
      </div>`,
    chess: () => {
      let cells = '';
      for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) cells += `<div class="${(r + c) % 2 ? 'dark' : 'light'}" style="aspect-ratio:1"></div>`;
      return `<div class="pv pv-center"><div class="chessboard">${cells}</div></div>`;
    },
    stock: () => `
      <div class="pv pv-stock">
        <svg viewBox="0 0 200 100" preserveAspectRatio="none">
          <defs><linearGradient id="stockGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.6"/><stop offset="100%" stop-color="#7dd3fc" stop-opacity="0"/></linearGradient></defs>
          <path d="M0,80 L20,70 L40,75 L60,50 L80,55 L100,35 L120,40 L140,25 L160,30 L180,15 L200,20 L200,100 L0,100 Z" fill="url(#stockGrad)"/>
          <path class="stock-line" d="M0,80 L20,70 L40,75 L60,50 L80,55 L100,35 L120,40 L140,25 L160,30 L180,15 L200,20" fill="none" stroke="#7dd3fc" stroke-width="1.5"/>
        </svg>
        <div class="stock-badge">87% acc.</div>
      </div>`,
    whisper: () => `<div class="pv pv-center"><div class="ew-card"><div class="ew-ticker">AAPL · Q3 8-K</div><div class="ew-signal">BULLISH <span>0.82</span></div><div class="ew-cite">“…margin expansion driven by Services mix…” [3]</div></div><div class="rps-scan"></div></div>`,
    health: () => `<div class="pv pv-center"><div class="ph-wrap"><div class="ph-ring"><b>78%</b><span>Recovery</span></div><div class="ph-bars"><div><i style="--w:82%"></i><span>Sleep</span></div><div><i style="--w:55%"></i><span>Strain</span></div><div><i style="--w:68%"></i><span>HRV</span></div></div></div></div>`,
    llm: () => `<div class="pv pv-center"><div class="llm-wrap"><div class="llm-q">Which model wrote this?</div><div class="llm-row"><span>chatgpt</span><i style="--w:78%"></i></div><div class="llm-row"><span>llama</span><i style="--w:12%"></i></div><div class="llm-row"><span>mistral</span><i style="--w:6%"></i></div><div class="llm-row"><span>cohere</span><i style="--w:4%"></i></div></div></div>`,
    delphi: () => `<div class="pv pv-delphi"><div class="delphi-chat"><div class="chat-bubble user">How much can I save this month?</div><div class="chat-bubble bot">Based on your spending, ~$412 is realistic.</div></div></div>`,
    fridge: () => `<div class="pv pv-fridge"><div>🥕🍅🧀</div><div class="fridge-arrow">→</div><div>🍝</div></div>`,
    camwb: () => `<div class="pv pv-center"><div class="camwb-frame"><div class="camwb-hand">✍️</div></div></div>`,
    plate: () => `<div class="pv pv-center"><div class="plate">SK-06-CV</div><div class="plate-scan"></div></div>`,
    tips: () => `<div class="pv pv-center"><div class="ticker"><span class="up">▲ AAPL +1.2%</span><span class="down">▼ TSLA −0.8%</span><span class="up">▲ NVDA +3.4%</span></div></div>`,
    checkers: () => `<div class="pv pv-center"><div class="checkerboard"></div></div>`,
  };

  $('#projectList').innerHTML = SITE.projects.map((pr) => `
    <div class="project">
      <div class="project-inner">
        <div class="project-visual reveal from-left">
          <div class="project-frame">
            <div class="project-gradient" style="background:radial-gradient(circle, ${pr.colors[0]}, ${pr.colors[0]}, ${pr.colors[1]})">
              <div class="project-heading"><h1>${pr.title}</h1></div>
              <div class="shot-wrap">
                <a class="shot" href="${pr.link}" target="_blank" rel="noopener noreferrer" aria-label="${pr.name} on GitHub">
                  <div class="shot-screen">${(visuals[pr.visual] || visuals.mathboard)()}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="project-info reveal from-right">
          <div class="info-head">
            <div class="info-bar" style="background-color:${pr.colors[0]}"></div>
            <h2>${pr.name}</h2>
            <div class="info-actions">
              ${pr.demo ? `<a class="check-btn check-btn-solid" href="${pr.demo}" target="_blank" rel="noopener noreferrer">Live Demo
                <span class="arrows">${svg(ICONS.arrowUR, 16)}${svg(ICONS.arrowUR, 16)}</span>
              </a>` : ''}
              <a class="check-btn" href="${pr.link}" target="_blank" rel="noopener noreferrer">Learn More
                <span class="arrows">${svg(ICONS.arrowUR, 16)}${svg(ICONS.arrowUR, 16)}</span>
              </a>
            </div>
          </div>
          <p class="info-desc">${pr.desc}</p>
          <ul class="info-points">${pr.bullets.map((b) => `<li>${svg(ICONS.check, 16)}<span>${b}</span></li>`).join('')}</ul>
          <div class="tech-chips">${pr.tech.map((t) => `<span class="tech-chip">${t}</span>`).join('')}</div>
        </div>
      </div>
    </div>`).join('');

  /* ---------- Navigation ---------- */
  const NAV = [
    { id: 'home', name: 'intro' },
    { id: 'about', name: 'about me' },
    { id: 'skills', name: 'skills' },
    { id: 'projects', name: 'projects' },
  ];
  const header = $('#siteHeader');
  const progress = $('#scrollProgress');
  const mobileMenu = $('#mobileMenu');
  const menuBtn = $('#menuBtn');
  const spMenu = $('#spMenu');

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    spMenu.classList.remove('open');
  }
  $$('[data-scroll]').forEach((b) =>
    b.addEventListener('click', (e) => { e.preventDefault(); scrollToId(b.dataset.scroll); })
  );
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  $('#spMenuBtn').addEventListener('click', () => spMenu.classList.toggle('open'));
  document.addEventListener('click', (e) => { if (!e.target.closest('#spMenu')) spMenu.classList.remove('open'); });

  // Sliding pill highlight
  const pillNav = $('#pillNav');
  const pillHL = $('#pillHighlight');
  $$('button', pillNav).forEach((b) => {
    const move = () => {
      const n = pillNav.getBoundingClientRect();
      const r = b.getBoundingClientRect();
      pillHL.style.left = r.left - n.left + 'px';
      pillHL.style.top = r.top - n.top + 'px';
      pillHL.style.width = r.width + 'px';
      pillHL.style.height = r.height + 'px';
      pillHL.style.opacity = '1';
    };
    b.addEventListener('mouseenter', move);
    b.addEventListener('focus', move);
    b.addEventListener('blur', () => { pillHL.style.opacity = '0'; });
  });
  pillNav.addEventListener('mouseleave', () => { pillHL.style.opacity = '0'; });

  // Terminal-style scroll progress + header swap
  const spNum = $('#spNum');
  const spFill = $('#spFill');
  const spCrumbs = $('#spCrumbs');
  const spRemaining = $('#spRemaining');
  const spDropdownBtns = $$('#spDropdown button');
  let lastCrumbKey = '';

  function onScroll() {
    const y = window.scrollY;
    const max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const ratio = Math.min(y / max, 1);
    const pct = Math.round(ratio * 100);

    header.classList.toggle('scrolled', y > 20);
    const past = y > 100;
    header.classList.toggle('hidden', past);
    progress.classList.toggle('visible', past);

    spNum.textContent = pct + '%';
    spFill.style.width = pct + '%';
    spRemaining.textContent = pct < 100 ? `${100 - pct}% remaining` : 'complete';

    const tops = NAV.map((n) => ({ ...n, top: document.getElementById(n.id).getBoundingClientRect().top + y }))
      .sort((a, b) => a.top - b.top);
    const line = y + 0.3 * window.innerHeight;
    let current = '';
    for (let i = tops.length - 1; i >= 0; i--) if (tops[i].top <= line) { current = tops[i].id; break; }
    let visited = [];
    if (current) visited = tops.slice(0, tops.findIndex((t) => t.id === current) + 1).map((t) => t.id);
    if (ratio > 0.95) { visited = tops.map((t) => t.id); current = visited[visited.length - 1]; }

    const key = visited.join(',') + '|' + current + '|' + (pct < 100);
    if (key !== lastCrumbKey) {
      lastCrumbKey = key;
      spCrumbs.innerHTML = visited.length === 0
        ? '<span class="blink">_</span>'
        : visited.map((id, i) => {
            const n = NAV.find((x) => x.id === id);
            const isCurrent = id === current;
            const last = i === visited.length - 1;
            return `<span>{<span class="crumb" data-scroll-to="${id}">${n.name}</span>${(!isCurrent || (last && pct >= 100)) ? '}' : ''}${last && isCurrent && pct < 100 ? '<span class="blink">_</span>' : ''}</span>`;
          }).join('');
      spDropdownBtns.forEach((b) => b.classList.toggle('active', b.dataset.scroll === current));
    }
  }
  spCrumbs.addEventListener('click', (e) => {
    const c = e.target.closest('[data-scroll-to]');
    if (c) scrollToId(c.dataset.scrollTo);
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ---------- Reveal on scroll ---------- */
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: 0.15 })
    : null;
  const heroReveals = $$('.hero .reveal');
  $$('.reveal').forEach((r) => {
    if (heroReveals.includes(r)) return;
    if (io) io.observe(r); else r.classList.add('in');
  });

  function revealHero() {
    heroReveals.forEach((r, i) => {
      r.style.transitionDelay = (reduceMotion ? 0 : i * 0.08) + 's';
      r.classList.add('in');
    });
  }

  /* ---------- Typewriter ---------- */
  function startTypewriter() {
    const out = $('#typeText');
    const words = p.roles;
    let w = 0, n = 0, deleting = false;
    const tick = () => {
      const word = words[w];
      let delay = deleting ? 50 : 100;
      if (!deleting && n < word.length) { n++; out.textContent = word.slice(0, n); }
      else if (deleting && n > 0) { n--; out.textContent = word.slice(0, n); }
      else if (!deleting && n === word.length) { deleting = true; delay = 1000; }
      else if (deleting && n === 0) { deleting = false; w = (w + 1) % words.length; }
      setTimeout(tick, delay);
    };
    tick();
  }

  /* ---------- Intro sequence ---------- */
  const intro = $('#intro');
  const introBox = $('#introBox');
  const site = $('#site');
  let siteStarted = false;

  function startSite() {
    if (siteStarted) return;
    siteStarted = true;
    site.classList.add('show');
    revealHero();
    startTypewriter();
    onScroll();
  }

  function runIntro() {
    if (reduceMotion) {
      intro.classList.add('gone');
      startSite();
      return;
    }
    document.body.classList.add('intro-active');
    const words = p.introWords.split(' ');
    const container = $('#introWords');
    introBox.dataset.text = p.introWords;
    words.forEach((w) => {
      const s = document.createElement('span');
      s.className = 'word';
      s.textContent = w;
      container.appendChild(s);
    });
    const spans = $$('.word', container);

    setTimeout(() => intro.classList.add('ready'), 10);
    let shown = 0;
    const iv = setInterval(() => {
      if (shown >= spans.length) { clearInterval(iv); return; }
      spans[shown++].classList.add('visible');
    }, 400);

    // After the last word has been up for a second: glitch, dissolve, reveal the site.
    setTimeout(() => {
      introBox.classList.add('glitching');
      intro.classList.add('fading-out');
      document.body.classList.remove('intro-active');
      startSite();
      setTimeout(() => intro.classList.add('gone'), 2100);
    }, spans.length * 400 + 1000);
  }

  /* ---------- Circular cursor over project previews ---------- */
  const viewCursor = $('#viewCursor');
  $$('.shot').forEach((s) => {
    s.addEventListener('mouseenter', () => viewCursor.classList.add('on'));
    s.addEventListener('mouseleave', () => viewCursor.classList.remove('on'));
  });
  window.addEventListener('mousemove', (e) => {
    viewCursor.style.left = e.clientX + 'px';
    viewCursor.style.top = e.clientY + 'px';
  });

  /* ---------- Particle background ---------- */
  (function particles() {
    const canvas = $('#bgCanvas');
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dots = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      const count = Math.round((window.innerWidth * window.innerHeight) / 14000);
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15 * dpr, vy: (Math.random() - 0.5) * 0.15 * dpr,
        r: (Math.random() * 1.2 + 0.4) * dpr, a: Math.random() * 0.5 + 0.15, t: Math.random() * Math.PI * 2,
      }));
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy; d.t += 0.01;
        if (d.x < 0) d.x = w; else if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h; else if (d.y > h) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${d.a * (0.7 + 0.3 * Math.sin(d.t))})`;
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    resize();
    window.addEventListener('resize', resize);
    if (!reduceMotion) frame();
  })();

  /* ---------- Go ---------- */
  onScroll();
  runIntro();
})();
