/*El concepto de yield en JavaScript está ligado a las funciones generadoras (function*). A diferencia de una función normal que se ejecuta de principio a fin y
 retorna un solo valor, un generador puede pausar su ejecución, devolver un valor y luego reanudarla justo donde se quedó. */

 // Generador de Secuencias Infinitas
//Como yield pausa la ejecución, podemos representar secuencias infinitas sin bloquear la memoria ni el navegador

// EJ 1
function* idCreator() {
    let id = 1;
    while (true) {
        // El bucle 'while(true)' no bloquea el programa 
        // porque se detiene en cada yield
        yield `ID-${id}`; 
        id++;
    }
}

const ids = idCreator();

console.log(ids.next().value); // "ID-1"
console.log(ids.next().value); // "ID-2"
// Podemos pedir IDs indefinidamente bajo demanda


// EJ 2 Contador Básico (Estado Persistente) Este es el uso más simple: una función que "recuerda" su progreso sin necesidad de variables globales.

function* contadorSimple() {
    console.log("Inicio del contador");
    yield 1; // La ejecución se pausa aquí y devuelve 1
    
    console.log("Reanudando...");
    yield 2; // Se pausa aquí y devuelve 2
    
    console.log("Fin del contador");
    return 3; // El último valor antes de terminar
}

const generador = contadorSimple();

console.log(generador.next()); // { value: 1, done: false }
console.log(generador.next()); // { value: 2, done: false }
console.log(generador.next()); // { value: 3, done: true }

