public class Contatore implements Runnable{

    public void run(){
        IO.println(Thread.currentThread().getName() + " INIZIATO");

        //RUN - IN ESECUZIONE
        for (int i = 1000; i >= 0; i--) {
            IO.println(Thread.currentThread().getName() + ": " + i);
        }
        IO.println(Thread.currentThread().getName() + " TERMINATO");
    }

}
