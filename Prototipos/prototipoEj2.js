// Constructor de función para crear rectángulos
function Rectangulo(ancho, alto) {
  this.ancho = ancho;
  this.alto = alto;
}

// Agregar método al prototipo
Rectangulo.prototype.area = function () {
  return this.ancho * this.alto;
};

Rectangulo.prototype.perimetro = function () {
  return 2 * (this.ancho + this.alto);
};

// Crear instancias
const r1 = new Rectangulo(4, 5);
const r2 = new Rectangulo(10, 2);

// Usar métodos del prototipo
console.log("Área r1:", r1.area()); // 20
console.log("Perímetro r1:", r1.perimetro()); // 18

console.log("Área r2:", r2.area()); // 20
console.log("Perímetro r2:", r2.perimetro()); // 24

// Verificar si los métodos están en el prototipo y no en la instancia
console.log(r1.hasOwnProperty("area")); // false
console.log("area" in r1); // true
