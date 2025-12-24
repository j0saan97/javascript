

import configVersionVieja.js from 'ejercicios\varios\POKER\configVersionVieja.js';

const barajaAmericana = ["AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS",
                          "AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH",
                          "AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD",
                          "AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC"];

function mezclarBaraja(baraja) {
    for (let i = baraja.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }   
    return baraja;
}   
const barajaMezclada = mezclarBaraja([...barajaAmericana]);
// Ejemplo de uso:
 // console.log(barajaMezclada);

function repartirCarta() {
    // Verifica si hay cartas disponibles
    if (barajaMezclada.length === 0) {
        console.log("No hay más cartas en la baraja.");
        return null;
    }   
    return barajaMezclada.pop();
}

// Ejemplo de uso:console.log(repartirCarta());

console.log(RANKING_MANOS);








