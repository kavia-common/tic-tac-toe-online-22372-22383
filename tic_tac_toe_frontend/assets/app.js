(function(){
  // Minimal demo interactivity: set "home" active after load
  function setActive(id){
    ['nav-home','nav-user','nav-heart','nav-comment'].forEach(k=>{
      var el = document.getElementById(k);
      if(!el) return;
      if(k===id){ el.classList.add('active'); }
      else { el.classList.remove('active'); }
    });
  }
  document.addEventListener('DOMContentLoaded', function(){
    setActive('nav-home');
  });
})();
