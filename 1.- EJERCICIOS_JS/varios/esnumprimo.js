function esprimo(number) {
    if (number % 2 === 0) {
        console.log("El número no es primo, es divisible por 2");
    } else if (number % 3 === 0) {
        console.log("El número no es primo, es divisible por 3");
    } else if (number % 5 === 0) {
        console.log("El número no es primo, es divisible por 5");
    } else if (number % 7 === 0) {
        console.log("El número no es primo, es divisible por 7");
    } else {
        console.log("El número es primo");
    }
}

esprimo(35);

