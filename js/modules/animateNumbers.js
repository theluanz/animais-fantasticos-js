export default function initAnimateNumbers() {
  function animateNumbers() {
    const numbers = document.querySelectorAll('[data-numero]');

    numbers.forEach((item) => {
      const value = +item.innerText;
      let start = 0;
      const increment = Math.ceil(value / 100);

      const time = setInterval(() => {
        start += increment;
        item.innerText = start;
        if (start > value) {
          clearInterval(time);
          item.innerText = value;
        }
      }, 25 * Math.random());
    });
  }
  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animateNumbers();
    }
  }
  const observerTarget = document.querySelector('.numeros');
  observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
