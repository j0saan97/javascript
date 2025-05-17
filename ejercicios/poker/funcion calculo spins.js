function dinerObtenido(roi, nivel, numSpin) {
    // alert("Introduce rake, nivel, y spin jugados");

    let dineroJugado = numSpin * nivel
    let roiFactor = (1 + roi / 100);
    let euros = "euros";
    let dineroObtenido = nivel * numSpin * roiFactor - dineroJugado;

    console.log(dineroObtenido);
}

dinerObtenido(10, 2, 3000);
dinerObtenido(5, 2, 1000);
dinerObtenido(10, 5, 2000);
dinerObtenido(4, 5, 3000);
