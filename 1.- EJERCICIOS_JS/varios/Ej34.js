function agrupar(datos, claveAgrupacion) {
    // Declarar objeto vacío para llenarlo con los resultados
    let resultado = {};

    // Recorrer todos los elementos del array de datos
    datos.forEach(elemento => {
        // Evaluar si la clave de agrupación es una función o propiedad
        let propiedad = typeof claveAgrupacion === "function" 
            ? claveAgrupacion(elemento) 
            : elemento[claveAgrupacion];
        
        // Comprobar si el valor no existe y crear un array dentro del objeto
        if (!resultado[propiedad]) {
            resultado[propiedad] = [];
        }

        // Añadir el elemento al array correspondiente
        resultado[propiedad].push(elemento);
    });

    // Devolver el resultado
    return resultado;
}


/* EXPLICACION:
Determinar la clave de agrupación (propiedad):

Se evalúa si el parámetro claveAgrupacion es una función o una propiedad:
Si es una función, se ejecuta con el elemento actual como argumento: claveAgrupacion(elemento).
Si no es una función, se asume que es una propiedad del objeto o valor y se accede a esa propiedad: elemento[claveAgrupacion].
El resultado de esta evaluación se almacena en la variable propiedad, que sirve como clave de agrupación.
Comprobar si el valor ya existe en el objeto resultado:

El código verifica si ya existe una entrada en el objeto resultado para esa clave (propiedad).
Si no existe (if (!resultado[propiedad])), se crea una nueva entrada con un array vacío para esa clave: resultado[propiedad] = [].
Añadir el elemento al grupo correspondiente:

Finalmente, se añade el elemento actual al array asociado con la clave propiedad: resultado[propiedad].push(elemento).
*/

// Ejemplos de uso
console.log(agrupar([7.2, 5.3, 7.4], Math.floor)); 
// Devuelve: { 7: [7.2, 7.4], 5: [5.3] }

console.log(agrupar(['uno', 'dos', 'tres', 'cuatro'], 'length')); 
// Devuelve: { 3: ['uno', 'dos', 'tres'], 6: ['cuatro'] }

console.log(agrupar(['manzana', 'mango', 'pera', 'plátano', 'uva'], palabra => palabra[0]));
// Devuelve: { m: ['manzana', 'mango'], p: ['pera', 'plátano'], u: ['uva'] }

console.log(agrupar([1, 2, 3, 4, 5, 6], num => num % 2 === 0 ? 'pares' : 'impares'));
// Devuelve: { pares: [2, 4, 6], impares: [1, 3, 5] }

let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 25 },
    { nombre: 'Marta', edad: 30 }
];

console.log(agrupar(personas, 'edad'));


