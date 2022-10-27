const distance = prompt("inserisci il numero di kilometri che vuoi percorrere");
const age = prompt("inserisci la tua età");
let price = distance * 0.21;

if (age < 18) {
    price = price * 0.8;
} else if (age > 65) {
    price = price * 0.6;
}

price = price.toFixed(2);

const h1Ticket = document.getElementById("ticket");
h1Ticket.innerHTML = `${price} &euro;`;