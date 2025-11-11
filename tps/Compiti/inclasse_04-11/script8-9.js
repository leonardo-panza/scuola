const form = document.getElementById("form");
const testo_inp = document.getElementById("nome");
const eta_inp = document.getElementById("eta");
const butt = document.getElementById("subm");
const mail_inp = document.getElementById("mail");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let testo_allarme = "";
    let nome = testo_inp.value.trim();
    let eta = eta_inp.value.trim();
    let mail = mail_inp.value.trim();

    const div = mail.split("@");
    
    if(nome.length < 2){
        testo_allarme += "Nome inaccettabile\n";
    }else if (isNaN(eta) || eta<14 || eta>99){
        testo_allarme += "Eta inaccettabile\n";
    }else if(!mail.includes("@") || !mail.includes(".") || !div[1].includes(".")){
        testo_allarme += "Mail inaccettabile";
    }





    if(testo_allarme!= ""){
        alert(testo_allarme);
    }
    console.log("gfine")
});