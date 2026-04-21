

void main() {

    PrimaClasse o1 = new PrimaClasse();

    Thread t1 = new Thread(o1);
    Thread t2 = new Thread(o1);

    t1.setName("David");
    t2.setName("Seville");

    t1.start();
    t2.start();

    for(int i = 100; i<110; i++){
        IO.println("Main: " + i);
    }

}

//1. L'assegazione delle risorse ai thread è casuale
//2. Per distinguere i diversi thread