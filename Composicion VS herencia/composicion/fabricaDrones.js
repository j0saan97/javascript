// ===============================
// 1. COMPONENTES (Módulos de Drone)
// ===============================

// Módulo: Núcleo de Vuelo Básico
const FlightCore = (state) => ({
  takeOff: () => {
    state.isFlying = true;
    console.log(`[${state.model}] Despegando...`);
  },
  land: () => {
    state.isFlying = false;
    console.log(`[${state.model}] Aterrizando.`);
  },
  reportStatus: () => console.log(`[${state.model}] Estado: ${state.isFlying ? 'En vuelo' : 'En tierra'}, Batería: ${state.batteryLevel}%.`),
});

// Módulo: Cámara Estándar (fotos)
const BasicCamera = (state) => ({
  takePhoto: () => {
    if (!state.isFlying) {
      console.log(`[${state.model}] Error: El drone debe estar en vuelo para tomar fotos.`);
      return;
    }
    state.photosTaken++;
    console.log(`[${state.model}] Foto tomada. Total: ${state.photosTaken}.`);
  },
});

// Módulo: Cámara Avanzada (video 4K)
const AdvancedCamera = (state) => ({
  startRecording: () => {
    if (!state.isFlying) {
      console.log(`[${state.model}] Error: El drone debe estar en vuelo para grabar.`);
      return;
    }
    state.isRecording = true;
    console.log(`[${state.model}] Grabación de video 4K iniciada.`);
  },
  stopRecording: () => {
    state.isRecording = false;
    console.log(`[${state.model}] Grabación de video 4K detenida.`);
  },
});

// Módulo: Sistema de Carga Pesada
const HeavyPayloadSystem = (state) => ({
  attachPayload: (item) => {
    state.payload = item;
    console.log(`[${state.model}] Carga pesada "${item}" adjuntada.`);
  },
  releasePayload: () => {
    console.log(`[${state.model}] Carga "${state.payload}" liberada.`);
    state.payload = null;
  },
});

// Módulo: Detección de Obstáculos
const ObstacleDetection = (state) => ({
  scanForObstacles: () => {
    if (state.isFlying) {
      console.log(`[${state.model}] Escaneando obstáculos: ${state.obstaclesDetected ? '¡Detectados!' : 'Claro.'}`);
    } else {
      console.log(`[${state.model}] Escáner de obstáculos inactivo en tierra.`);
    }
  },
});


// ===============================
// 2. FUNCIÓN DE FÁBRICA (Ensamblador de Drones)
// ===============================

const DroneFactory = (model, components) => {
  // Estado inicial del drone con propiedades básicas
  const state = {
    model: model,
    batteryLevel: 100,
    isFlying: false,
    photosTaken: 0,       // Usado por BasicCamera
    isRecording: false,   // Usado por AdvancedCamera
    payload: null,        // Usado por HeavyPayloadSystem
    obstaclesDetected: false, // Usado por ObstacleDetection
  };

  // Ensamblar el objeto final
  return Object.assign(
    state,
    ...components.map(component => component(state))
  );
};



// ===============================
// 3. CREACIÓN DE OBJETOS COMPUESTOS (Drones)
// ===============================

// 📸 Drone de Fotografía Básico
console.log("--- Drone de Fotografía (Photo-100) ---");
const photoDrone = DroneFactory("Photo-100", [
  FlightCore,
  BasicCamera,
]);

photoDrone.reportStatus();
photoDrone.takeOff();
photoDrone.takePhoto();
photoDrone.takePhoto();
photoDrone.land();
// photoDrone.startRecording(); // Error: Este método no existe

console.log("\n------------------------------------------------\n");

// 🎥 Drone de Cine con Detección de Obstáculos
console.log("--- Drone de Cine (Cinema-Pro) ---");
const cinemaDrone = DroneFactory("Cinema-Pro", [
  FlightCore,
  AdvancedCamera,
  ObstacleDetection,
]);

cinemaDrone.reportStatus();
cinemaDrone.takeOff();
cinemaDrone.scanForObstacles();
cinemaDrone.startRecording();
cinemaDrone.stopRecording();
cinemaDrone.land();
// cinemaDrone.takePhoto(); // Error: Este método no existe, solo tiene AdvancedCamera

console.log("\n------------------------------------------------\n");

// 📦 Drone de Reparto Pesado con Vuelo Básico
console.log("--- Drone de Reparto (Cargo-Max) ---");
const cargoDrone = DroneFactory("Cargo-Max", [
  FlightCore,
  HeavyPayloadSystem,
]);

cargoDrone.reportStatus();
cargoDrone.takeOff();
cargoDrone.attachPayload("Paquete Grande");
cargoDrone.land();
cargoDrone.releasePayload();
// cargoDrone.scanForObstacles(); // Error: Este método no existe

console.log("\n------------------------------------------------\n");

// 🚀 Drone Híbrido (Cámara Avanzada y Carga Pesada)
console.log("--- Drone Híbrido (Hybrid-X) ---");
const hybridDrone = DroneFactory("Hybrid-X", [
  FlightCore,
  AdvancedCamera,
  HeavyPayloadSystem,
  ObstacleDetection
]);

hybridDrone.reportStatus();
hybridDrone.takeOff();
hybridDrone.attachPayload("Sensor Ambiental");
hybridDrone.startRecording();
hybridDrone.scanForObstacles();
hybridDrone.stopRecording();
hybridDrone.releasePayload();
hybridDrone.land();


