// ===============================
// 1. COMPONENTES (Sensores Especializados)
// ===============================

// Componente: Manejo básico de la energía (necesario para todos)
const PowerSource = (state) => ({
  checkBattery: () => console.log(`[${state.id}] Batería restante: ${state.batteryLevel}%.`),
});

// Componente: Sensor de Viento (Anemómetro)
const WindSensor = (state) => ({
  measureWindSpeed: () => console.log(`[${state.id}] Viento a ${state.windSpeed} km/h.`),
  measureWindDirection: () => console.log(`[${state.id}] Dirección del viento: ${state.windDirection}.`),
  calibrateWind: () => {
    state.windSpeed = 0;
    console.log(`[${state.id}] Calibración de viento exitosa.`);
  },
});

// Componente: Sensor de Lluvia (Pluviómetro)
const RainSensor = (state) => ({
  measureRainfall: () => console.log(`[${state.id}] Precipitación acumulada: ${state.rainfall} mm.`),
  resetRainfall: () => {
    state.rainfall = 0;
    console.log(`[${state.id}] Contador de lluvia reiniciado.`);
  },
});

// Componente: Sensor de Altitud (Barómetro)
const AltitudeSensor = (state) => ({
  measureAltitude: () => console.log(`[${state.id}] Altitud actual: ${state.altitude} metros sobre el nivel del mar.`),
});

// ===============================
// 2. FUNCIÓN DE FÁBRICA (Ensamblador de Estaciones)
// ===============================

const WeatherStationFactory = (id, components) => {
  // Estado inicial con propiedades comunes a todas las estaciones
  const state = {
    id: id,
    batteryLevel: 95,
    // Propiedades específicas del WindSensor
    windSpeed: 15,
    windDirection: 'Norte',
    // Propiedades específicas del RainSensor
    rainfall: 5.2,
    // Propiedades específicas del AltitudeSensor
    altitude: 450,
  };

  // Ensamblar el objeto final con Object.assign
  return Object.assign(
    state,
    ...components.map(component => component(state))
  );
};


// ===============================
// 3. CREACIÓN DE OBJETOS COMPUESTOS (Estaciones): Creamos tres tipos de estaciones muy diferentes, ensamblando solo los sensores que necesitamos:
// ===============================

// 📡 Estación Básica (Solo Viento y Batería)
console.log("--- Estación 1: Monitoreo Básico del Viento (WB-100) ---");
const basicWindStation = WeatherStationFactory("WB-100", [
  PowerSource,
  WindSensor,
]);

basicWindStation.checkBattery();
basicWindStation.measureWindSpeed();
basicWindStation.calibrateWind();
// basicWindStation.measureRainfall(); // Error: Este método no existe

console.log("\n------------------------------------------------\n");

// ⛰️ Estación de Montaña (Viento, Batería, Altitud)
console.log("--- Estación 2: Montaña y Altitud (MA-500) ---");
const mountainStation = WeatherStationFactory("MA-500", [
  PowerSource,
  WindSensor,
  AltitudeSensor,
]);

mountainStation.measureAltitude();
mountainStation.measureWindDirection();

console.log("\n------------------------------------------------\n");

// 🌧️ Estación Completa (TODOS los Sensores)
console.log("--- Estación 3: Clima Completo (ALL-9000) ---");
const fullStation = WeatherStationFactory("ALL-9000", [
  PowerSource,
  WindSensor,
  RainSensor,
  AltitudeSensor,
]);

fullStation.checkBattery();
fullStation.measureRainfall();
fullStation.measureAltitude();
fullStation.resetRainfall();

/*
Este ejemplo demuestra el poder de la Composición:

Reutilización: El componente PowerSource es reutilizado en las tres estaciones.

Flexibilidad: La mountainStation tiene capacidades de altitud que no tiene la basicWindStation, sin necesidad de crear complejas jerarquías de herencia.

Encapsulamiento: Cada sensor es responsable de su propia funcionalidad y solo accede al estado que necesita

*/