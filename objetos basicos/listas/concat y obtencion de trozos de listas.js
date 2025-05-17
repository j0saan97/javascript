const lista1 = ["hola", 2, flase, null];
const lista2 = ["adios", 8, true, undefined];

console.log(lista1.concat(lista2));

// la mejor opcion sería almcacenar la nueva lista en otra variable
const lista3 = lista1.concat(lista2);

// o podemos usar el operador de propagación:

const lista4 = [...lista1, ...lista2];
console.log(lista4);

//como obtener un fragmento de una lista: .slice():

const array = ["hola", 1, 2, 3, true, null, "adios"];
console.log(array.slice(1, 4)); // mostrará [1, 2, 3]

//Si le indicamos 2 índices nos devuelve  los elementos desde el 1er índice (incluido) hasta el 2o índice(sin incluir).
// si le paso solo el 1er parámetro nos devolverá desde el indice del 1er parametro al final del array.


