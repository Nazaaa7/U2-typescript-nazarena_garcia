//Type assertions
// Declara una variable de tipo any con un valor numérico y usa una aserción de tipo
// para tratarla como un string. Usa la propiedad “.length” en esta variable. 15. Genéricos (básico)let randomValue: any = 12345;

let randomValue: any = 12345;
let valueAsString = randomValue as unknown as string; 
console.log("Longitud del valor:", valueAsString.length); 