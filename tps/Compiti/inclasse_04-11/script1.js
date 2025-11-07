const rubrica = [
    ["Giancarlo", "gianca72@gmail.com", "333-345-3456"],
    ["Annamaria", "annamary76@outlook.com", "342-256-6778"]
];

const lista = document.getElementById("lista");
const ricerca = document.getElementById("ricerca");
ricerca.addEventListener("input", cerca);

function cerca(){
    let cercato = ricerca.value.toLowerCase();
    rubrica.forEach(elemento => {
        console.log(elemento[0]);
        if(elemento[0].toLowerCase().includes(cercato)){

            filtrati.appendChild(punto);

        }
    });

    mostra(filtrati);

}

function mostra(dati){

    dati.forEach(contatto => {
        let punto = document.createElement('li');
        punto.textContent = contatto[0];
        lista.appendChild(punto);
    });

}

mostra(rubrica);