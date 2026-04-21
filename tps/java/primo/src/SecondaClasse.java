public class SecondaClasse extends Thread {

    @Override
    public void run(){
        for (int i = 0; i < 1000; i++) {
            IO.println(Thread.currentThread().getName() + ": " + i);
        }
    }

}
