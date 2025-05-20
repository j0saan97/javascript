// Función para asignar una calificación en base a una nota
function calificar(nota) {
    if (nota >= 0 && nota < 3) {
        return "Deficiente";
    } else if (nota >= 3 && nota < 5) {
        return "Insuficiente";
    } else if (nota >= 5 && nota < 6) {
        return "Suficiente";
    } else if (nota >= 6 && nota < 7) {
        return "Bien";
    } else if (nota >= 7 && nota < 9) {
        return "Notable";
    } else if (nota >= 9 && nota <= 10) {
        return "Sobresaliente";
    } else {
        return "Nota inválida";
    }
}

// Ejemplo de uso
console.log(calificar(2)); // Salida: "Deficiente"
console.log(calificar(4)); // Salida: "Insuficiente"
console.log(calificar(5.5)); // Salida: "Suficiente"
console.log(calificar(6.5)); // Salida: "Bien"
console.log(calificar(8)); // Salida: "Notable"
console.log(calificar(9.5)); // Salida: "Sobresaliente"
