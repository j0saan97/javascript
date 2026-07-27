// ============================================
// FETCH API — Guía completa comentada
// ============================================

// 1) GET — pedir datos (el método por defecto, no hace falta especificarlo)
async function obtenerUsuarios() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json(); // OJO: json() también es async, necesita su propio await
  console.log(data);
}

// 2) POST — crear un recurso nuevo (corrigiendo tu captura)
async function crearUsuario() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST', // le decimos qué acción HTTP queremos
    headers: {
      'Content-Type': 'application/json', // avisamos que enviamos JSON
      'Authorization': 'Bearer MI_TOKEN'   // token de autenticación, si la API lo pide
    },
    body: JSON.stringify({ // el body SIEMPRE va como string, por eso stringify
      name: 'Chanchito feliz',
      website: 'google.com'
    })
  });
  const data = await response.json(); // <-- aquí faltaba el await en tu imagen
  console.log(data);
}

// 3) PUT — reemplazar un recurso ENTERO
async function reemplazarUsuario(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Nuevo nombre', website: 'nuevo.com' })
  });
  const data = await response.json();
  console.log(data);
}

// 4) PATCH — modificar SOLO una parte del recurso (diferencia clave con PUT)
async function actualizarParcial(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ website: 'soloCambioEsto.com' })
  });
  const data = await response.json();
  console.log(data);
}

// 5) DELETE — eliminar un recurso (normalmente no lleva body)
async function borrarUsuario(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  });
  console.log('Borrado, status:', response.status); // 200 o 204 = éxito
}

// 6) Manejo de errores REAL — fetch NO lanza error si la API responde 404 o 500
//    solo falla si hay un problema de red. Por eso hay que comprobar response.ok
async function fetchSeguro(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // response.ok es false si el status no está entre 200-299
      throw new Error(`Error HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fallo la petición:', error.message);
  }
}

// 7) Leer distintos tipos de respuesta (no todo es JSON)
async function tiposDeRespuesta() {
  const r1 = await fetch('https://ejemplo.com/data.json');
  const json = await r1.json(); // JSON -> objeto JS

  const r2 = await fetch('https://ejemplo.com/pagina.html');
  const texto = await r2.text(); // texto plano / HTML

  const r3 = await fetch('https://ejemplo.com/imagen.png');
  const blob = await r3.blob(); // datos binarios (imágenes, archivos)
}

// 8) AbortController — cancelar una petición (ej: si el usuario cambia de página)
async function fetchCancelable() {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 3000); // cancela si tarda más de 3s

  try {
    const response = await fetch('https://ejemplo.com/lenta', {
      signal: controller.signal
    });
    const data = await response.json();
  } catch (error) {
    if (error.name === 'AbortError') console.log('Petición cancelada');
  }
}

// 9) Varias peticiones EN PARALELO con Promise.all
async function variasALaVez() {
  const [usuarios, posts] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
  ]);
  console.log(usuarios, posts);
}