/**
 * Inicio da animação para o hamburger menu mobile
 */
const menuMobile = document.querySelector('#menuMobile');
const menuMobileLinks = document.querySelector('.menuItens');

menuMobile.addEventListener('click', function() {
    menuMobile.classList.toggle('is-active');
    menuMobileLinks.classList.toggle('active');
});


/** 
 * Menu newsletter Modal 
 */
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('#newsletter');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal ) {
        modal.style.display = 'none';
    }
});

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');

// Mostra mensagem de erro
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

// Mostra mensagem se foi validado
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

// Faz a validação nos campos
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} deve ser preenchido.`);
        }   else {
            showValid(input);
        }
    })
}

// Pega o nome do input
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email]);
    
})