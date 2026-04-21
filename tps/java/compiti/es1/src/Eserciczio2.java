void main() {

    SecondaClasse o1 = new SecondaClasse();

    Thread t1 = new Thread(o1);
    t1.setName("T1");

    IO.println("Stato di t1: " + t1.getState());

    t1.start();

    IO.println("Stato di t1: " + t1.getState());

    try {
        t1.join();
    } catch (Exception e) {
        IO.println("Errore");
    }

    IO.println("Stato di t1: " + t1.getState());

    //1. NEW: non ancora eseguito. RUNNABLE: in esecuzione. TERMINATED: thread eseguito e terminato

    Thread t2 = new Thread(new SecondaClasse());
    Thread t3 = new Thread(new SecondaClasse());

    t2.setPriority(8);
    t3.setPriority(3);

    IO.println("Priorità t2: " + t2.getPriority());
    IO.println("Priorità t3: " + t3.getPriority());

    //2. Priorità più alta vuol dire avere più risorse disponibili per sè, ma non perpetuamente

    IO.println("isAlive prima: " + t2.isAlive());
    t2.start();
    IO.println("isAlive durante: " + t2.isAlive());
    try {
        t2.join();
    } catch (Exception e) {
        IO.println("Errore");
    }
    IO.println("isAlive dopo: " + t2.isAlive());

    //3. Il metodo isAlive restituisce true solamente quando lo stato del thread è RUNNABLE
}