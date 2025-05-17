class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre; // Utilizamos la palabra reservada 'this' para referirnos a la propiedad de la instancia
    this._edad = edad;
  }

  // Getter para obtener el nombre
  get nombre() {
    return this._nombre;
  }

  // Setter para establecer el nombre
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  // Getter para obtener la edad
  get edad() {
    return this._edad;
  }

  // Setter para establecer la edad
  set edad(nuevaEdad) {
    if (nuevaEdad >= 0) { // Verificación de la validez de la edad
      this._edad = nuevaEdad;
    } else {
      console.log("La edad debe ser un número positivo.");
    }
  }
}

// Ejemplo de uso
const persona = new Persona("Juan", 30);
console.log(persona.nombre); // Salida: "Juan"
console.log(persona.edad); // Salida: 30

// Utilizamos el setter para cambiar el nombre y la edad
persona.nombre = "María";
persona.edad = -5; // Esto imprimirá un mensaje de advertencia en la consola

// Mostramos los cambios
console.log(persona.nombre); // Salida: "María"
console.log(persona.edad); // Salida: 30 (no se modificó debido a la verificación en el setter)
