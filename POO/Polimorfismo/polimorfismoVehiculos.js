const auto = {
  mover: function () {
    console.log("El auto se está moviendo por la carretera.");
  }
};

const barco = {
  mover: function () {
    console.log("El barco navega por el mar.");
  }
};

const avion = {
  mover: function () {
    console.log("El avión vuela por el cielo.");
  }
};

// Función que usa polimorfismo: no importa qué tipo de objeto es
function iniciarMovimiento(vehiculo) {
  vehiculo.mover(); // Mientras tenga el método "mover", funciona
}

iniciarMovimiento(auto);
iniciarMovimiento(barco);
iniciarMovimiento(avion);