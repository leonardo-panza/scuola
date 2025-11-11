
const lista = document.querySelector("#lista");

let citta = ["Napoli", "Reggio Calabria", "Bari", "Trapani", "Palermo", "Cosenza", "Catanzaro", "Caltanisetta", "Bergamo"];

citta.forEach(c => {

    let punto = document.createElement("li");
    punto.textContent = `Voglio visitare ${c}!`;
    lista.append(punto);
});