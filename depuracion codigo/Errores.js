// Hay varias formas de gestionar errores en Java Script:

const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    // gestionamos el error lanzando una excepcion
    throw new Error("El valor debe ser de tipo número"); 
}

// console.log(miFuncion("a1a"));


//
const numerito = "7";

try {
    //codigo que puede fallar
    const doble = miFuncion(numerito)
    // si modifico el parametro que le paso y pongo cualquiera q no sea un numero, saltaría el error del catch
    console.log(doble); 
    // la letra e del catch hace referencia al objeto error que hemos creado arriba
} catch (e) {
    // en caso de fallar, ejecuta ...
    console.log(`El valor de e es : ${e}`)
} finally {
    console.log("esto se va a ejecutar tanto si hay error, como sino hay ninguno")
}

/* internal error: Este tipo de error generalmente no es común y generalmente se refiere a problemas 
internos de la implementación de JavaScript en un motor específico.*/

const x = 10;
const y = 0;
const resultado = x / y; // Esto puede generar un InternalError

/* sintax error: SyntaxError: Este error ocurre cuando hay un error de sintaxis en el código, como un 
paréntesis que falta o una palabra clave incorrecta */

// typeError: TypeError: Este error se produce cuando intentas realizar una operación en un tipo de dato que no es compatible:



/* Range error: RangeError: Este error se produce cuando intentas acceder a un valor fuera del rango válido, generalmente
 relacionado con el tamaño de matrices o la recursión excesiva. Aquí tienes un ejemplo de recursión excesiva
*/
 /*
  function recursiónInfinita() {
  recursiónInfinita();
} 
recursiónInfinita(); */


// ReferenceError: Este error ocurre cuando intentas acceder a una variable o función que no está definida:

console.log(variableNoDefinida); // ReferenceError, variableNoDefinida no está definida