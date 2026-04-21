void main() {

    PrimaClasse o1 = new PrimaClasse();
    Thread t1 = new Thread(o1);
    t1.setName("T1");

    o1.run();
    t1.start();

    //1. Il metodo run() viene eseguito prima del resto
    //2. Perchè run è un metodo della classe PrimaClasse,
    //non eseguibile in contemporanea con altro
}
