/**
 * 💡 DEMOSTRACIÓN CLAVE: COPIA POR VALOR vs. COPIA POR REFERENCIA
 *
 * Utilizamos el Spread Operator (...) para realizar la Copia Superficial (Shallow Copy).
 * El resultado es idéntico al usar Object.assign({}, original).
 */

const objetoOriginal = {
    // 1. PRIMITIVO: La propiedad 'edad' almacena el valor 30.
    edad: 30,

    // 2. OBJETO ANIDADO: La propiedad 'config' almacena la REFERENCIA a otro objeto en la memoria.
    config: {
        activo: true,
        idioma: 'es'
    },

    // 3. PRIMITIVO: Otro ejemplo.
    nombre: "Alice"
};

// Se crea una COPIA SUPERFICIAL usando el Spread Operator
const copiaSuperficial = { ...objetoOriginal };

console.log("--- INICIAL: Ambos objetos son idénticos ---");
console.log(`Original.config.activo: ${objetoOriginal.config.activo}`); // true
console.log(`Copia.config.activo: ${copiaSuperficial.config.activo}`);   // true


// =================================================================
// A. PRUEBA CON PROPIEDADES PRIMITIVAS (Copia por Valor)
// =================================================================

copiaSuperficial.edad = 31;
copiaSuperficial.nombre = "Bob";

console.log("\n--- RESULTADO A: Primitivos (COPIA POR VALOR) ---");
console.log(`Original.edad: ${objetoOriginal.edad}`);    // 30 (No cambia)
console.log(`Copia.edad: ${copiaSuperficial.edad}`);     // 31 (Cambia solo la copia)
console.log(`Original.nombre: ${objetoOriginal.nombre}`);// Alice (No cambia)
console.log(`Copia.nombre: ${copiaSuperficial.nombre}`);  // Bob (Cambia solo la copia)

// CONCLUSIÓN: Los valores primitivos (30, "Alice") se copiaron,
// y la conexión con el original se rompió. Son independientes.


// =================================================================
// B. PRUEBA CON OBJETOS ANIDADOS (Copia por Referencia)
// =================================================================

copiaSuperficial.config.activo = false; // ¡Modificamos una propiedad DENTRO del objeto anidado!
copiaSuperficial.config.idioma = 'en';

console.log("\n--- RESULTADO B: Objeto Anidado (COPIA POR REFERENCIA) ---");
console.log(`Original.config.activo: ${objetoOriginal.config.activo}`); // false (¡Cambia el original!)
console.log(`Copia.config.activo: ${copiaSuperficial.config.activo}`);   // false

// CONCLUSIÓN: Las propiedades 'config' en el original y la copia apuntan al mismo objeto en memoria.
// Modificar la copia.config modifica el objeto único, afectando al original.

/*
! EXPLICACIÓN: cuando es un objeto anidado el que modificamos, aunque esté en la coppia como apunta a la dirección de memoria y no a la referencia por valor del objeto original si cambia
*/