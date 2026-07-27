// reduce(): recorre un array y lo "reduce" a un único valor,
// acumulando el resultado en cada iteración.
// Sintaxis: array.reduce((acumulador, valorActual) => { ... }, valorInicial)



const numeros = [1, 2, 3, 4, 5];

// Ejemplo 1: sumar todos los elementos
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15

/*Viene de "accumulator" (acumulador en inglés).

Piensa en acc como una hucha o bolsa temporal donde vas guardando el resultado acumulado en cada paso:

acc (acumulador): guarda la suma que llevas hasta el momento.

num (elemento actual): es el número que toca procesar en ese paso del array.

0 (valor inicial): el número con el que empieza la hucha acc antes de recorrer el primer elemento. */

// Ejemplo 2: encontrar el máximo
const maximo = numeros.reduce((acc, num) => (num > acc ? num : acc), numeros[0]);
console.log(maximo); // 5

// Ejemplo 3: contar ocurrencias de elementos en un array
const frutas = ['manzana', 'pera', 'pera', 'manzana', 'banana', 'manzana'];

const conteo = frutas.reduce((acc, fruta) => {
  // 1. Busca cuántas veces ha salido esta fruta hasta ahora.
  //    Si es la primera vez (undefined), usa 0 por defecto. Luego le suma 1.
  acc[fruta] = (acc[fruta] || 0) + 1;

  // 2. Devuelve el objeto actualizado para que el siguiente paso del bucle continúe sobre él.
  return acc;
}, {}); // <--- El objeto vacío {} es el valor inicial del acumulador (acc)

console.log(conteo); 
// Resultado: { manzana: 3, pera: 2, banana: 1 }

// Ejemplo 4: aplanar un array de arrays
const anidado = [[1, 2], [3, 4], [5]];
const plano = anidado.reduce((acc, arr) => acc.concat(arr), []);
console.log(plano); // [1, 2, 3, 4, 5]