/*
Crea una función que reciba un numero y me genere una matriz
con el numero de columnas y filas que le hemos indicado por parámetro
 
Ejemplos:
generarMatriz(4);
 
Devuelve: 
[
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]

*/


function generarMatriz(numero){

    // CREAR ARRAY VACIO
    let matriz = [];

    // VARIABLE ACUMULADORA DE LA CIFRA Q VOY A METER EN LA MATRIZ
    let numeroActual = 1;

    // BUCLE PARA GENERAR LAS FILAS
    for(let fila = 0; fila < numero; fila++){
        // crear nueva fila con un push
        matriz.push([]);

        // BUCLE PARA GENERAR cada numero de la matriz
        for (let columna = 0; columna < numero; columna ++){
            // agregar num a la fila actual

            matriz[fila].push(numeroActual++)

        }

    }

    return matriz;
}

console.log(generarMatriz(4));