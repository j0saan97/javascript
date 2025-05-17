/* sets o conjuntos: En JavaScript, un "set" o conjunto se refiere a una estructura de datos 
que representa una colección de valores únicos, es decir, no puede contener elementos duplicados.

El método Set() solo acepta un iterable como argumento, como un array, así que
 necesitas pasar los elementos entre corchetes.*/

// Crear un set
const miSet = new Set();

// Agregar elementos al set usando el método .add()
miSet.add(1);
miSet.add(2);
miSet.add(3);
miSet.add(4);

console.log(miSet);
// Borrar un elemento del set usando el método .delete()
miSet.delete(3);

// Limpiar todos los elementos del set usando el método .clear()
miSet.clear();

// Obtener el tamaño del set usando el método .size()
const tamaño = miSet.size;

console.log(tamaño); // Salida: 0, ya que después de usar .clear() el set está vacío

// has: devuelve true si el array contiene el valor que le pasamos com parametro o false sino
let miSett = new Set([9, 8, 7]);
console.log(miSett.has(9));

/* entries:El método entries() se utiliza en conjuntos (Set) en JavaScript para devolver un nuevo
 objeto de iterador que contiene los pares[valor, valor], donde cada valor es un elemento del conjunto.
Estos pares representan la misma valor tanto para la clave como para el valor, ya que en los conjuntos no 
hay claves ni valores distintos.*/

let miSettt = new Set([1, 2, 3]);

// Obteniendo un iterador con los pares [valor, valor]
let iterador = miSettt.entries();

// Iterando sobre el iterador
for (let entrada of iterador) {
  console.log(entrada);
}

// Output:
// [1, 1]
// [2, 2]
// [3, 3]


// forEach:

let miSet2 = new Set([1, 2, 3]);
let nuevosValores = new Set();

miSet2.forEach(function(valor) {
  nuevosValores.add(valor * 2); // Duplicando los valores y añadiéndolos a un nuevo conjunto
});

console.log(nuevosValores);

// Output:
// Set(3) { 2, 4, 6 }
