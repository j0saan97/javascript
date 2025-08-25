// --- FUNCIONES QUE DEVUELVEN PROMESAS ---

/**
 * Paso 1: Simula la autenticación. Resuelve con un ID.
 */
function autenticarUsuario(usuario, password) {
  console.log(`[Paso 1] Intentando autenticar a ${usuario}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario === "admin" && password === "1234") {
        // Éxito: Pasa el ID de usuario al siguiente .then()
        resolve({ userId: 42, role: "admin" });
      } else {
        // Fallo: Rechaza con un mensaje de error
        reject(new Error("Credenciales inválidas."));
      }
    }, 1000); // 1 segundo de retraso
  });
}

/**
 * Paso 2: Simula la obtención de datos del perfil usando el ID.
 */
function obtenerPerfil(datosUsuario) {
  console.log(`[Paso 2] Obteniendo perfil para ID: ${datosUsuario.userId}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (datosUsuario.role === "admin") {
        // Éxito: Resuelve con el objeto de perfil completo
        resolve({
          ...datosUsuario, // mantiene userId y role
          nombre: "Administrador",
          ultimaSesion: "Hoy",
        });
      } else {
        // Fallo: Si el rol no tiene permisos, se rechaza
        reject(new Error("Acceso denegado al perfil."));
      }
    }, 500); // 0.5 segundos de retraso
  });
}

// ----------------------------------------------------

// --- CONSUMO DE LA PROMESA Y ENCADENAMIENTO ---

function iniciarProcesoLogin(usuario, password) {
  // 1. INICIA la cadena llamando a la primera función que devuelve una Promesa
  autenticarUsuario(usuario, password)
    .then((datos) => {
      // 2. RECIBE el resultado de autenticarUsuario (el objeto { userId: 42, role: 'admin' })
      //    y RETORNA la Promesa del siguiente paso (obtenerPerfil)
      return obtenerPerfil(datos);
    })
    .then((perfil) => {
      // 3. RECIBE el resultado de obtenerPerfil (el objeto de perfil completo)
      //    Este es el ÚLTIMO paso de éxito
      console.log(`[Paso 3] Login exitoso. Bienvenido, ${perfil.nombre}!`);
      console.log("Datos:", perfil);
    })
    .catch((error) => {
      // 4. CAPTURA CUALQUIER error de CUALQUIER .then() anterior, o del inicio de la cadena
      console.error("--- PROCESO FALLIDO ---");
      console.error("Motivo:", error.message);
    })
    .finally(() => {
      // 5. Se ejecuta al finalizar toda la cadena, sin importar si fue éxito o fallo
      console.log("\nProceso de login finalizado.\n");
    });
}

// --- EJECUTAR LOS ESCENARIOS ---

// A) Caso de Éxito (Admin)
iniciarProcesoLogin("admin", "1234"); 

// B) Caso de Fallo (Credenciales incorrectas) - Se rechaza en el Paso 1
// iniciarProcesoLogin("guest", "pass");