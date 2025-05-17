const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
  // Configurar la respuesta HTTP
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('¡Hola, mundo desde Node.js!\n');
});

// Definir el puerto
const PORT = 3000;

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
