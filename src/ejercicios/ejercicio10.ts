// getMake() que devuelva el valor de make. 10. Herencia de clases
// Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional
// batteryLife (vida de la batería) de tipo número. Añade un método charge() que
// imprima un mensaje diciendo que el coche se está cargando. 11. Interface y clases
// Clase con propiedades privadas
// Modifica la clase Car para que la propiedad make sea privada. Añade un método
// getMake() que devuelva el valor de make. 
class Car {
    private make: string = "Toyota";

    getMake(): void { 
        console.log(this.make);
    }
}

const myCar = new Car();
myCar.getMake(); 

class ElectricCar extends Car {
    batteryLife: number;

    constructor(batteryLife: number) {
        super(); 
        this.batteryLife = batteryLife;
    }

    charge(): void {
        console.log("El coche se está cargando");
    }
}

// instancia 
const myElectricCar = new ElectricCar(100);

myElectricCar.charge();       
myElectricCar.getMake();     
console.log(myElectricCar.batteryLife); 
