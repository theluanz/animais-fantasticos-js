export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowSizeBreak = window.innerHeight * 0.6;

    this.animateSectionScroll = this.animateSectionScroll.bind(this);
    console.log(this);
  }

  animateSectionScroll() {
    this.sections.forEach((item) => {
      const sectionIsVisible = item.getBoundingClientRect().top - this.windowSizeBreak;
      if (sectionIsVisible < 0) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.animateSectionScroll();
      window.addEventListener('scroll', this.animateSectionScroll);
    }
    return this;
  }
}
