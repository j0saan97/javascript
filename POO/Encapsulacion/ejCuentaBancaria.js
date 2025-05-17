class CuentaBancaria {
  #saldo = 0; // Propiedad privada

  ingresar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(`Se ingresaron $${monto}`);
    } else {
      console.log("El monto debe ser positivo.");
    }
  }

  verSaldo() {
    return this.#saldo;
  }
}

const cuenta = new CuentaBancaria();
cuenta.ingresar(100); // Se ingresaron $100
console.log(cuenta.verSaldo()); // 100
cuenta.ingresar(-50); // El monto debe ser positivo.
// console.log(cuenta.#saldo); // Error: propiedad privada no accesible
