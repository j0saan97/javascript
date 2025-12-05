/**
 * 🎯 EJEMPLO FINAL: COPIA POR VALOR vs. COPIA POR REFERENCIA (Shallow Copy)
 *
 * Se demuestra cómo el Spread Operator (...) maneja los dos tipos de datos.
 */

// --- 1. OBJETO ORIGINAL ---
const datosDeUsuarioOriginal = {
    // Propiedad Primitiva (Copia por Valor)
    id: 101,

    // Propiedad de Objeto Anidado (Copia por Referencia)
    perfil: {
        nombre: "Ana",
        activo: true
    }
};

// --- 2. COPIA SUPERFICIAL (Shallow Copy) ---
// El Spread Operator (...) crea un nuevo objeto en la capa superior,
// copiando el contenido de 'datosDeUsuarioOriginal'.
const datosDeUsuarioCopia = { ...datosDeUsuarioOriginal };


// =======================================================
// A. MODIFICACIÓN DE UN PRIMITIVO (id)
// =======================================================

datosDeUsuarioCopia.id = 102; // Modificamos la copia

console.log("\n--- A. COPIA POR VALOR (Primitivos) ---");
// El 'id' se copió por valor. Cambiar la copia no afecta al original.
console.log(`Original.id: ${datosDeUsuarioOriginal.id}`); // Salida: 101 (NO cambia)
console.log(`Copia.id: ${datosDeUsuarioCopia.id}`);       // Salida: 102 (Cambia solo la copia)


// =======================================================
// B. MODIFICACIÓN DEL OBJETO ANIDADO (perfil)
// =======================================================

// Modificamos una propiedad dentro del objeto anidado 'perfil'
datosDeUsuarioCopia.perfil.activo = false;

console.log("\n--- B. COPIA POR REFERENCIA (Objetos Anidados) ---");
// La propiedad 'perfil' es una referencia. Ambos objetos apuntan a la misma dirección
// de memoria donde reside el objeto { nombre: "Ana", activo: true }.
console.log(`Original.perfil.activo: ${datosDeUsuarioOriginal.perfil.activo}`); // Salida: false (¡CAMBIA el original!)
console.log(`Copia.perfil.activo: ${datosDeUsuarioCopia.perfil.activo}`);       // Salida: false

// CONCLUSIÓN: Modificar el objeto anidado en la copia altera el objeto original,
// ya que la copia superficial solo copió la REFERENCIA, no el objeto anidado en sí.