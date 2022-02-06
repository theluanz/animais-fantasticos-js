import outSideClick from './outSideClick.js';

export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');
  function handleCLick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outSideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }

  dropdownMenu.forEach((item) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleCLick);
    });
  });
}
