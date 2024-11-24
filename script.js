'use strict';

const buttonMenu = document.querySelector('.button_menu');
const buttonClose = document.querySelector('.button_close');
const menuBlock = document.querySelector('.menu');
const bodyEl = document.querySelector('body');

function closeMenu() {
    menuBlock.classList.add('is-hidden');
    bodyEl.classList.remove('overflow-hidden');
}

function openMenu() {
    menuBlock.classList.remove('is-hidden');
    bodyEl.classList.add('overflow-hidden');
}

buttonMenu.addEventListener('click', () => {

    if (!(menuBlock.classList.contains('is-hidden'))) return;

    openMenu();
});

buttonClose.addEventListener('click', () => {

    if (menuBlock.classList.contains('is-hidden')) return;

    closeMenu();
});

window.onresize = function() {
    let widthWindow = window.innerWidth;
    if(widthWindow > 780) {
        closeMenu();
    }
};
