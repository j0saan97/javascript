// Función para determinar el ganador en un juego de Piedra, Papel o Tijera
function quienGana(juegos) {
    let puntosJugador1 = 0;
    let puntosJugador2 = 0;
    
// Función auxiliar para determinar el ganador de un juego individual
function resultado(jugada1, jugada2) {
    if (jugada1 === jugada2) return 0; // Empate
    if (
        (jugada1 === "PIEDRA" && jugada2 === "TIJERA") ||
        (jugada1 === "TIJERA" && jugada2 === "PAPEL") ||
        (jugada1 === "PAPEL" && jugada2 === "PIEDRA")
    ) {
        return 1; // Gana Jugador 1
    }
    return 2; // Gana Jugador 2
}

// Recorremos cada juego y actualizamos los puntos
for (const [jugada1, jugada2] of juegos) {
    const ganador = resultado(jugada1, jugada2);
    if (ganador === 1) puntosJugador1++;
    else if (ganador === 2) puntosJugador2++;
}

// Determinamos el ganador final
if (puntosJugador1 > puntosJugador2) return "Jugador 1";
if (puntosJugador2 > puntosJugador1) return "Jugador 2";
return "Empate";
}

// Ejemplos de uso
console.log(quienGana([["PIEDRA", "TIJERA"], ["TIJERA", "PIEDRA"], ["PAPEL", "TIJERA"]])); // Devuelve: "Jugador 2"
console.log(quienGana([["PIEDRA", "PIEDRA"], ["TIJERA", "TIJERA"], ["PAPEL", "PAPEL"]])); // Devuelve: "Empate"