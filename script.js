document.addEventListener('DOMContentLoaded', function(){
  var burger = document.querySelector('.hamburger');
  var nav = document.querySelector('.main-nav');
  if(burger && nav){
    burger.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }

  // Mobile dropdown toggle (tap to expand on small screens)
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(function(toggle){
    toggle.addEventListener('click', function(e){
      if(window.innerWidth <= 900){
        e.preventDefault();
        var parent = toggle.closest('.dropdown');
        parent.classList.toggle('open');
      }
    });
  });

  var form = document.querySelector('#contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      btn.textContent = 'Message Sent!';
      btn.style.background = '#2e7d32';
      form.reset();
      setTimeout(function(){ btn.textContent = 'Send Message'; btn.style.background=''; }, 3000);
    });
  }
  var year = document.querySelector('#year');
  if(year){ year.textContent = new Date().getFullYear(); }
});
