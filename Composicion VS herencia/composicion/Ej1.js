// Composición (más flexible): En lugar de heredar, creamos comportamientos como funciones independientes y los asignamos a objetos

const puedeNadar = {
  nadar() {
    console.log(`${this.nombre} está nadando`);
  }
};

const puedeCorrer = {
  correr() {
    console.log(`${this.nombre} está corriendo`);
  }
};

function crearPerro(nombre) {
  let perro = { nombre };
  return Object.assign(perro, puedeCorrer, puedeNadar);
}

function crearPez(nombre) {
  let pez = { nombre };
  return Object.assign(pez, puedeNadar);
}

const perro = crearPerro("Rex");
perro.correr(); // Rex está corriendo
perro.nadar();  // Rex está nadando

const pez = crearPez("Nemo");
pez.nadar();    // Nemo está nadando
// pez.correr(); // Error: pez no puede correr