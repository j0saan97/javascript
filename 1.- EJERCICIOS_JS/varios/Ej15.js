/*
! Dada un array de palabras, crear una función que lo devuelva ordenado por la longitud de sus palabras de menor a mayor 

*/
/*
! Dada un array de palabras, crear una función que lo devuelva ordenado por la longitud de sus palabras de menor a mayor 

*/
// Solucion 1:

function ordenarPorLongitudAsc(palabras) {
    return palabras.sort((a, b) => a.length - b.length);
}

// Ejemplo de uso
console.log(ordenarPorLongitudAsc(["palabra", "es", "una", "cadena", "muy", "larga", "escandaloso", "y"])); 


        // variable ordenando en orden desc ( de mayor longitud a menor):

        function ordenarPorLongitudDesc(palabras) {
            return palabras.sort((a, b) => b.length - a.length);
        }

        // Ejemplo de uso
        console.log(ordenarPorLongitudDesc(["palabra", "es", "una", "cadena", "muy", "larga"])); // ["palabra", "cadena", "larga", "una", "muy", "es"]


        /*      
        !EXPLICACION METODO SORT:

        La función de comparación toma dos argumentos, a y b, que son elementos del array que se van a comparar. En este caso, a y b son dos palabras del array palabras.

a.length obtiene la longitud de la palabra a.
b.length obtiene la longitud de la palabra b.

!La expresión a.length - b.length devuelve:
  Un número negativo si la longitud de a es menor que la longitud de b.
 Cero si las longitudes son iguales.
Un número positivo si la longitud de a es mayor que la longitud de b.
! El método sort utiliza este resultado para determinar el orden de a y b. Si el resultado es negativo, a se coloca antes que b. Si es positivo, a se coloca después que b. Si es cero, el orden relativo de a y b no cambia.

Resultado:
La función ordenarPorLongitudAsc devuelve el array palabras ordenado según la longitud de las palabras en orden ascendente.        
        */