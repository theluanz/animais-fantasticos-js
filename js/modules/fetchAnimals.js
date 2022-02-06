import AnimateNumbers from './animateNumbers.js';

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3>
    <span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function initAnimationNumbers() {
    const animateNumbers = new AnimateNumbers('[data-numero]', '.numeros', 'ativo');
    animateNumbers.init();
  }

  async function createAnimals() {
    try {
      const animaisJson = await (await fetch(url)).json();
      animaisJson.forEach((animal) => {
        fillAnimals(animal);
      });
      initAnimationNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  return createAnimals();
}
