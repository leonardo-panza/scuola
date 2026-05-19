import java.util.Random;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;


public class Persona implements Runnable {

    private ContoBancario conto;
    private Lock lock = new ReentrantLock();

    public Persona(ContoBancario c){
        conto = c;
    }


    @Override
    public void run() {

        lock.lock();
        Random r = new Random();

        Float valore = r.nextFloat() * 1000;

        valore = Math.round(valore*100F)/100F;

        int i = r.nextInt();

        if(i%2==0){
            conto.versamento(valore);
            IO.println(Thread.currentThread().getName() + " ha versato " + valore + "\n" + conto);
        }else{
            conto.prelievo(valore);
            IO.println(Thread.currentThread().getName() + " ha prelevato " + valore + "\n" + conto);
        }

    }
}
