/**
 * 1. CREACIÓN DE LA PROMESA
 *
 * La Promesa recibe una función con dos argumentos:
 * - 'resolve': Se llama cuando la operación asíncrona es exitosa.
 * - 'reject': Se llama cuando ocurre un error.
 */
function obtenerDatosUsuario(id) {
  console.log(`Buscando usuario con ID: ${id}...`);

  return new Promise((resolve, reject) => {
    // Simulación de una operación asíncrona (ej: una petición HTTP o una consulta a DB)
    setTimeout(() => {
      if (id === 123) {
        // Operación exitosa: llamamos a resolve() con el resultado
        const usuario = {
          id: 123,
          nombre: "Juan Pérez",
          email: "juan.perez@ejemplo.com",
        };
        resolve(usuario);
      } else {
        // Operación fallida: llamamos a reject() con un error
        reject(new Error(`Usuario con ID ${id} no encontrado.`));
      }
    }, 1500); // 1.5 segundos de retraso para simular la asincronía
  });
}

// ----------------------------------------------------

/**
 * 2. CONSUMO DE LA PROMESA (USANDO .then() y .catch())
 */

// A) Caso de Éxito (ID 123)
console.log("--- Caso de Éxito ---");
obtenerDatosUsuario(123)
  .then((datos) => {
    // El bloque .then() se ejecuta SÓLO si la promesa llama a resolve()
    console.log("¡Éxito! Datos recibidos:");
    console.log(datos);
  })
  .catch((error) => {
    // El bloque .catch() se ejecuta SÓLO si la promesa llama a reject()
    console.error("Error en la búsqueda:", error.message);
  })
  .finally(() => {
    // El bloque .finally() se ejecuta SIEMPRE, al final de la operación (éxito o fracaso)
    console.log("Proceso de búsqueda de usuario finalizado.");
  });

// B) Caso de Fallo (ID 456)
console.log("\n--- Caso de Fallo ---");
obtenerDatosUsuario(456)
  .then((datos) => {
    // Este then() se saltará
    console.log("¡Éxito! Datos recibidos:", datos);
  })
  .catch((error) => {
    // El catch() captura el error del reject()
    console.error("Error en la búsqueda:", error.message); // Error en la búsqueda: Usuario con ID 456 no encontrado.
  })
  .finally(() => {
    console.log("Proceso de búsqueda de usuario finalizado.");
  });