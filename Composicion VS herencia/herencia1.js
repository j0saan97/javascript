// herencia clasica (menos flexible):

class Animal {
  hablar() {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hablar() {
    console.log("Guau guau");
  }
}

const perro = new Perro();
perro.hablar(); // Guau guau

// Pero, ¿qué pasa si quieres que un perro también pueda nadar o correr, y además un pez pueda nadar pero no correr? La herencia puede volverse complicada con múltiples comportamientos.



