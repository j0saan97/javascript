class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  encender() {
    console.log(`${this.marca} ${this.modelo} está encendido`);
  }

  apagar() {
    console.log(`${this.marca} ${this.modelo} está apagado`);
  }
}

class Auto extends Vehiculo {
  constructor(marca, modelo, puertas) {
    super(marca, modelo); // Llama al constructor de Vehiculo
    this.puertas = puertas;
  }

  tocarBocina() {
    console.log(`${this.marca} ${this.modelo} hace ¡beep beep!`);
  }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, cilindrada) {
    super(marca, modelo);
    this.cilindrada = cilindrada;
  }

  hacerWheelie() {
    console.log(`${this.marca} ${this.modelo} hace un wheelie 🔥`);
  }
}


const miAuto = new Auto('Toyota', 'Corolla', 4);
miAuto.encender();
miAuto.tocarBocina();
miAuto.apagar();

const miMoto = new Moto('Yamaha', 'FZ', 250);
miMoto.encender();
miMoto.hacerWheelie();
