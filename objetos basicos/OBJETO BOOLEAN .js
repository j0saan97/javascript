/* Un objeto booleano en la programación es una variable que puede tener uno de dos valores posibles:
 True (verdadero) o False (falso).
 Estos valores booleanos son fundamentales en la lógica y el flujo de control de un programa */
 
// Evaluación de condiciones:
 
const esMayorDeEdad = true;
if (esMayorDeEdad) {
    console.log("Puedes votar en las elecciones.");
} else {
    console.log("No puedes votar en las elecciones.");
}

// bucles:

let ejecutarBucle = true;
while (ejecutarBucle) {
    // Hacer algo en el bucle
    const respuesta = prompt("¿Quieres continuar? (sí/no)");
    if (respuesta.toLowerCase() !== "sí") {
        ejecutarBucle = false;
    }
}

// Almacenamiento de estado:
let juegoEnCurso = true; // Variable booleana para rastrear el estado del juego

// Más código para el juego...

// Cuando el juego termina:
juegoEnCurso = false;



//filtrado de decisiones:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(num => num % 2 === 0);
const numerosImpares = numeros.filter(num => num % 2 !== 0);

// Verificación de condiciones complejas:

const tieneCreditoBueno = true;
const ingresosSuficientes = true;

const puedeObtenerPrestamo = tieneCreditoBueno && ingresosSuficientes;

if (puedeObtenerPrestamo) {
    console.log("Calificas para un préstamo.");
} else {
    console.log("No calificas para un préstamo.");
}

