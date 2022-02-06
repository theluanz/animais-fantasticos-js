export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  function datasetDist() {
    const sectionAnimals = document.querySelectorAll(
      '.animais-descricao section',
    );

    sectionAnimals.forEach((item) => {
      const n = Math.round(Math.random());
      if (n) {
        item.setAttribute('data-anime', 'show-right');
      } else {
        item.setAttribute('data-anime', 'show-down');
      }
    });
    sectionAnimals[0].classList.add(sectionAnimals[0].dataset.anime);
  }

  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
  }
  datasetDist();

  if (tabContent.length && tabMenu.length) {
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
