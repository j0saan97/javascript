// alert prompot y confirm:

// alert: 

alert("¡Hola, bienvenido a nuestro sitio web!");

// confirm()  Muestra un cuadro de diálogo con un mensaje y dos botones: "Aceptar" y "Cancelar". 
//Devuelve true si el usuario hace clic en "Aceptar" y false si hace clic en "Cancelar". Es útil para confirmar una acción.


// Mostrar un cuadro de confirmación
    const confirmar = confirm("¿Estás seguro de que quieres eliminar este archivo?");

    if (confirmar) {
        // Si el usuario hace clic en "Aceptar"
        console.log("El archivo ha sido eliminado.");
    } else {
        // Si el usuario hace clic en "Cancelar"
        console.log("El archivo no ha sido eliminado.");
    }

// prompt() Muestra un cuadro de diálogo que solicita al usuario que ingrese un texto. Devuelve el texto ingresado
// por el usuario o null si el usuario cancela el diálogo. Es útil para recopilar información del usuario.

    // sintaxis: const input = prompt(message, defaultValue);

        // Solicitar el nombre del usuario
    const nombre = prompt("¿Cuál es tu nombre?", "Invitado");

    if (nombre !== null) {
        // Si el usuario ingresa un nombre y no cancela
        console.log(`Hola, ${nombre}!`);
    } else {
        // Si el usuario cancela
        console.log("No se ingresó ningún nombre.");
    }


    /* Resumen
alert(): Muestra un mensaje simple con un botón "Aceptar".
confirm(): Muestra un mensaje con dos botones ("Aceptar" y "Cancelar") y devuelve un valor booleano basado en la elección del usuario.
prompt(): Solicita al usuario que ingrese un valor y devuelve el valor ingresado o null si se cancela.
Estos métodos son muy útiles para la interacción básica con el usuario en aplicaciones web */