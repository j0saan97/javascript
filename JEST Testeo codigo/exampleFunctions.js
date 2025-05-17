// exampleFunctions.js

// Función pura
function add(a, b) {
    return a + b;
}

// Función que devuelve una promesa
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('data');
        }, 1000);
    });
}

// Función que llama a otra función
function greet(name) {
    return `Hello, ${name}!`;
}

// Función que puede lanzar un error
function throwError() {
    throw new Error('This is an error');
}

module.exports = { add, fetchData, greet, throwError };
