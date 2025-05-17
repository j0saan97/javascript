const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader('Content-Type', 'text/html');

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Servidor Node.js</title>
      </head>
      <body>
        <h1>¡Bienvenido al servidor de Node.js!</h1>
        <p>Este contenido es HTML.</p>
      </body>
    </html>
  `);
});

// Definir el puerto
const PORT = 3000;

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
