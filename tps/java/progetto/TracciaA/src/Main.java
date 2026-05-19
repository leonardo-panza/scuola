

void main() throws InterruptedException {

    ContoBancario conto = new ContoBancario(8000F);

    Persona p1 = new Persona(conto);
    Persona p2 = new Persona(conto);
    Persona p3 = new Persona(conto);

    Thread t1 = new Thread(p1);
    Thread t2 = new Thread(p2);
    Thread t3 = new Thread(p3);

    t1.setName("Giulia");
    t2.setName("Nicola");
    t3.setName("Diego");

    t1.start();
    t2.start();
    t3.start();

    Thread.sleep(2000);

    IO.println(conto);


}
