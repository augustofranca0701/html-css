// Modal
const botaoTeste = document.querySelector('#botaoteste');
const botaoFechar = document.querySelector('#fechar');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

botaoTeste.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

botaoFechar.addEventListener('click', () => {
    modal.classList.remove('is-active');
});