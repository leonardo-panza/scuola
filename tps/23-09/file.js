//Stampo qualcosa quando clicco il bottone della pagina
//Come scrivere all'interno di un elemento del dom
//document object model è un albero che il browser genera quando renderizza la pagina
//Scrivo nel section con id="test" dell'html

/*
//document equivale alla pagina web
const section = document.querySelector("#test")
console.log(section)

//stampa tutto, anche se provo a mettere <b> </b>
section.textContent = "Hey dude-man, i'm a dude-man!"
*/

//creare un elemento e aggiungerlo al dom
/*
const section = document.querySelector("#test")
let paragrafo = document.createElement("p")
paragrafo.textContent = "Hey dude-man, i'm a dude-man!"
console.log(paragrafo)
section.appendChild(paragrafo)
*/

//Introduzione velocissima agli eventi

let bottone = document.querySelector("#id_butt");

//Quando la funzione serve una volta
bottone.addEventListener("click", funz_bottone);

//Quando la funzione serve più di una volta
//bottone.addEventListener("click", miafunzione)
/*
function miafunzione(){
    alert("Messaggio d'allerta")
}
*/

//Scrivere il codice js che consenta di inserire in una tabella una riga con due celle
//una contenente il nome e l'altra il cognome

function funz_bottone(){
    let nome = document.querySelector("#id_nome").value
    let cognome = document.querySelector("#id_cognome").value
    let tabella = document.querySelector("#tabella")
    // let slot_nome = document.querySelector("#slot_nome")
    // let slot_cognome = document.querySelector("#slot_cognome")
    let row = document.createElement("tr")
    let cella_nome = document.createElement("td")
    let cella_cognome = document.createElement("td")
    cella_cognome.textContent = cognome
    cella_nome.textContent = nome
    row.append(cella_cognome);
    row.append(cella_nome)
    tabella.append(row);
}