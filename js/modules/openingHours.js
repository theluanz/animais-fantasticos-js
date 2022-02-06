export default class OpeningHours {
  constructor(dayOfWekend, hoursOpen) {
    this.worksWekeend = document.querySelector(dayOfWekend);
    this.hoursOpen = hoursOpen;
    this.days = this.worksWekeend.dataset.wekeend.split(',').map(Number);
    this.activeClass = 'isOpen';
  }

  dataOpening() {
    this.worksAtHours = document.querySelector(this.hoursOpen);
    this.hours = this.worksAtHours.dataset.hours.split(',').map(Number);
  }

  dateNow() {
    this.dataNow = new Date();
    this.today = this.dataNow.getDay();
    this.hoursNow = this.dataNow.getUTCHours() - 3;
  }

  isOpen() {
    this.isOpen = this.hoursNow >= this.hours[0]
      && this.hoursNow < this.hours[1]
      && this.days.indexOf(this.today) !== -1;

    return this.isOpen;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.worksWekeend.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.worksWekeend && this.hoursOpen) {
      this.dataOpening();
      this.dateNow();
      this.activeOpen();
    }
    return this;
  }
}
