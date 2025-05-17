/* El objeto Error en JavaScript se utiliza para representar errores en el código. 
Estos errores pueden ocurrir durante la ejecución de un programa y 
se utilizan para comunicar información sobre lo que salió mal. */

// lanzar y capturar un error:
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero.");
    }
    return a / b;
}

try {
    const resultado = dividir(10, 0);
    console.log("El resultado es: " + resultado);
} catch (error) {
    console.error("Ocurrió un error: " + error.message);
}

// Definir errores personalizados:

class MiErrorPersonalizado extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "MiErrorPersonalizado";
    }
}

try {
    throw new MiErrorPersonalizado("Este es un error personalizado.");
} catch (error) {
    console.error("Ocurrió un error: " + error.message);
}

// Manejar errores asincrónicos: Los errores también se pueden manejar en operaciones asincrónicas, como promesas:

function operacionAsincronica() {
    return new Promise((resolve, reject) => {
        // Simulando un error
        setTimeout(() => {
            reject(new Error("Ocurrió un error en la operación asincrónica."));
        }, 1000);
    });
}

operacionAsincronica()
    .then(resultado => {
        console.log("Éxito: " + resultado);
    })
    .catch(error => {
        console.error("Error asincrónico: " + error.message);
    });
