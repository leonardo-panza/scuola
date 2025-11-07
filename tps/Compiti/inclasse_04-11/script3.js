const voti = [5, 4, 6, 8, 9, 6, 7];

let testo = document.getElementById("messaggio");
let totale;
let conta = 0;

voti.forEach(voto, () =>{
    totale += voto;
    conta++;
})

media = parseInt(totale)/parseInt(conta);

function valutaVoto(media){
    if(media>=6){
        testo.textContent = "Promosso" + media ;
    }else if (media<6 && media>5){
        testo.textContent = "Rimandato" + media;
    }else{
        testo.textContent = "Bocciato" + media;
    }
}

valutaVoto(media);