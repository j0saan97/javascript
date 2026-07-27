/* Enunciado Ejercicio 22:
Crea una función que invierta el orden de un texto
sin usar funciones nativas del lenguaje.
 
Ejemplos:
invertirTexto("Hola");
 
Devuelve: 
aloH
 */


// creamos una function llamada invertirTexto
function invertirTexto(texto) {
    // creamos una variable para almacenar el texto invertido
    let textoInvertido = '';
    
    // recorremos el texto pasado como parámetro empezando por el ultimo elemento (-1)
    for (let i = texto.length - 1; i >= 0; i--) {
        // en cada iteración añadimos la letra (o elemento) que está recorriendo a una nueva variable
        textoInvertido += texto[i];
    }
    
    // cuando finaliza el bucle imprimimos el valor de esa variable por pantalla
    console.log(textoInvertido);
}

// Ejemplo de uso
invertirTexto("A tope Primo"); 


