// script.js - small interactions: nav toggle, smooth scroll, contact form handling
document.addEventListener('DOMContentLoaded', function(){
  // Year in footer
  var y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // Nav toggle for small screens
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');
  navToggle && navToggle.addEventListener('click', function(){
    if(siteNav.style.display === 'flex') siteNav.style.display = '';
    else siteNav.style.display = 'flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close nav on mobile
        if(window.innerWidth <= 800 && siteNav) siteNav.style.display = '';
      }
    });
  });

  // Simple client-side contact form handling
  var form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      alert('Please fill out all fields.');
      return;
    }
    // In a real site you'd send this to the server. Here we just show a confirmation.
    alert('Thanks, ' + name + '! Your message was sent (demo). We will contact you at ' + email + '.');
    form.reset();
  });
});
