// Clase con propiedades privadas
// Modifica la clase Car para que la propiedad make sea privada. Añade un método
// getMake() que devuelva el valor de make. 

class Car {
    private make : string = "toyota"

    getMake(): void { 
    console.log(this.make);
}
}

const myCar = new Car();

myCar.getMake(); // metodo de la clase Car