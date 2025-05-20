/* Enunciado Ejercicio 32:
Dado un texto, crea una función que sea capaz de generar
un nuevo texto que incluya solo las palabras de 4 caracteres o más.
 
Ejemplos:
fraseFiltrada("Hola soy Victor Robles, hoy hace frio"); 
 Deuelve: Hola Victor Robles, hace frio */

 function fraseFiltrada(texto) {
    // crear un array llamado palabrasFiltradas
    let palabrasFiltradas = [];

    // separar palabras del texto y guardarlas en un array
    let palabras = texto.split(' ');

    // recorremos cada elemento del array con un bucle for
    for (let i = 0; i < palabras.length; i++) {
        // condición si el elemento tiene una longitud de 4 o más la añadimos al array palabrasFiltradas
        if (palabras[i].length >= 4) {
            palabrasFiltradas.push(palabras[i]);
        }
    }

    // devolvemos el resultado de la función
    return palabrasFiltradas;
}

// Ejemplo de uso
console.log(fraseFiltrada("Esta es una prueba de la función de filtrado"));


 console.log(fraseFiltrada("hola, soy victor robles, y hace frio hoy"));

