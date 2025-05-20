// Dado un array eleva al cubo todos sus numeros y devuelve la mitad de  cada uno

function calcular(array) {
    let rsdo = [];
    for (let element of array) {
        rsdo.push((element ** 3) / 2);
    }
    return rsdo;
}

console.log(calcular([5, 10, 4, 6]));
