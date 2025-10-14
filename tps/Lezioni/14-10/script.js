let btn = document.querySelector("#bottone");
let convalida = document.querySelector("#validita");
let elenco_risultati = document.querySelector(".elenco-risultati");

let numeri = document.querySelectorAll(".input");
numeri.forEach(function(numero){
    numero.addEventListener("enter", controlla);
});

btn.addEventListener("click", controlla);

function controlla(){

    let numeri = document.querySelectorAll(".input");
    let binario = document.querySelector("#binario");
    binario.style.opacity = 0;

    let num_binario = "";

    let err = false;
    numeri.forEach(function(numero){
        
        numero = numero.value;
        try{
            numero = parseInt(numero);
            console.log("si" + numero)
            if(!Number.isInteger(numero)){err = true}
            if (numero>255 || numero<0){err = true}

            let bin = transformaore(numero);

            if(num_binario.length<24){
                num_binario = num_binario + bin + ".";
            }else{
                num_binario = num_binario + bin;
            }
        }catch (error){
            err = true;
        }
    });

    if(!err){
        binario.textContent = num_binario;
        binario.style.opacity = 1;
        elenco_risultati.style.opacity = 1;
        convalida.textContent = "Indirizzo IP valido";
    }else{
        convalida.textContent = "Indirizzo IP non valido";
        elenco_risultati.opacity = 1;
        console.log("passo");
    }
}

function transformaore(num){

    let bin = "";

    for(let i = 7; i>=0; i--){
        if(num-(2**i)>=0){
            num = num-(2**i);
            bin += 1;
        }else{
            bin += 0;
        }
    }

    return bin;

}

//Prendo tutti gli slot testo
let input = document.querySelectorAll(".input");

//Prendo ogni singolo elemento e lo carico nella variabile cerca uno ad uno
input.forEach(function(cerca){

    //Aggiungo a tutti uno ad uno l'evento di selezionarsi quando ci clicco sopra
    cerca.addEventListener("click", function(){
        this.select();
    })
    
    
})