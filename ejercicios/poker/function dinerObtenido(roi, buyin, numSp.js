function dinerObtenido(roi, buyin, numSpin) {
    // alert("Introduce rake, nivel, y spin jugados");

    let dineroJugado = numSpin * buyin
    let roiFactor = (1 + roi / 100);
    let euros = "euros";
    let beneficio = buyin * numSpin * roiFactor - dineroJugado;
    console.log(beneficio);
}

let calculo1 = dinerObtenido(5.77, 2, 1000);
console.log(calculo1);




