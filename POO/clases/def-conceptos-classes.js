// Definición de la superclase Vehiculo
class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  mostrarInfo() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  }
}

// Definición de la clase hija Automovil
class Automovil extends Vehiculo {
  constructor(marca, modelo, puertas) {
    super(marca, modelo); // Llamada al constructor de la superclase
    this.puertas = puertas;
  }

  mostrarInfo() {
    super.mostrarInfo(); // Llamada al método de la superclase
    console.log(`Puertas: ${this.puertas}`);
  }
}

// Definición de la clase hija Motocicleta
class Motocicleta extends Vehiculo {
  constructor(marca, modelo, cilindrada) {
    super(marca, modelo); // Llamada al constructor de la superclase
    this.cilindrada = cilindrada;
  }

  mostrarInfo() {
    super.mostrarInfo(); // Llamada al método de la superclase
    console.log(`Cilindrada: ${this.cilindrada}cc`);
  }
}

// Crear instancias de las clases hijas
const auto = new Automovil("Toyota", "Corolla", 4);
const moto = new Motocicleta("Honda", "CBR500R", 500);

// Mostrar información de los vehículos
auto.mostrarInfo();
moto.mostrarInfo();


/* notas:
El método this en JavaScript se utiliza para hacer referencia al objeto actual en el contexto en el que
 se está ejecutando el código. Su uso es fundamental para acceder a las propiedades y métodos de un objeto dentro 
de sus propios métodos o constructores, así como para pasar el contexto de un objeto a otra función.

El método super() en JavaScript se utiliza en el contexto de las clases para llamar a los métodos y
 constructores de una clase padre (o superclase). Esto es útil cuando se está trabajando con herencia de clases, 
permitiendo a una clase hija acceder y llamar a métodos y constructores definidos en la clase padre.


*/