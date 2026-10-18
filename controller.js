(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const dictionary = window.HOMEPAGE_ZH || {};
  const nav = $('#nav-links');
  const main = $('#main');
  const menu = $('.menu-toggle');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const views = { academic: $('#academic-view'), life: $('#life-view') };
  const navigation = {
    academic: [['about','About'],['projects','Projects'],['publications','Publication'],['experience','Experience & internship'],['education','Education'],['visiting','Visiting'],['graduation','Graduation'],['skills','Skills']],
    life: [['life-about','Life']]
  };
  Object.assign(dictionary, {Music:'音乐',Travel:'旅行',Social:'社交','RV32I CORE':'RV32I 核心'});
  // Keep original text nodes, rather than replacing content or event handlers.
  const originals = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script,style,noscript')) continue;
    const key = node.nodeValue.trim().replace(/\s+/g,' ');
    if (Object.hasOwn(dictionary,key)) originals.push({node, original:node.nodeValue, key});
  }
  const attributes = $$('[aria-label]').map(el => ({el, value:el.getAttribute('aria-label')}));
  let savedLanguage = 'en';
  try { if (localStorage.getItem('yunfeng-language') === 'zh') savedLanguage = 'zh'; } catch {}
  function readRoute() {
    const params = new URLSearchParams(location.search);
    const lifeHash = ['life-about','music','travel','social'].includes(location.hash.slice(1));
    return {view:params.get('view') === 'life' || (!params.has('view') && lifeHash) ? 'life' : 'academic', lang:params.has('lang') ? (params.get('lang') === 'zh' ? 'zh' : 'en') : savedLanguage};
  }
  let current = readRoute();
  let desired = {...current};
  let busy = false;
  let historyRequested = false;
  const scrollPositions = {academic:0,life:0};
  const t = text => current.lang === 'zh' ? (dictionary[text] || text) : text;
  function translate() {
    originals.forEach(({node,original,key}) => { node.nodeValue = current.lang === 'en' ? original : original.replace(/\S[\s\S]*\S|\S/,dictionary[key]); });
    $('.profile h1').textContent = current.lang === 'zh' ? '李云峰' : 'Yunfeng Li';
    attributes.forEach(({el,value}) => el.setAttribute('aria-label',t(value)));
    document.documentElement.lang = current.lang === 'zh' ? 'zh-CN' : 'en';
    document.title = current.lang === 'zh' ? `Yunfeng Li · ${current.view === 'life' ? '生活随记' : '个人主页'}` : `Yunfeng Li · ${current.view === 'life' ? 'Life' : 'Personal Homepage'}`;
    try { localStorage.setItem('yunfeng-language',current.lang); } catch {}
    savedLanguage = current.lang;
  }
  function updateControls(state) {
    $$('[data-view]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === state.view)));
    $$('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === state.lang)));
    $('.mode-switch').classList.toggle('second',state.view === 'life');
    $('.language-switch').classList.toggle('second',state.lang === 'zh');
  }
  function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }
  function buildNavigation() {
    nav.replaceChildren();
    navigation[current.view].forEach(([id,label]) => {
      const link = document.createElement('a'); link.href = `#${id}`; link.textContent = t(label); nav.append(link);
    });
    if (current.view === 'academic') {
      const link = document.createElement('a'); link.href='assets/Yunfeng-Li-CV.pdf'; link.download=''; link.className='nav-cv'; link.textContent=t('CV ↗'); nav.append(link);
    }
    $('#nav-context').textContent = t(current.view === 'academic' ? 'Circuits & systems' : 'Notes from everyday life');
    closeMenu();
  }
  function syncNavigation() {
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    let active = links[0];
    const threshold = $('.site-header').getBoundingClientRect().height + 44;
    links.forEach(link => { const section = document.getElementById(link.hash.slice(1)); if (section && section.getBoundingClientRect().top <= threshold) active=link; });
    links.forEach(link => { link.classList.toggle('active',link===active); if(link===active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
  }
  function filterStatus() {
    const count = $$('.project:not([hidden])').length;
    $('#filter-status').textContent = current.lang === 'zh' ? `正在显示 ${count} 个项目。` : `Showing ${count} project${count===1?'':'s'}.`;
  }
  function applyState() {
    Object.entries(views).forEach(([name,element]) => { element.hidden = name !== current.view; });
    translate(); buildNavigation(); updateControls(current); filterStatus(); syncNavigation();
    const footerNote=$('.page-footer > span:nth-child(2)');
    footerNote.textContent=current.view==='life' ? (current.lang==='zh'?'音乐、远方与日常片刻。':'Music, places, and everyday moments.') : t('Circuits, systems, and things I build.');
  }
  async function fade(elements, from, to, duration) {
    if (reducedMotion.matches) return;
    const animations = elements.map(el => el.animate([{opacity:from},{opacity:to}],{duration,easing:'ease-out',fill:'both'}));
    await Promise.allSettled(animations.map(a=>a.finished));
    animations.forEach(a=>a.cancel());
  }
  async function processChanges() {
    if (busy) return;
    busy=true; document.body.classList.add('switching');
    try {
      while (current.view !== desired.view || current.lang !== desired.lang) {
        const oldView = current.view;
        const oldLang = current.lang;
        scrollPositions[oldView] = window.scrollY;
        // The sidebar stays in place on page changes. It only fades for translation.
        const outgoing = [views[oldView],nav,$('.page-footer')];
        if (oldLang !== desired.lang) outgoing.push($('.profile'));
        await fade(outgoing,1,0,110);
        current={...desired};
        applyState();
        if (oldView !== current.view) window.scrollTo({top:scrollPositions[current.view],behavior:'instant'});
        if (historyRequested) {
          const route=new URL(location.href); route.searchParams.set('view',current.view); route.searchParams.set('lang',current.lang);
          if (oldView!==current.view) route.hash='';
          history.pushState(null,'',route); historyRequested=false;
        }
        const incoming=[views[current.view],nav,$('.page-footer')];
        if(oldLang!==current.lang) incoming.push($('.profile'));
        await fade(incoming,0,1,190);
        updateControls(desired);
      }
      $('#page-status').textContent = current.lang==='zh' ? `已切换至${current.view==='life'?'生活':'学术'}页面，中文。` : `${current.view==='life'?'Life':'Academic'} page, English.`;
    } finally { busy=false; document.body.classList.remove('switching'); syncNavigation(); }
  }
  function requestChange(next, push=true) {
    desired={...desired,...next}; historyRequested=push;
    updateControls(desired); closeMenu(); void processChanges();
  }
  $$('[data-view]').forEach(button=>button.addEventListener('click',()=>requestChange({view:button.dataset.view})));
  $$('[data-lang]').forEach(button=>button.addEventListener('click',()=>requestChange({lang:button.dataset.lang})));
  window.addEventListener('popstate',()=>requestChange(readRoute(),false));
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
  nav.addEventListener('click',event=>{if(event.target.closest('a')) closeMenu();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
  let scrollFrame=false;
  window.addEventListener('scroll',()=>{if(!scrollFrame){scrollFrame=true;requestAnimationFrame(()=>{syncNavigation();scrollFrame=false;});}},{passive:true});
  $$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
    const category=button.dataset.filter;
    $$('[data-filter]').forEach(filter=>{filter.classList.toggle('selected',filter===button);filter.setAttribute('aria-pressed',String(filter===button));});
    $$('.project').forEach(project=>{project.hidden=category!=='all'&&project.dataset.category!==category;});
    filterStatus();
  }));
  $$('.city-toggle').forEach(button=>button.addEventListener('click',()=>{
    const open=button.getAttribute('aria-expanded')!=='true';
    button.setAttribute('aria-expanded',String(open));
    const panel=document.getElementById(button.getAttribute('aria-controls'));
    panel.inert=!open; panel.classList.toggle('open',open);
  }));
  const dialog=$('.photo-dialog');
  let photoIndex=0,album='01',opener=null;
  function updatePhoto() {
    const palettes=album==='01'?['sand','sage','blue']:['blue','sand','sage'];
    $('.viewer-image').className=`viewer-image landscape ${palettes[photoIndex]}`;
    $('.viewer-count').textContent=`${photoIndex+1} / 3`;
    $('#photo-title').textContent=`${t('Album preview')} ${album}`;
    $('.viewer-placeholder').textContent=`${t('Photo placeholder')} ${String(photoIndex+1).padStart(2,'0')}`;
  }
  $$('[data-photo]').forEach(button=>button.addEventListener('click',()=>{
    opener=button;photoIndex=Number(button.dataset.photo);album=button.dataset.album;updatePhoto();dialog.showModal();document.body.style.overflow='hidden';
  }));
  $('.viewer-close').addEventListener('click',()=>dialog.close());
  $('.viewer-prev').addEventListener('click',()=>{photoIndex=(photoIndex+2)%3;updatePhoto();});
  $('.viewer-next').addEventListener('click',()=>{photoIndex=(photoIndex+1)%3;updatePhoto();});
  dialog.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();photoIndex=(photoIndex+(event.key==='ArrowLeft'?2:1))%3;updatePhoto();}
  });
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus({preventScroll:true});});
  applyState();
  if(location.hash) requestAnimationFrame(()=>{const target=document.getElementById(location.hash.slice(1));if(target&&!target.closest('[hidden]')) target.scrollIntoView({behavior:'instant'});});
})();

