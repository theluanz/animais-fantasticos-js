export default function initHours() {
  const worksWekeend = document.querySelector('[data-wekeend]');
  const days = worksWekeend.dataset.wekeend.split(',').map(Number);

  const worksAtHours = document.querySelector('[data-hours]');
  const hours = worksAtHours.dataset.hours.split(',').map(Number);

  const today = new Date();

  const isOpen = today.getHours() >= hours[0]
    && days.indexOf(today.getDay()) !== -1
    && today.getHours() < hours[1];

  if (isOpen) {
    worksWekeend.classList.add('isOpen');
  }
}
