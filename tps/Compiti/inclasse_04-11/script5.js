let butt = document.getElementById("butt");
let testo = document.getElementById("testo");
let saluto = document.getElementById("scritta");

butt.addEventListener("click", () => {
    saluta(testo.value);
})

function saluta(nome){
    if(nome.trim() == ""){
        saluto.textContent = "Ciao, Defalut!";
    }else{
        saluto.textContent = `Ciao, ${nome.trim()}!`;
    }
}