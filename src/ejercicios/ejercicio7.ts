// Define una clase Car que tenga una propiedad make (marca del coche) de tipo string
// y un método drive() que imprima un mensaje en la consola diciendo "Driving a
// [make]". 8. Clase con constructor
class Car {
    make: string = "toyota"; //propiedad make de tipo string con valor desde el principio
    
    drive(): void { //void es un tipo que se utiliza para indicar que una función no tiene un valor de retorno
    console.log(`Driving a ${this.make}`);
}
}

const myCar = new Car();
myCar.drive(); // metodo de la clase Car