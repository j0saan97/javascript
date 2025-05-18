// Definimos el objeto 'equipo' con sus propiedades
const equipo = {
  jugadores: ["Ana", "Luis", "Carlos", "Marta"], // Array de nombres
  entrenador: "Rosa López",                       // Nombre del entrenador
  titulos: 3,                                     // Número de campeonatos ganados
  presupuesto: 1_200_000                          // Presupuesto en euros
};

// Desestructuramos las propiedades que necesitamos:
// - jugadores    ← extrae equipo.jugadores
// - entrenador   ← extrae equipo.entrenador
// - presupuesto  ← extrae equipo.presupuesto
const { jugadores, entrenador, presupuesto } = equipo;

// Ahora usamos las variables directamente sin la notación de punto:
console.log("Jugadores:", jugadores);         // ["Ana", "Luis", "Carlos", "Marta"]
console.log("Entrenador:", entrenador);       // "Rosa López"
console.log("Presupuesto:", presupuesto);     // 1200000 €

// La propiedad 'titulos' no fue desestructurada, 
// por lo que NO existe variable 'titulos' en el ámbito actual,
// pero sigue disponible en el objeto original:
console.log("Títulos (desde el objeto):", equipo.titulos); // 3
