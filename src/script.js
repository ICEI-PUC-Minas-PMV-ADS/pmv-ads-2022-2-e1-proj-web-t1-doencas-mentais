/**
 * Inicio da animação para o hamburger menu mobile
 */
const menuMobile = document.querySelector('#menuMobile');
const menuMobileLinks = document.querySelector('.menuItens');

menuMobile.addEventListener('click', function() {
    menuMobile.classList.toggle('is-active');
    menuMobileLinks.classList.toggle('active');
})
/**
 * Fim da animação
 */

