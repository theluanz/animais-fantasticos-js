export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.active = 'ativo';
  }

  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.active);
    });
    this.tabContent[index].classList.add(this.active, this.tabContent[index].dataset.anime);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    this.datasetDist();

    if (this.tabContent.length && this.tabMenu.length) {
      this.addTabNavEvent();
      this.activeTab(0);
    }
  }

  datasetDist() {
    this.tabContent.forEach((item) => {
      const n = Math.round(Math.random());
      if (n) {
        item.setAttribute('data-anime', 'show-right');
      } else {
        item.setAttribute('data-anime', 'show-down');
      }
    });
    this.tabContent[0].classList.add(this.tabContent[0].dataset.anime);
    return this;
  }
}
