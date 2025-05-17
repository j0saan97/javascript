// Definición de la clase padre
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Definición de la clase hija
class Perro extends Animal {
  constructor(nombre, edad, raza) {
    super(nombre, edad); // Llamada al constructor de la clase padre
    this.raza = raza;
  }

  ladrido() {
    console.log("¡Guau guau!");
  }
}

// Crear una instancia de la clase padre
const animal = new Animal("Animalito", 3);
animal.saludar(); // Salida: Hola, soy Animalito y tengo 3 años.

// Crear una instancia de la clase hija
const perro = new Perro("Bobby", 5, "Labrador");
perro.saludar(); // Salida: Hola, soy Bobby y tengo 5 años.
perro.ladrido(); // Salida: ¡Guau guau!
