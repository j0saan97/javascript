// Constructor de función
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Método agregado al prototipo de Persona
Persona.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

// Crear instancias
const persona1 = new Persona("Ana", 28);
const persona2 = new Persona("Luis", 35);

// Usar método del prototipo
persona1.saludar(); // Hola, mi nombre es Ana y tengo 28 años.
persona2.saludar(); // Hola, mi nombre es Luis y tengo 35 años.

// Agregar un nuevo método al prototipo después de crear las instancias
Persona.prototype.cumplirAnios = function () {
  this.edad += 1;
  console.log(`${this.nombre} ahora tiene ${this.edad} años.`);
};

// Usar nuevo método en instancias existentes
persona1.cumplirAnios(); // Ana ahora tiene 29 años.
persona2.cumplirAnios(); // Luis ahora tiene 36 años.

// Verificar que el método está en el prototipo, no en la instancia directamente
console.log(persona1.hasOwnProperty("saludar")); // false
console.log("saludar" in persona1);              // true
