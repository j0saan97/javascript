const http = require('http'); // Módulo nativo de Node para redes

const server = http.createServer((req, res) => {
    // Esta función se ejecuta cada vez que alguien entra a tu web
    console.log("¡Alguien visitó el servidor!");
    
    res.statusCode = 200; // Estado OK
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo desde mi servidor en Node.js');
});

// El servidor escucha en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});