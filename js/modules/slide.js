export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener('mousemove', this.onMove);
    console.log('clicou');
  }

  onMove() {
    console.log('moveu');
  }

  onEnd() {
    this.wrapper.removeEventListener('mousemove', this.onMove);
    console.log('acabou');
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  init() {
    this.addSlideEvents();
    return this;
  }
}
