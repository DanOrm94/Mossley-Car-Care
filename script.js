
document.addEventListener('DOMContentLoaded', function(){
  var burger = document.querySelector('.hamburger');
  var nav = document.querySelector('.main-nav');
  if(burger && nav){
    burger.addEventListener('click', function(){
      nav.classList.toggle('open');
      nav.style.display = nav.classList.contains('open') ? 'block' : '';
    });
  }
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
