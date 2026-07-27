/*

! Dada un array de frases, contar el número de palabras que tiene
 
Ejemplos:
contarPalabras([
                "Hola, soy Víctor Robles WEB",
                "Me gusta programar",
                "Y soy desarrollador web"
            ]);
 
Devuelve: 12

*/

function contarNumPalabras(words) {

    // convertir el argumento a un array de strings
    words = words.split(' ');

    // inicializar el contador
    let numTotalPalabras = 0;

    // crear un bucle for que itere mientras la variable i sea menor que la longitud del array
    for (let i = 0; i < words.length; i++) {
        // en cada iteración incrementar el contador
        numTotalPalabras++;
    }

    // devolver en un string usando template strings `${}` el num total de palabras
    return `El número total de palabras es: ${numTotalPalabras}`;
}

console.log(contarNumPalabras("hola socio como estas"));  // Salida: "El número total de palabras es: 4"

