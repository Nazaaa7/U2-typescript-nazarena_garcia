
// Modifica la interfaz Person del ejercicio anterior para que la propiedad lastName
// sea opcional. Declara un objeto que solo incluya firstName. 5. Función con tipado

 interface Person {
    firstName: string;
    lastName?: string; //una propiedad opcional significa que no es obligatorio usarla cuando se crea un objeto de ese tipo
 }

let person: Person = {
    firstName: "Nazarena"
};

console.log(person);