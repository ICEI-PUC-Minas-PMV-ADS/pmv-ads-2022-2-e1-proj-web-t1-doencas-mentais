/**
 * Inicio da animação para o hamburger menu mobile
 */
 const menuMobileAlt = document.querySelector('#menuMobileAlt');
 const menuMobileLinksAlt = document.querySelector('.menuItensAlt');
 
 menuMobileAlt.addEventListener('click', function() {
     menuMobileAlt.classList.toggle('is-active');
     menuMobileLinksAlt.classList.toggle('active');
 })
 /**
  * Fim da animação
  */