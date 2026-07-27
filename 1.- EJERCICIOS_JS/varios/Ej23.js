/*
Enunciado Ejercicio 23:
Crea una función que a la cual le pase unos números en un array y me decodifique
el mensaje teniendo en cuenta que cada letra tiene un numero asignado.
 
Las letras del abecedario de la A a la Z tienen un número
por ejemplo la A es el numero 1 y la Z es el numero 26
 
Ejemplos:
decodificarMensaje([8, 15, 12, 1]);
 
Devuelve: 
HOLA
*/

// creamos una función llamada decodificarMensaje
function decodificarMensaje(numeros) {
    // creamos una variable para almacenar el mensaje decodificado
    let mensaje = '';

    // recorremos el array de números
    for (let i = 0; i < numeros.length; i++) {
        // convertimos el número a la letra correspondiente y la añadimos al mensaje
        // 'A' tiene el código ASCII 65, así que restamos 1 de la posición y sumamos 65 para obtener la letra
        mensaje += String.fromCharCode(numeros[i] + 64);
    }

    // cuando finaliza el bucle devolvemos el valor de esa variable
    return mensaje;
}

// Ejemplo de uso
console.log(decodificarMensaje([8, 15, 12, 1])); // HOLA
