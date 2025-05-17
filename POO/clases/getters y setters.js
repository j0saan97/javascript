/* getters y setters: 
Los "getters" y "setters" son características de JavaScript que te permiten controlar el acceso a las
 propiedades de un objeto. Los "getters" se utilizan para obtener el valor de una propiedad, y los "setters" se utilizan
para establecer el valor de una propiedad. Esto te permite encapsular la lógica y controlar la forma en que se acceden y 
modifican los datos de un objeto */

class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  // Getter para obtener el nombre
  get nombre() {
    return this._nombre;
  }

  // Setter para establecer el nombre
  set nombre(nuevoNombre) {
    if (typeof nuevoNombre === "string") {
      this._nombre = nuevoNombre;
    } else {
      console.error("El nombre debe ser una cadena de caracteres.");
    }
  }

  // Getter para obtener la edad
  get edad() {
    return this._edad;
  }

  // Setter para establecer la edad
  set edad(nuevaEdad) {
    if (typeof nuevaEdad === "number" && nuevaEdad > 0) {
      this._edad = nuevaEdad;
    } else {
      console.error("La edad debe ser un número positivo.");
    }
  }
}

// Crear una instancia de Persona
const persona = new Persona("Juan", 30);

// Acceder al valor del getter para nombre
console.log(persona.nombre); // "Juan"

// Establecer el valor del setter para nombre
persona.nombre = "María";
console.log(persona.nombre); // "María"

// Intentar establecer un valor no válido para nombre
persona.nombre = 42; // Muestra un mensaje de error

// Acceder al valor del getter para edad
console.log(persona.edad); // 30

// Establecer el valor del setter para edad
persona.edad = 25;
console.log(persona.edad); // 25

// Intentar establecer un valor no válido para edad
persona.edad = "veinte"; // Muestra un mensaje de error
