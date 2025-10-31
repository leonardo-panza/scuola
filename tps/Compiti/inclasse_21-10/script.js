
let bottone = document.querySelector("#butt");
let bottone_ip = document.querySelector("#butt_id");
let campo_nome = document.querySelector("#nome");
let campo_eta = document.querySelector("#eta");
let campo_mail = document.querySelector("#mail");

bottone.addEventListener("click", controlli);
bottone_ip.addEventListener("click", validaIp);

function controlli(){

    let errore_mail = document.querySelector("#validita_mail");
    let errore = "";

    let eta = campo_eta.value;
    let mail = campo_mail.value.trim();
    let nome = campo_nome.value.trim();

    if(nome.length<2){
        errore += "Nome non valido, deve contenere almeno due caratteri.\n";
    }
    
    //A-Z può contenere lettere in maiuscolo
    //a-z può contenere lettere in minuscolo
    //À-ÿ può contenere lettere accentate
    //\s può contenere spazi (Di Lauro, De Rossi)
    //+ può contenere 1+ lettere dei tipi specificati
    //^ inizio della stringa
    //$ fine della stringa

    if(/^[A-Za-zÀ-ÿ\s]+$/.test(nome)==false){
        errore += "Nome in formato non accettabile.\n";
    }

    if(eta<14 || eta>99){
        errore += "Età non valida, deve essere tra 14 e 99 anni.\n";
    }

    let chiocciole = 0;
    let punti = 0;
    for(const carattere of mail){
        if(carattere == "@"){
            chiocciole++;
        }
        if(chiocciole > 0 && carattere == "."){
            punti++;
        }
    }

    if(chiocciole != 1){
        errore += "La mail deve contenere una chiocciola @.\n"
        errore_mail.textContent = "E-mail non valida";
        errore_mail.style.opacity = 1;
    }else if(punti<1){
        errore += "Dopo la @ deve esserci almeno un punto.\n"
        errore_mail.textContent = "E-mail non valida";
        errore_mail.style.opacity = 1;
    }else{
        errore_mail.textContent="E-mail valida";
        errore_mail.style.opacity = 1;
    }

    if(errore != ""){
        alert("Errore!\n" + errore)
    }

}

function validaIp(){
    let numeri = document.querySelectorAll(".input");
    let campo_errore = document.querySelector("#campo_errore_ip")
    let validita = true;
    
    for(let input of numeri){
        
        if(input.value == ""){
            validita = false;
            break;
        }

        let numero = Number(input.value);
        if(numero<0 || numero>255 || isNaN(numero) || !Number.isInteger(numero) || numero == null){
            validita = false;
        }
    }

    campo_errore.style.opacity = 1;
    if(validita == false){
        campo_errore.textContent = "Indirizzo IP non valido";
    }else{
        campo_errore.textContent = "Indirizzo IP valido";
    }
}   