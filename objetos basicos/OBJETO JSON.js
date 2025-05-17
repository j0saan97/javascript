/*Objeto JSON: En JavaScript, un objeto JSON se refiere a un objeto JavaScript que sigue el formato de JSON.
 Un objeto JSON es una colección de pares clave-valor, donde las claves son cadenas y los valores pueden ser
 cualquier valor JSON válido, que incluye números, cadenas, booleanos, objetos anidados, matrices y null. */
 


/* Métodos JSON: JavaScript proporciona métodos para trabajar con JSON, como JSON.parse()y JSON.stringify(): . */

// JSON.parse(): Convierte una cadena JSON en un objeto JavaScript

const persona = {
  nombre: "Juan",
  edad: 30,
  casado: false
};


// JSON.parse(): Convierte una cadena JSON en un objeto JavaScript.
// const persona = JSON.parse(jsonString);

// JSON.stringify(): Convierte un objeto JavaScript en una cadena JSON.
const jsonString = JSON.stringify(persona);

/* Estos métodos son esenciales para la serialización (de objeto a JSON) y la deserialización (de JSON a objeto) de datos,
 lo que facilita el intercambio y el almacenamiento de información estructurada.
El formato JSON es ampliamente utilizado en el desarrollo web y en la comunicación entre sistemas, 
ya que es sencillo, legible y ampliamente compatible con diferentes lenguajes de programación. */

