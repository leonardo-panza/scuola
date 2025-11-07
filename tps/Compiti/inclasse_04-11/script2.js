const form = document.querySelector("#form");
const barra = document.getElementById("nome");
const butt = document.getElementById("aggiungi");
const lista = document.getElementById("lista");
let att = [];

butt.addEventListener("click", aggiungi);

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

function aggiungi(){
    if(barra.value.trim() !== ""){
        att.push(barra.value.trim());
        barra.value = "";
        aggiornaLista();
    }
}

function aggiornaLista(){
    lista.innerHTML = "";
    att.forEach((elemento, i)=>{
        let punto = document.createElement("li");
        punto.textContent = elemento;
        punto.id = i;

        let butt_rmv = document.createElement("button");
        butt_rmv.textContent="Elimina";
        butt_rmv.id = i;

        butt_rmv.onclick = () => {
            console.log(butt_rmv.id);
            att.splice(butt_rmv.id, 1);
            aggiornaLista();
        };

        punto.appendChild(butt_rmv);
        lista.appendChild(punto);
    });
}