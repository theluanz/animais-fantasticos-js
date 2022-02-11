export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onMove = this.onMove.bind(this);
  }

  onStart(event) {
    let movement;
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.dist.startX = event.clientX;
      this.wrapper.addEventListener('mousemove', this.onMove);
      movement = 'mousemove';
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      movement = 'touchmove';
    }
    this.wrapper.addEventListener(movement, this.onMove);
  }

  onMove(event) {
    const pointerPosition = (event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX);
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const moveType = (event.type === 'mousedown') ? 'mousemove' : 'touchmove';
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(-${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition + this.dist.movement;
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);

    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  slidesConfig() {
    this.slidesArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        element,
        position,

      };
    });
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return (slide.offsetLeft - margin);
  }

  changeSlide(index) {
    const activeSlide = this.slidesArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
  }

  slidesIndexNav(index) {
    const last = this.slidesArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
    console.log(this.index);
  }

  init() {
    this.addSlideEvents();
    this.slidesConfig();
    this.changeSlide(3);
    return this;
  }
}
