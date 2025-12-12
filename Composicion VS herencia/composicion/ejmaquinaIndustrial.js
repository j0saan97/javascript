// ===============================
// 1. COMPONENTES (Mixins de Funcionalidad Industrial)
// ===============================

// Componente: Capacidad de encender y apagar la máquina
const PowerControl = (state) => ({
  powerOn: () => {
    state.isPowered = true;
    console.log(`[${state.model}] Encendido: Máquina ahora está **OPERATIVA**.`);
  },
  powerOff: () => {
    state.isPowered = false;
    console.log(`[${state.model}] Apagado: Máquina ahora está **DETENIDA**.`);
  },
});

// Componente: Control de Temperatura (Termostato)
const TemperatureControl = (state) => ({
  setTemperature: (temp) => {
    if (!state.isPowered) {
      console.log(`[${state.model}] Error: Debe encender la máquina para ajustar la temperatura.`);
      return;
    }
    state.targetTemp = temp;
    console.log(`[${state.model}] Temperatura ajustada a ${temp}°C.`);
  },
  getCurrentTemperature: () => state.currentTemp,
});

// Componente: Control de Humedad (Humidificador/Deshumidificador)
const HumidityControl = (state) => ({
  setHumidity: (level) => {
    if (!state.isPowered) {
      console.log(`[${state.model}] Error: Debe encender la máquina para ajustar la humedad.`);
      return;
    }
    state.targetHumidity = level;
    console.log(`[${state.model}] Humedad ajustada al ${level}%.`);
  },
});


// ===============================
// 2. FUNCIÓN DE FÁBRICA (Ensamblador de Máquinas)
// ===============================

/**
 * Crea una Máquina Industrial ensamblando los comportamientos requeridos.
 * @param {string} model - El modelo de la máquina.
 * @param {Array<Function>} components - Los componentes (mixins) a incluir.
 * @returns {Object} El objeto Máquina compuesto.
 */
const IndustrialMachineFactory = (model, components) => {
  // Estado inicial de la máquina
  const state = {
    model: model,
    isPowered: false,
    currentTemp: 20, // Propiedad que usa TemperatureControl
    targetTemp: 20,
    targetHumidity: 50, // Propiedad que usa HumidityControl
  };

  // Ensamblar el objeto final con Object.assign
  return Object.assign(
    state,
    ...components.map(component => component(state))
  );
};



// ===============================
// 3. CREACIÓN DE MÁQUINAS COMPUESTAS
// ===============================

// 📦 Máquina Modelo A (Solo necesita Encendido/Apagado y Temperatura)
console.log("--- Modelo A: Horno de Secado (Power, Temperature) ---");
const dryerOven = IndustrialMachineFactory("Dryer-3000", [
  PowerControl,
  TemperatureControl,
]);

dryerOven.powerOn();              // Enciende
dryerOven.setTemperature(180);    // Controla la temperatura
// dryerOven.setHumidity(20);     // Error: Este método no existe en Dryer-3000
dryerOven.powerOff();             // Apaga

console.log("\n------------------------------------------------\n");

// 🔬 Máquina Modelo B (Necesita TODO: Power, Temperatura y Humedad)
console.log("--- Modelo B: Cámara Climática (Power, Temp, Humidity) ---");
const climateChamber = IndustrialMachineFactory("Clima-5000", [
  PowerControl,
  TemperatureControl,
  HumidityControl,
]);

climateChamber.powerOn();         // Enciende
climateChamber.setTemperature(5); // Controla la temperatura
climateChamber.setHumidity(90);   // Controla la humedad
climateChamber.powerOff();        // Apaga

console.log("\n--- Prueba de Comportamiento ---");
// Prueba de comportamiento: Intenta cambiar la temperatura antes de encender
climateChamber.setTemperature(150); // Muestra mensaje de error