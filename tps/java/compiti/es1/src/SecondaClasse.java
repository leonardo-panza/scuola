public class SecondaClasse implements Runnable{

    public void run(){
        for (int i = 0; i < 5; i++) {
            IO.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}
