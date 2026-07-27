function generarDiamante(n) {
    // Asegurarnos de que `n` es impar
    if (n % 2 === 0) {
        console.log("Por favor, introduce un número impar.");
        return;
    }

    let diamante = "";

    // Parte superior del diamante
    for (let i = 0; i < Math.ceil(n / 2); i++) {
        let espacios = " ".repeat(Math.ceil(n / 2) - i - 1);
        let estrellas = "*".repeat(2 * i + 1);
        diamante += espacios + estrellas + "\n";
    }

    // Parte inferior del diamante
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        let espacios = " ".repeat(Math.ceil(n / 2) - i - 1);
        let estrellas = "*".repeat(2 * i + 1);
        diamante += espacios + estrellas + "\n";
    }

    console.log(diamante);
}

generarDiamante(5);
