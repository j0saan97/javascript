/* Enunciado Ejercicio 37:
Crea dos funciones que comprueben si dado un array de números, todos ellos son pares.
 
Una función usando metodos del lenguaje y otra solo usando estructuras de control.
 
Ejemplos:
todosPares([1, 2, 3, 4]); // false
todosPares([2, 6, 8, 12]); // true
*/

// 1 Con metodos del lenguaje

function todosParesV1(numeros){
    return numeros.every(numero => numero % 2 === 0);
}

function todosParesV2(numeros) {
    // Recorrer todo el array
    for (let i = 0; i < numeros.length; i++) {
        // Comprobar si es impar
        if (numeros[i] % 2 !== 0) {
            // Si hay un impar, devolver false
            return false;
        }
    }
    // Si no hay impares, devolver true
    return true;
}


// v1 con funciones del lenguaje

console.log(todosParesV1([1, 2, 3, 4])); 
console.log(todosParesV1([2, 6, 8, 12])); 
console.log(todosParesV1([2, 6, 9, 12]));
console.log(todosParesV1([2, 6, 5, 12]));

// v2  Con estructuras de control del lenguaje
console.log(todosParesV2([2, 4, 6, 8])); // Devuelve: true
console.log(todosParesV2([2, 3, 6, 8])); // Devuelve: false