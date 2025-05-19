
// ej 1
function saludar(nombre, saludo = "Hola") {
  console.log(`${saludo}, ${nombre}!`);
}

// Llamadas:
saludar("Carlos");             // Usa el valor por defecto: "Hola, Carlos!"
saludar("Lucía", "Buenos días"); // Usa el segundo parámetro: "Buenos días, Lucía!"

/*
Explicación:
nombre: obligatorio, no tiene valor por defecto.

saludo: opcional, tiene un valor por defecto "Hola".

En JavaScript, todos los parámetros técnicamente son opcionales, pero al no poner valor por defecto, si no pasas uno, será undefined.
*/

// ej 2
function listarFrutas(frutas = ["manzana", "banana", "naranja"]) {
  console.log("Frutas disponibles:");
  frutas.forEach(fruta => console.log(`- ${fruta}`));
}

// Llamadas
listarFrutas();                      // Usa el array por defecto
listarFrutas(["kiwi", "mango"]);    // Usa el array proporcionado

// ej 3:
function crearUsuario(config = { nombre: "Invitado", rol: "lector" }) {
  console.log(`Nombre: ${config.nombre}`);
  console.log(`Rol: ${config.rol}`);
}

// Llamadas
crearUsuario();  // Usa el objeto por defecto
crearUsuario({ nombre: "Ana", rol: "admin" });  // Usa valores proporcionados
