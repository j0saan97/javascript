// .sort(), .every(), . some()

// .sort():para ordenar los elementos de un array alfabéticamente o numéricamente, según el criterio de ordenamiento especificado.

const frutas = ['naranja', 'manzana', 'banana', 'sandía'];
frutas.sort();
console.log(frutas.sort); // Salida: ['banana', 'manzana', 'naranja', 'sandía']



const numeros = [10, 5, 8, 2, 1];
// La función de comparación (a, b) => a - b indica que a - b se utilizará como criterio de ordenamiento. 
//Cuando el resultado es negativo, indica que a debe colocarse antes de b, y cuando es positivo, b debe colocarse antes de a
numeros.sort((a, b) => a - b);
console.log(numeros); // Salida: [1, 2, 5, 8, 10]

const numeroos = [5, 2, 8, 1, 4];
numeroos.sort((a, b) => {
  if (a < b) {
    return -1; // a debe ser colocado antes que b
  } else if (a > b) {
    return 1; // a debe ser colocado después de b
  } else {
    return 0; // a y b son iguales, no se cambia el orden
  }
});
console.log(numeroos); // Salida: [1, 2, 4, 5, 8]


// .every():se utiliza para verificar si todos los elementos de un array cumplen una condición especificada en una función.
//Devuelve true si todos los elementos cumplen la condición y false si al menos uno de los elementos no la cumple.

const numerosss = [12, 54, 18, 130, 44];
const todosMayoresQueDiez = numerosss.every(numero => numero >= 10);
console.log(todosMayoresQueDiez); // Salida: true


// Identificar si existe un valor en un array y objetos iterables: .some(). Devuelve true si al menos un elemento cumple la condicion y false sino.
const numbeers = [12, 54, 18, 130, 44];
const algunoMayorQueCien = numbeers.some(numero => numero > 100);
console.log(algunoMayorQueCien); // Salida: true

/* from: Array.from(): Este es un método estático del objeto que se utiliza para crear un nuevo array a partir de un objeto 
iterable o array - like. Puede recibir un segundo argumento opcional que es una función de mapeo para transformar los elementos del array*/

const set = new Set([1, 2, 3]);
const array = Array.from(set, x => x * 2);
console.log(array); // Salida: [2, 4, 6]


