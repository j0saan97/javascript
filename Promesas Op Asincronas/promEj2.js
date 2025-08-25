/**
 * 💡 Función que devuelve una Promesa.
 * La Promesa resuelve si el número es par, y rechaza si es impar.
 * @param {number} numero - El número a verificar.
 */
function verificarParImparAsync(numero) {
  return new Promise((resolve, reject) => {
    
    // Simulación de un pequeño retraso (asincronía)
    setTimeout(() => {
      
      // Verificación de entrada (opcional pero buena práctica)
      if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        // Rechaza si la entrada no es válida
        reject(new Error("⚠️ Error: El valor proporcionado no es un número entero."));
        return;
      }
      
      // Lógica de par o impar usando el módulo (%)
      if (numero % 2 === 0) {
        // Si es par, la Promesa se resuelve
        resolve(`✅ Éxito: El número ${numero} es PAR.`);
      } else {
        // Si es impar, la Promesa se rechaza
        reject(`🟠 Rechazo: El número ${numero} es IMPAR.`);
      }

    }, 500); // Retraso de 500ms
    
  });
}

// ----------------------------------------------------

// 1. Caso de Éxito (Número Par - llama a resolve)
console.log("--- Test: Par (10) ---");
verificarParImparAsync(10)
  .then((mensaje) => {
    // Captura el mensaje de resolve()
    console.log("RESOLVE:", mensaje);
  })
  .catch((error) => {
    // Este bloque se ignora porque la promesa se resolvió
    console.log("CATCH:", error);
  });

// 2. Caso de Fallo (Número Impar - llama a reject)
console.log("\n--- Test: Impar (7) ---");
verificarParImparAsync(7)
  .then((mensaje) => {
    // Este bloque se ignora porque la promesa se rechazó
    console.log("THEN:", mensaje);
  })
  .catch((error) => {
    // Captura el mensaje de reject()
    console.log("REJECT:", error);
  });

// 3. Caso de Error de Tipo (Llama a reject por Error)
console.log("\n--- Test: Error ('hola') ---");
verificarParImparAsync("hola")
  .then((mensaje) => {
    console.log("THEN:", mensaje);
  })
  .catch((error) => {
    // Captura el objeto Error de reject()
    console.error("REJECT:", error.message);
  });