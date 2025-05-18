/* La asignación por desestructuración (también conocida como "destructuring" en inglés) es una característica de JavaScript que permite
 descomponer un objeto o un array en partes más pequeñas y asignar esas partes a variables individuales de una manera más concisa. Esto es
  especialmente útil cuando deseas acceder a propiedades de objetos o elementos de arrays de una manera más eficiente y legible.

La asignación por desestructuración se realiza utilizando patrones de asignación que coinciden con la estructura del objeto o array 
que deseas descomponer. Los patrones se definen dentro de corchetes {} para objetos y corchetes [] para arrays. */

// Desestructuración de Objetos:

const persona = { nombre: "Juan", edad: 30 };

// Desestructurar el objeto 'persona'
 const { nombre, edad } = persona;

console.log(nombre); // "Juan"
console.log(edad);   // 30


// Desestructuracion de arrays: 

const frutas = ["manzana", "plátano", "naranja"];

const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1); // "manzana"
console.log(fruta2); // "plátano"
console.log(fruta3); // "naranja"

/* La asignación por desestructuración también se puede utilizar 
para asignar propiedades de objetos anidados o acceder a elementos de arrays anidados. */


// Desestructuración de Objetos Anidados:
const personita = { nombres: "Juan", edades: 30, direccion: { ciudad: "Nueva York", codigoPostal: "10001" } };

// Desestructurar el objeto 'personita' y su propiedad 'direccion'
const { nombres, edades, direccion: { ciudad, codigoPostal } } = personita;

console.log(ciudad);       // "Nueva York"
console.log(codigoPostal); // "10001"

// Desestructuración de Arrays Anidados:
const datos = [1, [2, 3], 4];

// Desestructurar el array 'datos' y el array anidado
const [valor1, [valor2, valor3], valor4] = datos;

console.log(valor2); // 2
console.log(valor3); // 3



//  Asignación de variables individuales a partir de un arreglo
const numeros = [1, 2, 3, 4, 5];
const [a, b, c] = numeros;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


// Desestructuración con Valores Predeterminados

// Asignación con valores predeterminados
const opciones = {
  color: "rojo",
  tamaño: "mediano"
};

const { color, tamaño, forma = "redonda" } = opciones;

console.log(color);  // "rojo"
console.log(tamaño); // "mediano"
console.log(forma);  // "redonda" (valor predeterminado)


// Desestructuración de objetos anidados
const usuario = {
  name: "Ana",
  detalles: {
    email: "ana@example.com",
    direccion: "Calle Falsa 123"
  }
};

const { name, detalles: { email, direccion } } = usuario;

console.log(nombre);    // "Ana"
console.log(email);     // "ana@example.com"
console.log(direccion); // "Calle Falsa 123"


// Ej 2:

// Objeto que representa una tarea
const tarea = {
  titulo: "Completar proyecto",
  descripcion: "Terminar la implementación de la funcionalidad principal.",
  prioridad: "Alta",
  completado: false
};

// Función que desestructura los parámetros para acceder a las propiedades del objeto
function mostrarDetallesTarea({ titulo, descripcion, prioridad, completado }) {
  console.log(`Título: ${titulo}`);
  console.log(`Descripción: ${descripcion}`);
  console.log(`Prioridad: ${prioridad}`);
  console.log(`Completado: ${completado ? "Sí" : "No"}`);
}

// Llamada a la función con el objeto 'tarea'
mostrarDetallesTarea(tarea);

// Salida esperada:
// Título: Completar proyecto
// Descripción: Terminar la implementación de la funcionalidad principal.
// Prioridad: Alta
// Completado: No


/* En este ejemplo, la función mostrarDetallesTarea recibe un objeto tarea como argumento. En la definición de la función, usamos la desestructuración
 para extraer las propiedades titulo, descripcion, prioridad y completado directamente desde el objeto pasado como argumento. Luego, la función imprime
  estos valores. Esto simplifica el código y evita tener que acceder a las propiedades a través del objeto dentro de la función. */