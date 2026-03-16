(() => {
  const content = {
    en: {
      metaTitle: 'HVAC Website Audit | More Quote Requests',
      metaDescription:
        'Get more HVAC quote requests with a modern, mobile-first website and a free website audit.',
      skipToContent: 'Skip to content',
      brand: 'HVAC Web Agency',
      navAudit: 'Get My Audit',
      heroEyebrow: 'HVAC Website Conversion Specialist',
      heroTitle: 'Stop losing quote requests to your local competitors',
      heroLead:
        'An outdated, slow, or hard-to-use website costs you money every day. I rebuild HVAC websites to rank higher on Google, load instantly on mobile, and actually convert visitors into booked jobs.',
      heroPrimaryCta: 'Get My Free Website Audit',
      heroSecondaryCta: 'See Example Work',
      heroProof: [
        '73% of local HVAC searches are on mobile',
        'A 1-second delay reduces conversions by 7%',
        '85% of users judge credibility based on design',
        '2x higher conversion rate on average'
      ],
      auditIncludesTitle: 'What your audit includes',
      auditIncludes: [
        'Homepage conversion and call-to-action review',
        'Mobile UX check for quote and call actions',
        'Trust signal audit (proof, guarantees, service area clarity)',
        'Speed wins that can improve lead quality'
      ],
      problemsTitle: 'Common HVAC website issues that quietly lose quote requests',
      problemsIntro:
        'Most HVAC sites do not fail because of traffic. They fail because visitors cannot trust the business quickly or request a quote in under a minute.',
      problems: [
        {
          title: 'Outdated design',
          body: 'A dated first impression can make homeowners question reliability. 85% of users judge credibility based on design.'
        },
        {
          title: 'Poor mobile UX',
          body: 'Tap targets are too small. 73% of local HVAC searches happen on a mobile device, so mobile ease is critical.'
        },
        {
          title: 'Slow loading',
          body: 'Pages slower than 3 seconds lose 53% of mobile visitors before they even see your phone number.'
        },
        {
          title: 'Weak trust signals',
          body: 'Missing guarantees and proof reduce confidence. 88% of consumers trust online reviews as much as personal recommendations.'
        },
        {
          title: 'Unclear quote flow',
          body: 'Unclear next steps cause bounce rates to soar up to 70% without capturing a single lead.'
        }
      ],
      resultsTitle: 'Recent Website Makeovers',
      resultsIntro: 'See how a professional website redesign directly impacts lead generation, trust, and mobile user experience.',
      labels: {
        before: 'Old Website',
        after: 'New Website',
        problem: 'The Problem',
        solution: 'Our Solution'
      },
      results: [
        {
          title: 'Mobile Experience Optimization',
          problem: 'Non-responsive, broken layout. Text too small to read, no easy way for mobile users to call in an emergency.',
          solution: 'Fast-loading, mobile-first design with a large, sticky "Tap to Call" button to capture urgent traffic.',
          imgBefore: 'assets/web_mobile_before.png',
          imgAfter: 'assets/web_mobile_after.png'
        },
        {
          title: 'Lead Generation Focus',
          problem: 'Generic homepage with dense text, hidden phone number, and zero clear calls-to-action.',
          solution: 'High-contrast design with a bold value proposition and prominent "Get a Quote" buttons front and center.',
          imgBefore: 'assets/web_leadgen_before.png',
          imgAfter: 'assets/web_leadgen_after.png'
        },
        {
          title: 'Building Homeowner Trust',
          problem: 'Barebones, anonymous design lacking social proof, making the business look untrustworthy.',
          solution: 'Premium layout featuring 5-star Google review snippets, guarantees, and clear professional branding.',
          imgBefore: 'assets/web_trust_before.png',
          imgAfter: 'assets/web_trust_after.png'
        }
      ],
      benefitsTitle: 'What your HVAC business gains',
      benefits: [
        {
          title: 'More quote requests',
          body: 'Increase inbound leads by up to 45% with clear offers and stronger calls-to-action.'
        },
        {
          title: 'Better mobile experience',
          body: 'Capture the 70%+ of mobile users with fast, thumb-friendly navigation.'
        },
        {
          title: 'Stronger trust',
          body: 'Boost buyer confidence and close rates by 2x with proof-focused landing pages.'
        },
        {
          title: 'Faster website',
          body: 'Improve load times by 2-3 seconds to retain up to 50% more potential customers.'
        }
      ],
      processTitle: 'Simple 4-step process',
      process: [
        { title: 'Audit', body: 'Review your current site and identify conversion blockers.' },
        { title: 'Plan', body: 'Define a practical, lead-focused structure tailored to your services.' },
        { title: 'Build', body: 'Create a clean, responsive page with clear messaging and CTAs.' },
        { title: 'Launch', body: 'Go live and support your team with a stronger online conversion flow.' }
      ],
      finalCtaTitle: 'Get a free HVAC website audit',
      finalCtaLead:
        'Get a practical review showing exactly where your current site is leaking leads and what to fix first for faster quote conversions.',
      ctaPoints: [
        'Conversion bottlenecks highlighted',
        'Mobile UX fixes prioritized',
        'Trust and speed recommendations'
      ],
      formNameLabel: 'Name',
      formNamePlaceholder: 'Your full name',
      formWebsiteLabel: 'Website',
      formWebsitePlaceholder: 'yourwebsite.com',
      formEmailLabel: 'Email',
      formEmailPlaceholder: 'you@company.com',
      finalCtaButton: 'Send Me My Free Audit',
      finalCtaNote: 'No obligation. You keep the audit notes even if we do not work together.',
      footerLine: '<strong>Manager</strong> | HVAC Web Agency',
      footerLinkedIn: 'LinkedIn'
    },
    // Add Lithuanian translations here later. Missing keys automatically fall back to English.
    lt: {}
  };

  const queryLocale = new URLSearchParams(window.location.search).get('lang');
  const htmlLocale = document.documentElement.getAttribute('data-locale');
  const locale = (queryLocale || htmlLocale || 'en').toLowerCase();
  const activeLocale = Object.prototype.hasOwnProperty.call(content, locale) ? locale : 'en';

  const getValue = (path, source) =>
    path.split('.').reduce((acc, segment) => (acc && acc[segment] !== undefined ? acc[segment] : undefined), source);

  const t = (path) => getValue(path, content[activeLocale]) ?? getValue(path, content.en) ?? '';

  const renderTextNodes = () => {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
  };

  const renderSimpleList = (id, items) => {
    const root = document.getElementById(id);
    if (!root || !Array.isArray(items)) return;
    root.innerHTML = '';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      root.appendChild(li);
    });
  };

  const renderProblems = () => {
    const root = document.getElementById('problems-list');
    const problems = t('problems');
    if (!root || !Array.isArray(problems)) return;
    root.innerHTML = '';
    problems.forEach((problem) => {
      const article = document.createElement('article');
      article.className = 'card';
      article.innerHTML = `<h3>${problem.title}</h3><p>${problem.body}</p>`;
      root.appendChild(article);
    });
  };

  const renderResults = () => {
    const root = document.getElementById('results-list');
    const results = t('results');
    const labels = t('labels');
    if (!root || !Array.isArray(results) || !labels) return;
    root.innerHTML = '';

    results.forEach((result) => {
      const article = document.createElement('article');
      article.className = 'card result-card';
      article.innerHTML = `
        <h3 class="result-title">${result.title}</h3>
        <div class="before-after-container">
          <div class="ba-side ba-before">
            <span class="ba-label">${labels.before}</span>
            <img src="${result.imgBefore}" alt="Before image of ${result.title}" loading="lazy" />
          </div>
          <div class="ba-center">
             <div class="ba-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </div>
          </div>
          <div class="ba-side ba-after">
            <span class="ba-label">${labels.after}</span>
            <img src="${result.imgAfter}" alt="After image of ${result.title}" loading="lazy" />
          </div>
        </div>
        <div class="result-details">
          <div class="rd-col">
            <strong class="rd-label label-problem">${labels.problem}</strong>
            <p>${result.problem}</p>
          </div>
          <div class="rd-col">
            <strong class="rd-label label-solution">${labels.solution}</strong>
            <p>${result.solution}</p>
          </div>
        </div>
      `;
      root.appendChild(article);
    });
  };

  const renderBenefits = () => {
    const root = document.getElementById('benefits-list');
    const benefits = t('benefits');
    if (!root || !Array.isArray(benefits)) return;
    root.innerHTML = '';
    benefits.forEach((benefit) => {
      const article = document.createElement('article');
      article.className = 'benefit';
      article.innerHTML = `<h3>${benefit.title}</h3><p>${benefit.body}</p>`;
      root.appendChild(article);
    });
  };

  const renderProcess = () => {
    const root = document.getElementById('process-list');
    const process = t('process');
    if (!root || !Array.isArray(process)) return;
    root.innerHTML = '';
    process.forEach((step, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="step-number">${index + 1}</span>
        <div>
          <h3>${step.title}</h3>
          <p>${step.body}</p>
        </div>
      `;
      root.appendChild(li);
    });
  };

  const applyDocumentMeta = () => {
    document.documentElement.lang = activeLocale === 'lt' ? 'lt' : 'en';
    document.title = t('metaTitle');
    const description = document.getElementById('meta-description');
    if (description) description.setAttribute('content', t('metaDescription'));
  };

  applyDocumentMeta();
  renderTextNodes();
  renderSimpleList('hero-proof-list', t('heroProof'));
  renderSimpleList('audit-includes-list', t('auditIncludes'));
  renderProblems();
  renderResults();
  renderBenefits();
  renderProcess();
  renderSimpleList('cta-points-list', t('ctaPoints'));

  const header = document.querySelector('.site-header');
  const revealTargets = document.querySelectorAll('.card, .benefit, .process-list li, .hero-card');

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealTargets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
})();
