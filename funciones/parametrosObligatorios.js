// 1 Lanzar un error si no se pasa el parámetro
function saludar(nombre) {
  if (nombre === undefined) {
    throw new Error("El parámetro 'nombre' es obligatorio");
  }
  console.log(`Hola, ${nombre}!`);
}

// Ejemplo:
saludar("Carlos");  // Funciona bien
saludar();          // Error: El parámetro 'nombre' es obligatorio

// 2 Usar valor por defecto que lanza error (truco)

function requerido() {
  throw new Error("Parámetro obligatorio no proporcionado");
}

function saludarr(nombre = requerido()) {
  console.log(`Hola, ${nombre}!`);
}

// Ejemplo:
saludarr("Ana");  // Funciona
saludarr();       // Error lanzado desde requerido()

// 3 Validación simple para parámetros falsy, si quieres validar también que no sea vacío, nulo, etc

function saludarrr(nombre) {
  if (!nombre) {
    throw new Error("El parámetro 'nombre' es obligatorio y no puede estar vacío");
  }
  console.log(`Hola, ${nombre}!`);
}

console.log(saludarrr());