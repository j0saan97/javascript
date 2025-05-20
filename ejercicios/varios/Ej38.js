/*Enunciado Ejercicio 38:
Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100*/

function aBinario(numero){
// crear variable para guardar el rsdo
let rsdo = "";

// mientras el num sea > que 0, seguimos dividiendo el num entre 2 y añadiendo el resto al rsdo

while(numero > 0 ){

    rsdo = (numero % 2) + rsdo;
    numero = Math.floor(numero / 2);
    console.log(numero)

}

return rsdo;
}

console.log(aBinario(10));
console.log(aBinario(1987));
