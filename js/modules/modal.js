export default function initModal() {
  const openButton = document.querySelector('[data-modal="open"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickOver(e) {
    if (this === e.target) { toggleModal(e); }
  }
  if (openButton && closeButton && containerModal) {
    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOver);
  }
}
