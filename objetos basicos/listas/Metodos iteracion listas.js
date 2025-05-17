// iterar los valores de una lista:

const array = ["hola", 4, 6, 10, true, "tuu"];
// forma antigua (poco eficiente):
for (let i = 0; 1 < array.length; i++){
    console.log(array[i]);
}

// MAS EFICIENTE: .forEach():

let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
})

console.log(suma);