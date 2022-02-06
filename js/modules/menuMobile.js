import outSideClick from './outSideClick.js';

export default function initMenuMobile() {}

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');

function openMenu() {
  menuList.classList.add('ativo');
  menuButton.classList.add('ativo');
  outSideClick(menuList, ['click', 'touchstart'], () => {
    menuList.classList.remove('ativo');
    menuButton.classList.remove('ativo');
  });
}

['click', 'touchstart'].forEach((userEvent) => {
  menuButton.addEventListener(userEvent, openMenu);
});
