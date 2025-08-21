// Interfaz básica
// Crea una interfaz Person con las propiedades firstName (string) y lastName (string). Declara una variable person de tipo Person y asígnale un objeto con tu nombre y
// apellido.

interface Person { //interfaz
    firstName: string;
    lastName: string; //propiedad
}

let person: Person = {
    firstName: "Nazarena",
    lastName: "Garcia" //valor de la propiedad
}