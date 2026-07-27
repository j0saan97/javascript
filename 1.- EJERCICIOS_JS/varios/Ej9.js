/* 
! Crea una función que reciba un array de números y calcule la suma de todos los números pares del array
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8

*/

// solucion 1:

function sumarPares(numeros) {
    // Inicializamos la variable suma en 0
    let suma = 0;
    
    // Iteramos sobre cada número en el array
    for (let i = 0; i < numeros.length; i++) {
        // Verificamos si el número es par
        if (numeros[i] % 2 === 0) {
            // Si es par, lo sumamos a la variable suma
            suma += numeros[i];
        }
    }
    
    // Devolvemos la suma de los números pares
    return suma;
}

// Ejemplo de uso
console.log(sumarPares([2, 13, 6, 15]));  // Resultado: 8


// solucion 2:

function sumarPares2(numeroos){
    
    let sumaa = 0;

    //recorremos el array de numeros:

    numeroos.forEach(numeroActual => {

        // si es par lo sumo
        if(numeroActual % 2 === 0){
            sumaa += numeroActual;
        }
    })

    return sumaa;

}

console.log(sumarPares2([2, 13, 6, 22, 12, 15]));