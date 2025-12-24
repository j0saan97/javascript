// Interfaces para Texas Hold’em (TypeScript)
//♠️ Carta

interface Carta {
  valor: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
  palo: "♠" | "♥" | "♦" | "♣";
}

interface Jugador {
  id: number;
  alias: string;
  stackEnMesa: number;        // fichas disponibles
  cartasRepartidas: [Carta, Carta]; // exactamente 2 cartas
  activo: boolean;
  combinacionPosible: [cartasRepartidas[], Carta, Carta, Carta, Carta, Carta]; // cartas repartidas + FLOP + TURN+ RIVER
  rankingMano: string; // usando el objeto ranking manos     
}

interface Mesa {
  id: number;
  jugadores: Jugador[];
  dealerIndex: number;        // posición del botón
  stake: stake;
  pozo: number;
}


interface EstadoMano {
  fase: "preflop" | "flop" | "turn" | "river" | "showdown";
}


interface ManoTexasHoldem {
  readonly id: number;
  mesa: Mesa;
  estado: EstadoMano;
  ganador: Jugador[];
  manoGanadora: string; // usando el objeto ranking manos
  pozo: number;
}

