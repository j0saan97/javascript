// Métodos de mutacion de listas:

// push(elemento a añadir): se añade al final del array

const frutas = ['manzana', 'banana', 'naranja'];
frutas.push('sandía');
console.log(frutas); // Salida: ['manzana', 'banana', 'naranja', 'sandía']

// unshift(): añade valores al principio del array

const frutaas = ['manzana', 'banana', 'naranja'];
frutas.unshift('sandía', 'fresa');
console.log(frutaas); // Salida: ['sandía', 'fresa', 'manzana', 'banana', 'naranja']

// .shift(): elimina el 1er elemento del array

const frutass = ['manzana', 'banana', 'naranja'];
frutas.shift();
console.log(frutass); // Salida: ['banana', 'naranja']

// .pop(): elimina el último elemento del array

const fruticas = ['manzana', 'banana', 'naranja'];
frutas.pop();
console.log(fruticas); // Salida: ['manzana', 'banana']

// .splice():

/* 1.- 
Eliminar elementos con :.splice(start, deleteCount)
start: Especifica el índice en el que se comenzará a eliminar elementos.
deleteCount: Especifica el número de elementos que se eliminarán a partir del índice especificado.
Este método modifica el array original y devuelve un nuevo array con los elementos eliminados.*/

const frutazas = ['manzana', 'banana', 'naranja', 'sandía'];
const elementosEliminados = frutazas.splice(1, 2);
console.log(frutazas); // Salida: ['manzana', 'sandía']
console.log(elementosEliminados); // Salida: ['banana', 'naranja']

/* 2.- 
Reemplazar elementos con .splice(start, deleteCount, item1, item2, ...)

start: Especifica el índice en el que se comenzará a reemplazar elementos.
deleteCount: Especifica el número de elementos que se eliminarán a partir del índice especificado.
item1, item2, ...: Los elementos que se agregarán en lugar de los elementos eliminados.
Este método modifica el array original y devuelve un nuevo array con los elementos eliminados. */

const verduras = ['manzana', 'banana', 'naranja', 'sandía'];
const elementosReemplazados = verduras.splice(1, 2, 'pera', 'uva');
console.log(verduras); // Salida: ['manzana', 'pera', 'uva', 'sandía']
console.log(elementosReemplazados); // Salida: ['banana', 'naranja']

// Recuerda que el método modifica el array original
