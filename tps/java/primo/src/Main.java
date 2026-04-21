//Servono i thread (entità) che eseguono frammenti di codice

void main() {

    Thread.currentThread().setName("Ripamonti");

    IO.println("Nome: " + Thread.currentThread().getName() + "\nID: " + Thread.currentThread().getId());

//    for(int i = 0; i<10; i++) {
//        IO.println(i);
//    }

    PrimaClasse o1 = new PrimaClasse();
    Thread t1 = new Thread(o1); //Attributo = classe che implementa runnable
    t1.setName("Singh");
    t1.start();

    //Meglio non usarlo - inutile
    Thread t2 = new SecondaClasse();
    t2.setName("Giovanni Battista");
    t2.start();


    for (int i = 0; i < 1000; i++) {
        IO.println(Thread.currentThread().getName() + ": " + i);
    }

    //Stesso programma su diversi OS --> output diversi 100%
    //L'ordine di esecuzione dei due thread è deciso dall'OS (a chi dare le risorse e per quanto)


    /*3 stati:
    - New
    - In esecuzione
    - Terminati
     */

}