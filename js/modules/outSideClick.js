export default function outSideClick(element, events, callback) {
  const outside = 'data-outside';

  const html = document.documentElement;
  function handleOutSideClick(event) {
    if (!element.contains(event.target)) {
      callback();
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutSideClick);
      });
    }
  }
  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutSideClick);
      }, 0);
    });
    element.setAttribute(outside, '');
  }
}
