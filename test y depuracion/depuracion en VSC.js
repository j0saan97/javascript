// Depuracion en VSC:

//  ESLint: contiene libreria para agilizar muchos tipos de test  
/* podemos introducir pts de ruptura en nuestro codigo para que al ejecutarlo 
nos de el valor de una variable o el retorno de una expresion en un pto dado.
Solo tenemos que marcar la linea de código a revisar con un pto rojo y ejecutarel codigo
*/

const persona = {
    nombre: "gorka",
    edad: 34
}

console.log(persona);
console.log(persona.edad);

// creamos una funcion que crea un array y añade elementos al array usando un bucle for y el operador de propagacion
function obtenDobleEdad(edad) {
    return 2 * edad
}

const dobleEdad = obtenDobleEdad(persona.edad);
console.log(dobleEdad);

function obtenArray(edad) {
    let arrayNums = [];
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad);
console.log(array);

/* PARA DEPURAR NUESTRO CODIGO:
 marcamos los break points donde queremos revisar el codigo, 
 iniciamos depuracion y vamos viendo paso por paso el rsdo por
  la consola de depuracion
  en la ventana inspeccion podemos añadir condiciones y evr si se cumplen
  Ej persona.edad === 34 , hacemos intro y nos devolverá true o false */


