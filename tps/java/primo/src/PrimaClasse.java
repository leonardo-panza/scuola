

public class PrimaClasse implements Runnable{

    //Ciò a cui accede il thread. Start = eseguire il metodo run
    public void run(){

        for(int i = 0; i<1000; i++) {
            IO.println(Thread.currentThread().getName() + ": " + i);
        }

    }

}
