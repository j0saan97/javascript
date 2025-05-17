class Usuario {
  #nombre;
  #password; // Propiedad privada

  constructor(nombre, password) {
    this.#nombre = nombre;
    this.#password = password;
  }

  autenticar(passwordIngresada) {
    if (this.#password === passwordIngresada) {
      console.log(`Acceso concedido a ${this.#nombre}`);
      return true;
    } else {
      console.log("Contraseña incorrecta.");
      return false;
    }
  }

  // Solo lectura del nombre (no del password)
  getNombre() {
    return this.#nombre;
  }
}

const user = new Usuario("juan", "1234");

user.autenticar("1234"); // Acceso concedido a juan
user.autenticar("0000"); // Contraseña incorrecta
console.log(user.getNombre()); // juan
// console.log(user.#password); // Error: propiedad privada
