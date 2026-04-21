

void main() throws InterruptedException {

    Contatore c1 = new Contatore();

    Thread t1 = new Thread(c1);
    Thread t2 = new Thread(c1);

    t1.setName("Contatore 1");
    t2.setName("---> Contatore 2");

    IO.println("Stato t1: " + t1.getState()); //New - nuovo, non eseguito
    t1.start();
    t2.setPriority(2); //Priorità da 1 (bassa) e 10 (alta)
    IO.println("Stato t1: " + t1.getState()); //Runnable - è in esecuzione


    try{
        //Il Thread principale deve fermarsi finchè t1 non ha terminato la sua esecuzione.
        //Utile per la sincronizzazione
        t1.join();
    }catch (Exception e){
        IO.println("Errore!");
    }

    IO.println("Stato t1: " + t1.getState());

    IO.println("t2: " + t2.isAlive());
    t2.start();
    IO.println("t2: " + t2.isAlive());

    //Metodo un po' così così per sostituire join
    while(t2.isAlive()){

    }

    IO.println("Hello");
}
