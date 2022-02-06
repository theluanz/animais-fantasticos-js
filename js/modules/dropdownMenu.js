import outSideClick from './outSideClick.js';

export default class DropdownMenu {
  constructor(dropdownMenu, events) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenu);
    this.activeClass = 'ativo';
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    console.log(this.events);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    console.log(event.currentTarget);
    this.dropdownMenu.forEach((dropdown) => {
      dropdown.classList.add(this.activeClass);
      outSideClick(dropdown, ['touchstart', 'click'], () => {
        dropdown.classList.remove(this.activeClass);
      });
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenu.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenu.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
