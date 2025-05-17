class Animal {
  speak() {
    console.log("El animal hace un sonido.");
  }
}

class Perro extends Animal {
  speak() {
    console.log("El perro dice: ¡Guau!");
  }
}

class Gato extends Animal {
  speak() {
    console.log("El gato dice: Miau.");
  }
}

// Polimorfismo: mismo método, diferentes comportamientos según el objeto
const animales = [new Perro(), new Gato(), new Animal()];

animales.forEach(animal => {
  animal.speak(); // Cada objeto responde de manera distinta a "speak"
});