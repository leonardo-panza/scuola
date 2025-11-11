const voti = [5, 4, 6, 8, 9, 6, 7];

let testo = document.getElementById("messaggio");

function valutaVoto(){
    
    let totale = 0;
    let numVoti = voti.length
    for(let i = 0; i<numVoti; i++){
        totale += voti[i];
    }

    let media = totale/numVoti;

    if(media>=6){
        testo.textContent = "Promosso: " + media ;
    }else if (media<6 && media>5){
        testo.textContent = "Rimandato: " + media;
    }else{
        testo.textContent = "Bocciato: " + media;
    }

}

valutaVoto();