/*

! Dada una cadena de texto, comprobar si es un palindromo o no. No usar funciones de javascript, solo estructuras de control

! no usar func predefinidas de js
 
? Los palíndromos son palabras que se leen igual aun estando invertidas. Por ejemplo: ana, bob, otto, allivessevilla
 
Ejemplos:
esPalindromo("otto") // Devuelve: true
esPalindromo("victor") // Devuelve: false

*/

// Solucion 1: usando funciones predef de js:

function esPalindromoConFunciones(palabra){

    let invertida = palabra.split("").reverse().join("");

    return (invertida === palabra);

}

console.log(esPalindromoConFunciones("otto"));
console.log(esPalindromoConFunciones("anna"));
console.log(esPalindromoConFunciones("sofia"));


// solucion 2: 

function esPalindromo(word){

    // dividir la cadena en un array de letras

    let letras = [];
    for(let i = 0; i < word.length; i++){
        letras.push(word[i]);
    }
    // invertir en array con un bucle

    let letrasInvertidas = [];

    // restamos 1 xk el 1er valor del array es el indice 0
    for(let i = word.length - 1; i >= 0; i--){
        letrasInvertidas.push(word[i]);
    }

    // unir todas las letras del array con un bucle y guardar el rsdo en una variable

    let palabraInvertida = "";
    for(let i = 0; i < letrasInvertidas.length; i++){
        palabraInvertida += letrasInvertidas[i];
    }

    // devolver rsdo
    return (word === palabraInvertida);

}

console.log(esPalindromo("victor"));
console.log(esPalindromo("ana"));
console.log(esPalindromo("asasa"));