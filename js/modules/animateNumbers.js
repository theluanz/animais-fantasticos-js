export default class AnimateNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementNumber(number) {
    const value = +number.innerText;
    let start = 0;
    const increment = Math.ceil(value / 100);

    const time = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start >= value) {
        clearInterval(time);
        number.innerText = value;
      }
    }, 25 * Math.random());
  }

  animateNumbers() {
    this.numbers.forEach((item) => {
      AnimateNumbers.incrementNumber(item);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);

    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
      this.animateNumbers();
    }

    return this;
  }
}
