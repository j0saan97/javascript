function calcularSueldo(numSpins, stake, roi) {
    let sueldo = numSpins * stake * roi
    return sueldo
}


let toto = calcularSueldo(1000, 1, 0.07)
console.log(toto);

let toto1 = calcularSueldo(2000, 5, 0.1);
console.log(toto1);


