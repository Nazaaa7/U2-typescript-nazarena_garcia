// imprima un mensaje diciendo que el coche se está cargando. 11. Interface y clases
// Crea una interfaz Shape que tenga un método area() que devuelve un número. Luego, crea una clase Circle que implemente esta interfaz y calcule el área de un
// círculo.

interface Shape {
    area(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

const myCircle = new Circle(5);
console.log("Área del círculo:", myCircle.area());
