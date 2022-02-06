export default function initFetchBitcoin() {}

fetch('https://blockchain.info/ticker')
  .then((response) => response.json())
  .then((json) => {
    const span = document.querySelector('.btc-preco');
    span.innerText = (1000 / json.BRL.sell).toFixed(4);
  })
  .catch((error) => console.log(error));
