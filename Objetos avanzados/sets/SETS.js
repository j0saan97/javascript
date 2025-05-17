/* Definición de Set:
Un Set es una estructura de datos en JavaScript que almacena valores únicos, lo que significa que no permite elementos duplicados. 
Puedes agregar, eliminar y comprobar la existencia de valores en un Set. son útiles cuando necesitas mantener una colección de 
valores únicos sin preocuparte por el orden en que se insertaron.*/

// Crear un nuevo Set
const miSet = new Set();

// Agregar elementos al Set
miSet.add("manzana");
miSet.add("plátano");
miSet.add("naranja");
miSet.add("manzana"); // No se agregará, ya que "manzana" ya existe

// Tamaño del Set (solo cuenta elementos únicos)
console.log(miSet.size); // 3

// Comprobar la existencia de un valor
console.log(miSet.has("manzana")); // true
console.log(miSet.has("uva"));     // false

// Eliminar un valor del Set
miSet.delete("plátano");

// Iterar a través de los valores del Set
miSet.forEach((valor) => {
  console.log(valor);
});

// clear(): elimina la coleccion por completo:

//miset.clear();
//console.lop(miSet.size); // mostrará 0

// union de 2 sets:

const set2 = new Set(["melocotón", "piña", "uva"]);
const set3 = new Set(["maracuya", "hierba", "hachís"]);

console.log(set2.union(set3));

// el problema es que en JavaScript, el objeto Set no tiene un método union() incorporado como parte de su API
//estándar. Sin embargo, podemos crear una función que realice la unión de dos conjuntos.

setX = new Set([1, 2, 3, 10, 20, 30, 60]);
setY = new Set([2, 10, 14, 65, 70, 3]);

// DEBERIA DEOLVER ESTOS NUM : comunes 2, 3 y 10 -->

console.log(setX(intersection(sexY)));

// metodo difference: produce un nuevo conjunto que contiene los elementos que están presentes en el primer
// conjunto pero no en el segundo

const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.difference(squares)); 

// otra forma con una función:

// Definir los conjuntos
let conjuntoA = new Set([1, 2, 3, 4, 5]);
let conjuntoB = new Set([3, 4, 5, 6, 7]);

// Calcular la diferencia de conjuntos (A - B)
function diferenciaDeConjuntos(setA, setB) {
    let diferencia = new Set();
    setA.forEach(elemento => {
        if (!setB.has(elemento)) {
            diferencia.add(elemento);
        }
    });
    return diferencia;
}

// Calcular la diferencia de conjuntos entre A y B
let diferencia = diferenciaDeConjuntos(conjuntoA, conjuntoB);

// Mostrar la diferencia de conjuntos
console.log("Diferencia de conjuntos (A - B):", diferencia);


// isSubsetOf():

const fours = new Set([4, 8, 12, 16]);
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
console.log(fours.isSubsetOf(evens));  // deberia devolver true

// COMPROBAR SI LOS METODOS DEL OBJETO SET QUE TENGO EN PAPEL HAN CAMBIADO SU SINTAXIS, MUCHO ERROR, 