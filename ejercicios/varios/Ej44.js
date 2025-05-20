// Función para verificar si un string es un pangrama
function esPangrama(texto) {
    // Convertimos el texto a minúsculas y eliminamos caracteres no alfabéticos
    const letras = texto.toLowerCase().replace(/[^a-z]/g, '');

    // Usamos un Set para almacenar cada letra única del texto
    const unicas = new Set(letras);

    // Un texto es un pangrama si contiene 26 letras únicas (el abecedario completo)
    return unicas.size === 26;
}

// Ejemplo de uso
console.log(esPangrama("El veloz murciélago hindú comía feliz cardillo y kiwi.")); // Salida: true
console.log(esPangrama("El pequeño jabato erizo se balanceaba sobre la rama del árbol")); // Salida: false
console.log(esPangrama("Jovencillo emponzoñado de whisky, ¡qué figurota exhibes!")); // Salida: true

