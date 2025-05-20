/*
Enunciado Ejercicio 27:
Crea una función a la cual le pasemos una frase y una palabra,
y busque si la palabra existe en la frase. Indistinto de mayusculas y minusculas.
 
Ejemplos:
buscarPalabra('Hola como estas', 'Hola')  // Devuelve: true
*/

function buscarPalabra(frase, palabra) {
    // Convertir datos a minúsculas
    const lowerFrase = frase.toLowerCase();
    const lowerPalabra = palabra.toLowerCase();

    // Buscar la palabra en el string
    const indice = lowerFrase.indexOf(lowerPalabra);

    // Devolver resultado
    return indice >= 0;
}

console.log(buscarPalabra("Hola como estas", "Hola")); // Devuelve: true
console.log(buscarPalabra("Tengo la polla gorda", "gorda")); // Devuelve: true
console.log(buscarPalabra("Hola como estas", "adios")); // Devuelve: false
