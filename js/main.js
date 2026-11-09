(function(){
  const toggle=document.getElementById('menuToggle');
  const menu=document.getElementById('mobileNav');
  if(toggle&&menu){
    function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','メニューを開く');menu.hidden=true;}
    toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');menu.hidden=!open;});
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
    document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu()});
  }
  function showArea(area){
    document.querySelectorAll('[data-area]').forEach(btn=>{
      const on=btn.getAttribute('data-area')===area;
      btn.classList.toggle('active',on);
      if(btn.classList.contains('plan-pin'))btn.setAttribute('aria-pressed',String(on));
    });
    document.querySelectorAll('[data-detail]').forEach(el=>{
      const on=el.getAttribute('data-detail')===area;
      el.classList.toggle('active',on);el.hidden=!on;
    });
  }
  document.querySelectorAll('button[data-area]').forEach(btn=>btn.addEventListener('click',()=>showArea(btn.dataset.area)));
})();