/*Enunciado Ejercicio 31:
Dado un texto, crea una función que sea capaz de invertir
el orden de sus palabras.
 
No podemos usar funciones nativas del lenguaje.
 
Ejemplos:
invertirPalabras("Hola soy Victor Robles"); // Devuelve: Robles Victor soy Hola */

function invertirPalabras(frase) {
    // Creamos una variable que será el separador que usemos para dividir la frase, un espacio 
    let separador = " ";

    // Dividimos la frase en un array de palabras con la función split y la guardamos en una variable
    let partes = frase.split(separador);

    // Invertimos el orden del array de palabras
    let partesInvertidas = partes.reverse();

    // Unimos las palabras invertidas en una nueva frase
    let fraseSeparada = partesInvertidas.join(separador);

    // Devolvemos la frase invertida
    return fraseSeparada;
}

// Ejemplo de uso
console.log(invertirPalabras("Hola como estas")); // "estas como Hola"
console.log(invertirPalabras("JavaScript es divertido")); // "divertido es JavaScript"
