public class ContoBancario {

    private Float saldo;
    private static ContoBancario istanza;

    public ContoBancario(Float s){
        setSaldo(s);
    }

    public void setSaldo(Float saldo) {
        if(saldo<0) throw new IllegalArgumentException("Il saldo non può essere negativo.");
        if(saldo>5000000) throw new IllegalArgumentException("Il saldo non puoi aprire un saldo con più di 5000000 euro (5mln).");
        this.saldo = saldo;
    }

    public void prelievo(Float prelievo){
        if(prelievo<0) throw new IllegalArgumentException("Non puoi prelevare un numero negativo di euro.");
        if(prelievo>saldo) throw new IllegalArgumentException("Saldo insufficiente.");
        saldo-=prelievo;
    }

    public void versamento(Float versamento){
        if(versamento<0) throw new IllegalArgumentException("Non puoi versare un numero negativo di euro.");
        if((saldo+versamento)>1000000000) throw new IllegalArgumentException("Il saldo può contenere al massimo 1000000000 euro (1mrd).");
        saldo+=versamento;
    }

    public Float getSaldo() {
        return saldo;
    }

    @Override
    public String toString() {
        return "Conto: €" + saldo;
    }
}
