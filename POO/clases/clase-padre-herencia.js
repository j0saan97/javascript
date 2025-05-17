// Definición de la clase padre
class Figura {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  area() {
    console.log("El cálculo del área es específico de cada tipo de figura.");
  }
}

// Definición de la clase hija
class Rectangulo extends Figura {
  constructor(color, ancho, alto) {
    super(color); // Llamada al constructor de la clase padre
    this.ancho = ancho;
    this.alto = alto;
  }

  area() {
    return this.ancho * this.alto;
  }
}

// Crear una instancia de la clase hija
const rectangulo = new Rectangulo("rojo", 5, 10);

console.log(rectangulo.getColor()); // Salida: "rojo"
console.log(rectangulo.area()); // Salida: 50 (5 * 10)
