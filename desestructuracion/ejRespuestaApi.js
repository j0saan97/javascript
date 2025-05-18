// Simulamos una respuesta de API
const respuestaAPI = {
  status: 200,
  data: {
    usuario: {
      id: 42,
      nombre: "Carlos",
      perfil: {
        email: "carlos@example.com",
        redes: {
          twitter: "@carlos_dev",
          github: "carlosGH"
        }
      }
    },
    metadata: {
      fecha: "2025-05-18",
      valid: true
    }
  },
  error: null
};

// ── Desestructuración anidada con renombrado y valores por defecto ────────────
const {
  data: {
    usuario: {
      id,
      nombre,
      perfil: {
        email,
        redes: { twitter: handleTwitter, github: handleGithub }
      }
    },
    metadata: { fecha, valid: esValido }
  },
  status,
  error = "Sin errores"   // por defecto si viniera null o undefined
} = respuestaAPI;

console.log("Status:", status);                   // 200
console.log("ID:", id);                           // 42
console.log("Nombre:", nombre);                   // Carlos
console.log("Email:", email);                     // carlos@example.com
console.log("Twitter:", handleTwitter);           // @carlos_dev
console.log("GitHub:", handleGithub);             // carlosGH
console.log("Fecha de respuesta:", fecha);       // 2025-05-18
console.log("¿Válido?:", esValido);               // true
console.log("Error:", error);                     // "Sin errores"


const usuarioId     = respuestaAPI.data.usuario.id;
const usuarioNombre = respuestaAPI.data.usuario.nombre;

console.log(usuarioId);
console.log(usuarioNombre);

/*
Cuando haces una desestructuración anidada, JavaScript está creando variables locales que reciben
 directamente el valor de cada propiedad profunda
 se produce esto tras bambalinas:

Se “recorren” los niveles del objeto original (respuestaAPI) siguiendo la forma de los { … }.

Para cada propiedad que has listado, se declara en tu ámbito una variable con ese nombre (o con el nuevo nombre que le hayas dado, p. ej. handleTwitter).

Esa variable ya contiene el valor de la propiedad correspondiente, sin necesidad de volver a acceder con respuestaAPI.data.usuario.perfil.email porque el valor ya está almacenado en email.

Por ejemplo:

status → contiene internamente respuestaAPI.status (200).

id → contiene respuestaAPI.data.usuario.id (42).

handleTwitter → contiene respuestaAPI.data.usuario.perfil.redes.twitter (“@carlos_dev”).


console.log("Status:", status);
console.log("ID:", id);
console.log("Twitter:", handleTwitter);

cada status, id o handleTwitter es una variable independiente ya inicializada, y no necesitas
 usar más el camino completo con puntos. La desestructuración se encargó de “rescatar” esos valores y alojarlos en tu ámbito local.

armario
 ├─ cajón A (data)
 │   ├─ cajón A1 (usuario)
 │   │   ├─ cajón A1a (perfil)
 │   │   │   └─ cajón A1a1 (redes)
 │   │   │       ├─ twitter: "@carlos_dev"
 │   │   │       └─ github: "carlosGH"
 │   └─ cajón A2 (metadata)
 └─ cajón B (status)

*/