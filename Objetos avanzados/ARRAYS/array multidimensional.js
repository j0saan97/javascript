/* array multidimensional: Un array multidimensional en programación es un tipo de estructura de datos que consiste en una matriz de valores,
 donde cada valor puede ser otro array. En otras palabras, es un array que contiene otros arrays, lo que permite representar datos de manera
  organizada y jerárquica en múltiples niveles. En JavaScript, los arrays multidimensionales se pueden crear utilizando arrays anidados.
*/

// Como conocer las dimensiones de un array:

function obtenerDimension(array) {
  if (Array.isArray(array)) {
    return 1 + obtenerDimension(array[0]);
  } else {
    return 0;
  }
}

const array1 = [1, 2, 3];
const array2 = [[1, 2], [3, 4]];
const array3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

console.log(obtenerDimension(array1)); // Output: 1
console.log(obtenerDimension(array2)); // Output: 2
console.log(obtenerDimension(array3)); // Output: 3

// ejemplo de array de 2 dimensiones: comprobar que sea d 2 dimensiones

let materiasLetras = ["latin", "lengua", "ingles"];
let materiasCiencias = ["mates", "fisica", "quimica"];

let aula1 = new Array(materiasCiencias, materiasLetras);
let aula2 = new Array(materiasLetras, materiasCiencias);

console.log(aula1);
console.log(aula2);

const M = 0; // turno de mañana
const T = 1; // turno de tarde

console.log(aula1[M]);
console.log(aula1[T]);

console.log(aula2[M]);
console.log(aula2[T]);

// Arrays tridimensionales: vamos a suponer que cada una de nuestras aulas está en una planta del edificio y
// definiremos las posiciones representando los pisos, por lo que cada posicion tendrá un aula como valor.

// array tridimensional:
let plantas = new Array(aula1, aula2);
console.log(plantas[0]); // accedemos a aula1
console.log(plantas[1]); // accedemos a aula2


const P1 = 0;
const P2 = 1;

// ahora para acceder al valor de un array tridimensional hay que escribir 3 parejas de corchetes:

console.log(plantas[P1][T][2]); // aula1 --> tarde --> posicion 3
console.log(plantas[P2][M][0]); // aula2 --> tarde --> pos 0
console.log(plantas[P2][T][2]);// aula 2 --> tarde-- pos 2






