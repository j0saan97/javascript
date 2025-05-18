// Objeto con los palos disponibles
const palos = {
  corazones: "♥",
  diamantes: "♦",
  tréboles: "♣",
  picas: "♠"
};

// Valores típicos de las cartas de poker
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Crear la baraja como un Map
const baraja = new Map();

// Generar la baraja: clave = ID de la carta, valor = objeto con palo y valor
let id = 1;
for (const palo in palos) {
  for (const valor of valores) {
    baraja.set(id, {
      valor: valor,
      palo: palo,
      simbolo: palos[palo]
    });
    id++;
  }
}

// Mostrar todas las cartas
for (const [clave, carta] of baraja) {
  console.log(`Carta ${clave}: ${carta.valor}${carta.simbolo} (${carta.palo})`);
}
