public class PrimaClasse implements Runnable{

    public void run(){
        IO.println("Nome: " + Thread.currentThread().getName() + "\nID: " + Thread.currentThread().getId());

        for (int i = 0; i < 10; i++) {
            IO.println(i);
        }
    }
}
