// Enum
// Declara un enum Color con los valores "Red", "Green", y "Blue". Crea una función
// que tome un argumento de tipo Color y devuelva un mensaje con el color.
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function showColor(color: Color): string {
    return `El color seleccionado es: ${color}`;
}

console.log(showColor(Color.Green));