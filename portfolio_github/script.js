(function(){
  emailjs.init("RZ6aFxstOQE8OtUB9QhWC");
  // ---- theme ----
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const initial = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if(initial === 'dark') root.classList.add('dark');
  const sunSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
  const moonSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
  const themebtn = document.getElementById('themebtn');
  function paintThemeBtn(){ themebtn.innerHTML = root.classList.contains('dark') ? sunSvg : moonSvg; }
  paintThemeBtn();
  themebtn.addEventListener('click', function(){
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    paintThemeBtn();
  });

  // ---- loading screen ----
  window.addEventListener('load', function(){
    setTimeout(function(){ document.getElementById('loading').classList.add('hide'); }, 900);
  });

  // ---- scroll progress ----
  const progress = document.getElementById('progress');
  function onScroll(){
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h>0 ? Math.min(1, window.scrollY/h)*100 : 0) + '%';
    document.getElementById('siteheader').classList.toggle('scrolled', window.scrollY > 12);
    document.getElementById('hirebtn').classList.toggle('show', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // ---- nav scroll-to + active state ----
  function go(id){
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    document.getElementById('mobilemenu').classList.remove('open');
    document.getElementById('menubtn').setAttribute('aria-expanded','false');
  }
  document.querySelectorAll('[data-target]').forEach(function(el){
    el.addEventListener('click', function(e){
      e.preventDefault();
      go(el.getAttribute('data-target'));
    });
  });
  document.getElementById('logolink').addEventListener('click', function(e){
    e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'});
  });

  const sections = ['about','education','skills','projects','experience','certifications','achievements','contact'];
  const navButtons = document.querySelectorAll('.navlinks button, #mobilemenu button');
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        navButtons.forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-target') === entry.target.id); });
      }
    });
  }, {rootMargin:'-40% 0px -50% 0px'});
  sections.forEach(function(id){ const el = document.getElementById(id); if(el) io.observe(el); });

  // ---- mobile menu ----
  const menubtn = document.getElementById('menubtn');
  const hamburgerSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16M4 6h16M4 18h16"/></svg>';
  const closeSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  menubtn.innerHTML = hamburgerSvg;
  menubtn.addEventListener('click', function(){
    const menu = document.getElementById('mobilemenu');
    const open = menu.classList.toggle('open');
    menubtn.setAttribute('aria-expanded', open ? 'true':'false');
    menubtn.innerHTML = open ? closeSvg : hamburgerSvg;
  });

  // ---- reveal on scroll ----
  const revealIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ entry.target.classList.add('in'); revealIO.unobserve(entry.target); }
    });
  }, {threshold:0.1, rootMargin:'-60px'});
  document.querySelectorAll('.reveal').forEach(function(el){ revealIO.observe(el); });

  // ---- typewriter ----
  const roles = ['Frontend Developer','Embedded Systems Enthusiast','Electronics & Communication Engineer'];
  const typedEl = document.getElementById('typed');
  let ri=0, ci=0, deleting=false;
  function typeStep(){
    const word = roles[ri % roles.length];
    if(!deleting && ci < word.length){ ci++; typedEl.textContent = word.slice(0,ci); setTimeout(typeStep, 55); }
    else if(!deleting && ci === word.length){ deleting = true; setTimeout(typeStep, 1600); }
    else if(deleting && ci > 0){ ci--; typedEl.textContent = word.slice(0,ci); setTimeout(typeStep, 34); }
    else { deleting = false; ri++; setTimeout(typeStep, 200); }
  }
  typeStep();

  // ---- animated counters ----
  const statIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      statIO.unobserve(entry.target);
      const el = entry.target;
      const target = parseFloat(el.getAttribute('data-count'));
      const decimal = el.getAttribute('data-decimal') === 'true';
      const dur = 1400; let start = null;
      function frame(ts){
        if(start===null) start = ts;
        const p = Math.min(1, (ts-start)/dur);
        const eased = 1 - Math.pow(1-p, 3);
        const val = eased * target;
        el.textContent = decimal ? val.toFixed(2) : Math.round(val);
        if(p<1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }, {threshold:0.4});
  document.querySelectorAll('.stat .num').forEach(function(el){ statIO.observe(el); });

  // ---- skill bars ----
  const skillIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      skillIO.unobserve(entry.target);
      const level = entry.target.getAttribute('data-level');
      entry.target.querySelector('.skillfill').style.width = level + '%';
    });
  }, {threshold:0.3});
  document.querySelectorAll('.skillitem').forEach(function(el){ skillIO.observe(el); });

  // ---- project filter ----
  document.querySelectorAll('.filterbtn').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.filterbtn').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      const f = btn.getAttribute('data-filter');
      document.querySelectorAll('#projgrid .card').forEach(function(card){
        const show = f === 'All' || card.getAttribute('data-cat') === f;
        card.style.display = show ? 'flex' : 'none';
      });
    });
  });

  // ---- toast ----
  let toastTimer;
  function showToast(msg){
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.classList.remove('show'); }, 2600);
  }

  // ---- copy email ----
  document.getElementById('copyemail').addEventListener('click', function(){
    navigator.clipboard.writeText('nishandhineepalanivel13@gmail.com').then(function(){
      showToast('Email address copied to clipboard');
    });
  });

  
// ---- contact form ----
document.getElementById("contactform").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send(
        "service_ornj19a",
        "template_yrpnubo",
        {
            name: document.getElementById("cname").value,
            email: document.getElementById("cemail").value,
            message: document.getElementById("cmsg").value,
        }
    )
    .then(function () {
        showToast("Message sent successfully!");
        document.getElementById("contactform").reset();
    })
    .catch(function (error) {
        console.error(error);
        showToast("Failed to send message.");
    });
});

  // ---- back to top ----
  document.getElementById('backtop').addEventListener('click', function(){
    window.scrollTo({top:0, behavior:'smooth'});
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  // ---- custom cursor (desktop only) ----
  if(window.matchMedia('(hover: hover) and (pointer: fine)').matches){
    const cursor = document.createElement('div');
    cursor.style.cssText = 'position:fixed;top:0;left:0;z-index:200;pointer-events:none;border-radius:99px;border:1px solid var(--brass);width:16px;height:16px;background:rgba(201,151,63,.6);transition:width .15s,height .15s,background-color .15s;';
    document.body.appendChild(cursor);
    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', function(e){
      const isInteractive = e.target.closest && e.target.closest('a, button, input, textarea');
      const size = isInteractive ? 36 : 16;
      cursor.style.width = size+'px'; cursor.style.height = size+'px';
      cursor.style.background = isInteractive ? 'rgba(201,151,63,.15)' : 'rgba(201,151,63,.6)';
      cursor.style.transform = 'translate(' + (e.clientX - size/2) + 'px,' + (e.clientY - size/2) + 'px)';
    });
  }
})();
