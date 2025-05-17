// typeof --> devuelve el tipo de objeto en el indice indicado :

    let arrayEjemplo = new Array(1, "hola", 6, 10, true, { nombre: "juan", edad: 30 }, "ultimo-elemento");

    let tipoElemento = typeof arrayEjemplo[5];

    console.log(tipoElemento);

// length
    console.log(arrayEjemplo.length);

// push(element):

    arrayEjemplo.push("element-nuevo");

    console.log(arrayEjemplo);

// pop

    console.log(arrayEjemplo.pop()); // muestra "element-nuevo"

// map(callback): ejecuta una instruccion para cada elemento del objeto pasado como parametro

// ej1:
    let multiplos5 = new Array(10, 15, 20, 25, 30);
    let multiplosPor2 = multiplos5.forEach((element) => console.log(element * 2))
    console.log(multiplosPor2);
    
// ej 2:
    const arr = [5, 1, 2, 3, 4];
    const filtered = arr.filter((el) => {
    return el > 2;
});
console.log(filtered);

// mapeamos el array filtered para que cada valor del array nos lo devuelva dentro de un <h1>,
const mapped = filtered.map((el) => <h1>${el}</h1>);
console.log(mapped);

/*EXPLICACION INSERCIION HTML USANDO JS: utiliza un patrón llamado "template literals" o 
"plantillas de cadenas" en JavaScript, donde puedes incrustar variables dentro de una cadena
 de texto utilizando la sintaxis ${ variable } */


// filter(callback):

    // ej1:
    let divisiblepor10 = multiplos5.filter((element) => element % 10 === 0);
    console.log(divisiblepor10);

    // ej 2: filtro para obtener números mayores que 30
    const numeros = [10, 20, 30, 40, 50];
    const numerosMayoresQueTreinta = numeros.filter(numero => numero > 30);
    console.log(numerosMayoresQueTreinta); // Output: [40, 50]


// concat(array):

let ejemploConcat = multiplos5.concat(divisiblepor10);
console.log(ejemploConcat);

/* slice(start, end):se utiliza para extraer una porción de un array y devuelve
 un nuevo array con los elementos seleccionados. Este método toma dos argumentos
opcionales: el índice de inicio y el índice de finalización del corte. El índice 
de inicio indica desde qué posición comenzar a extraer elementos (incluido ese índice),
mientras que el índice de finalización indica la posición donde se detendrá
la extracción (sin incluir ese índice). Si no se proporciona el índice de inicio,
 se asume el valor 0, y si no se proporciona el índice de finalización, se asume la longitud del array. */

let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// SLICE: Extraer una porción del array desde el índice 2 hasta el índice 5 (sin incluir el 5)
let subArray1 = miArray.slice(2, 5);
console.log(subArray1); //muestra [3,4,5]

// Extraer una porción del array desde el índice 4 hasta el final del array
let subArray2 = miArray.slice(4);
console.log(subArray2); // muestra [5,6,7,8,9,10]

// Extraer una porción del array desde el principio hasta el índice 3 (sin incluir el 3)
let subArray3 = miArray.slice(0, 3);
console.log(subArray3); // muestra [1,2,3]

// Extraer una copia completa del array original
let copiaArray = miArray.slice();
console.log(copiaArray); // muestra [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*reduce:
El método reduce() en JavaScript se utiliza para reducir los elementos de un array a un solo valor.
 Toma una función de reducción como argumento y opcionalmente un valor inicial, y luego aplica la 
 función acumuladora a cada elemento del array, de izquierda a derecha, para reducirlos a un solo valor.

La función de reducción toma cuatro argumentos:

    - Acumulador (acc): El valor acumulado en cada iteración, que se inicia con el valor inicia
        el o el primer elemento del array si no se proporciona un valor inicial.
    - Valor actual (cur): El valor del elemento actual del array.
    - Índice (idx): El índice del elemento actual en el array.
    - Array (src): El array original sobre el que se llama al método reduce().
*/

// ej1:
let some = [5, 4, 3, 2, 1];

const getMax = (a, b) => Math.max(a, b)
const r1 = some.reduce(getMax);
console.log(r1); // 5

//ej2:

const numeross = [1, 2, 3, 4, 5];

const suma = numeross.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(suma); // Output: 15
