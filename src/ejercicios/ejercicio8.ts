
// Clase con constructor
// Añade un constructor a la clase Car que inicialice la propiedad make. Crea una
// instancia de Car con una marca y llama al método drive().
class Car {
    make;
    constructor(make: string) {
        this.make = make;
    } //metodo drive 
drive(): void { //void es un tipo que se utiliza para indicar que una función no tiene un valor de retorno
    console.log(`Driving a ${this.make}`);
}
}

const myCar = new Car("toyota");
myCar.drive();