// Crea una función que simule el lanzamiento de dos dados.

function tirarDado() {
    // Generar un número aleatorio entre 1 y 6
    return Math.floor(Math.random() * 6) + 1;
}

function lanzarDosDados() {
    // Simular el lanzamiento de dos dados
    const dado1 = tirarDado();
    const dado2 = tirarDado();
    
    // Devolver los resultados de los dos dados
    return { dado1, dado2 };
}

// Ejemplo de uso
const resultado = lanzarDosDados();
console.log(`Dado 1: ${resultado.dado1}, Dado 2: ${resultado.dado2}`);
