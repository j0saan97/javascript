/*
! CORREGIR FUNCION FLECHA QUE NO ME TOMA
Ejercicio 7:
! Dada un array de enteros, detectar si esa lista
! de números es una permutación del 1 al ultimo número del array.
 
En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.
 
! Devolver el número faltante más grande.
 
!El array puede venir desordenado.
 
Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4

*/

function permutacion(numeros){
    // ordenar el array de numeros
    numeros.sort((menor, mayor)) => menor - mayor;
    // recorrer el array y comprobar si cada elemento es igual al siguiente num + 1

    let numerosFaltantes = [];

    for (let i = 0; i < numeros.length; i++){
        
        let numeroFalta = i + 1;

        if(numeros[i] !== numeroFalta){
            numerosFaltantes.push(numeroFalta);
        }
    }

    // limpiar el ultimo elemento insertado artificialmente
    numerosFaltantes.pop();

    // Si todo es correcto devolver el ultmo numero
    let resultado = numeros[numeros.length - 1];

    if(numerosFaltantes,length >= 1){
        resultado = numerosFaltantes[numerosFaltantes.length - 1];
    }

    return resultado;

    console.log("el numero mas grande que falta en la secuenca es: "), permutacion([1, 2, 3, 5, 6])




    return numeros
}

console.log(permutacion([2,3,5,1,5,6]));