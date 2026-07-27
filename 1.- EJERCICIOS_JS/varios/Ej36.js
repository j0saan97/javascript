/*Enunciado Ejercicio 36:
Crea un programa que encuentre las parejas de números que como resultado
dan un número que pasamos a la función por parametro.
 
Ejemplos:
encontrarParejasConSuma([1, 2, 3, 4], 5);
 
Devuelve: 
[ [ 1, 4 ], [ 2, 3 ] ] */

function encontrarParejasConSuma(arr, sumaObjetivo) {
    let parejas = [];

    //  En cada iteración, este bucle selecciona un número, que luego se comparará con los siguientes números del array (a partir de la posición i + 1).
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            /* Comprobar si la suma de los dos elementos es igual a la suma objetivo 
                Propósito: Compara el valor seleccionado en el bucle exterior (arr[i]) con los valores restantes del array.
                Variable j: Representa el índice del segundo número a comparar. Comienza desde i + 1, es decir, siempre a 
                partir del siguiente número en el array para evitar repetir las mismas combinaciones. */

            if (arr[i] + arr[j] === sumaObjetivo) {
                // Si es así, agregar la pareja a la lista de parejas
                parejas.push([arr[i], arr[j]]);
            }
        }
    }

    // Devolver el array de parejas
    return parejas;
}

// Ejemplo de uso
console.log(encontrarParejasConSuma([1, 2, 3, 4], 5)); 
console.log(encontrarParejasConSuma([4, 5, 1, 6, 7, 3], 10))
