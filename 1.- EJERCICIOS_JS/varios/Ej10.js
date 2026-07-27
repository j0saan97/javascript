/*

Crea una función que reciba un DNI (8 números) y calcule la letra del DNI
 
! Es un proceso matemático facil que se basa en obtener el  resto de la división entera del número de DNI y el número 23. 
! Y con el resto se obtiene la letra, usandolo como posición o indice dentro de un array de letras.
 
Este sería el array de letras:
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 
Ejemplos:
generarLetraDNI("25439343");  // Resultado: 25439343D



*/
// solucion 1, chatGPT:
function obtenerLetraDNI(numeroDNI) {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    
    // Calculamos el resto de la división del número de DNI por 23
    const resto = numeroDNI % 23;
    
    // Obtenemos la letra correspondiente usando el resto como índice
    const letra = letras[resto];
    
    return letra;
}

// Ejemplo de uso
const numeroDNI = 12345678;
const letraDNI = obtenerLetraDNI(numeroDNI);
console.log(`La letra del DNI ${numeroDNI} es ${letraDNI}`);  // Ejemplo: La letra del DNI 12345678 es Z


