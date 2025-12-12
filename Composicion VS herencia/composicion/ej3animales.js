// ===============================
// 1. COMPONENTES (Mixins o Comportamientos)
// Estos son funciones que añaden un conjunto específico de métodos
// a un objeto, basándose en el 'state' que reciben.
// ===============================

// Comportamiento de Caminar (Walker)
const Walker = (state) => ({
  walk: () => console.log(`${state.name} está caminando.`),
});

// Comportamiento de Volar (Flyer)
const Flyer = (state) => ({
  fly: () => console.log(`${state.name} está volando.`),
});

// Comportamiento de Comer (Eater)
const Eater = (state) => ({
  eat: (food) => console.log(`${state.name} está comiendo ${food}.`),
});

// ===============================
// 2. FUNCIÓN DE FÁBRICA (Ensamblador)
// Esta función es la que implementa la composición.
// ===============================

/**
 * Crea un objeto ensamblando comportamientos.
 * @param {string} name - El nombre del objeto.
 * @param {Array<Function>} components - Un array de funciones de componentes (Mixins).
 * @returns {Object} El objeto compuesto.
 */
const AnimalFactory = (name, components) => {
  // 1. Definir el estado base del objeto
  const state = { name };

  // 2. Ensamblar y devolver el objeto final.
  //    - Se usa Object.assign para copiar las propiedades (métodos)
  //      de los objetos devueltos por cada componente al objeto 'state'.
  //    - '...components.map(component => component(state))'
  //      ejecuta cada componente, pasándole el estado, y desestructura
  //      sus resultados como argumentos separados para Object.assign.
  return Object.assign(
    state,
    ...components.map(component => component(state))
  );
};

// ===============================
// 3. CREACIÓN DE OBJETOS COMPUESTOS
// Cada objeto es creado mezclando solo los componentes que necesita.
// ===============================

console.log("--- 🐶 Creación del Perro (Walker, Eater) ---");
const dog = AnimalFactory("Perro", [Walker, Eater]);
dog.walk();
dog.eat("huesos");
// dog.fly(); // Esto generaría un error, ya que no tiene el componente Flyer.

console.log("\n--- 🐦 Creación del Pájaro (Walker, Flyer, Eater) ---");
const bird = AnimalFactory("Pájaro", [Walker, Flyer, Eater]);
bird.walk();
bird.fly();
bird.eat("semillas");

console.log("\n--- 🐛 Creación del Gusano (Solo Eater) ---");
const worm = AnimalFactory("Gusano", [Eater]);
worm.eat("tierra");
// worm.walk(); // Esto generaría un error, ya que no tiene el componente Walker.