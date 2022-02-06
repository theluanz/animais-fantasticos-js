export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const span = document.querySelector(target);
      span.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((error) => console.log(error));
}
