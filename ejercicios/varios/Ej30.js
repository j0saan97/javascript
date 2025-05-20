/*Enunciado Ejercicio 30:
Dado un array de numeros, permitir los numeros duplicados
un maximo de 2 veces y devolver la longitud del array.
 
Ejemplos:
eliminarDuplicados([4, 4, 4, 2, 2, 3]); // 5
eliminarDuplicados([6, 6, 2, 2, 2, 3]); // 5
eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9]); // 5
*/ 

// SOLUCION 1:
function eliminarDuplicados(numeros) {
    // Creamos un objeto para llevar un registro de las veces que aparece cada número
    const conteo = {};

    // Usamos filter para crear un nuevo array que permita los duplicados un máximo de 2 veces
    const resultado = numeros.filter(numero => {
        // Si el número no está en el objeto, lo añadimos con valor 1
        if (!conteo[numero]) {
            conteo[numero] = 1;
            return true; // Mantenemos el número en el array
        } else if (conteo[numero] < 2) { // Si el número ya apareció una vez, lo mantenemos y aumentamos el contador
            conteo[numero]++;
            return true; // Mantenemos el número en el array
        } else {
            return false; // Si el número ya apareció 2 veces, lo excluimos del array
        }
    });

    // Devolvemos la longitud del array filtrado
    return resultado.length;
}

// Ejemplos:
console.log(eliminarDuplicados([4, 4, 4, 2, 2, 3])); // 5
console.log(eliminarDuplicados([6, 6, 2, 2, 2, 3])); // 5
console.log(eliminarDuplicados([1, 2, 3, 4, 9, 9, 9, 9])); // 5



// solucion 2

function eliminarDuplicados2(numbers){
    // objeto para contar apariciones
    const contador = {};

    // recorrer array y contar las apariciones de cada numero
    for (const number of numbers){
        if(contador[number] === undefined){
            contador[number] = 1;
        }else{
            contador[number]++;
            if(contador[number] >= 3) contador[number] = 2;
        }
    }
    
    const rsdo = Object.values(contador).reduce((acumulador,valor) => {
        return acumulador + valor;
    }, 0);

    return rsdo;
}

console.log(eliminarDuplicados2([4, 4, 4, 2, 2, 3])); // 5
console.log(eliminarDuplicados2([6, 6, 2, 2, 2, 3])); // 5
console.log(eliminarDuplicados2([1, 2, 3, 4, 9, 9, 9, 9])); 