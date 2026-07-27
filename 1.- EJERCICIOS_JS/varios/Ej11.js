/*
!Crea una función a la cual le pase un array de numeros y un numero que será el resultado de la suma de dos de los valores
 
Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]
! no se puede coger 2 veces el mismo valor del array
*/

function sumarDos(numeros, rsdo) {

    // recorrer el array d numeros
    for(let i = 0; i < numeros.length; i++){

         let primerNumero = numeros[i];
         let segundoNumero = rsdo - primerNumero;

        if(numeros.includes(segundoNumero) && segundoNumero != primerNumero){ 
            return [primerNumero, segundoNumero];
        }
    }

    
}

console.log(sumarDos([3, 7, 8, 2], 10));
console.log(sumarDos([4, 5, 9, 1], 10));
console.log(sumarDos([1, 2, 3, 4], 5));
console.log(sumarDos([1, 2, 3, 4, 5, 6, 7], 8));