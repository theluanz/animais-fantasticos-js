export default function initAnimationScroll() {
  const sectionScroll = document.querySelectorAll('[data-anime="scroll"]');
  const windowSizeBreak = window.innerHeight * 0.6;

  function animateSectionScroll() {
    sectionScroll.forEach((item) => {
      const sectionIsVisible = item.getBoundingClientRect().top - windowSizeBreak;
      if (sectionIsVisible < 0) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }
  animateSectionScroll();

  window.addEventListener('scroll', animateSectionScroll);
}
