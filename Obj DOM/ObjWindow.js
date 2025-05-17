// El objeto window en JavaScript representa una ventana o un marco en el navegador. Es el objeto global al que pertenecen todos los objetos, funciones y variables del JavaScript.

    // Propiedades:

        // Devuelve la altura interior de la ventana en píxeles.
    console.log(window.innerHeight); // Muestra la altura interior de la ventana

    // Devuelve la anchura interior de la ventana en píxeles.
    console.log(window.innerWidth); // Muestra la anchura interior de la ventana

    // Devuelve el objeto `document` asociado con la ventana.
    console.log(window.document); // Muestra el objeto document

    // Devuelve el objeto `location` de la ventana.
    console.log(window.location); // Muestra el objeto location

    // Devuelve el objeto `navigator` de la ventana.
    console.log(window.navigator); // Muestra el objeto navigator

    // Devuelve el objeto `history` de la ventana.
    console.log(window.history); // Muestra el objeto history

    // Devuelve el objeto `screen` de la ventana.
    console.log(window.screen); // Muestra el objeto screen




    // Metodos:

    // Muestra una alerta con un mensaje especificado.
    window.alert("¡Hola, mundo!"); // Muestra una alerta con el mensaje "¡Hola, mundo!"

    // Muestra un cuadro de diálogo con un mensaje y un campo de entrada, devolviendo el texto introducido por el usuario.
    var nombre = window.prompt("¿Cuál es tu nombre?"); // Muestra un prompt y almacena el valor introducido en la variable nombre

    // Muestra un cuadro de diálogo con un mensaje y botones Aceptar y Cancelar, devolviendo un booleano.
    var esConfirmado = window.confirm("¿Estás seguro?"); // Muestra un confirm y almacena el resultado booleano en la variable esConfirmado

    // Abre una nueva ventana con la URL especificada.
    var nuevaVentana = window.open("https://www.ejemplo.com"); // Abre una nueva ventana con la URL especificada

    // Cierra la ventana actual o la ventana especificada.
    nuevaVentana.close(); // Cierra la nueva ventana abierta anteriormente

    // Establece un temporizador que ejecuta una función o un fragmento de código después de un tiempo específico.
    var temporizador = window.setTimeout(function() {
        console.log("Han pasado 3 segundos.");
    }, 3000); // Ejecuta la función después de 3 segundos

    // Borra un temporizador establecido con `setTimeout()`.
    window.clearTimeout(temporizador); // Borra el temporizador previamente establecido

    // Establece un temporizador que ejecuta repetidamente una función o un fragmento de código con un retardo fijo entre cada llamada.
    var intervalo = window.setInterval(function() {
        console.log("Han pasado 2 segundos.");
    }, 2000); // Ejecuta la función cada 2 segundos

    // Borra un temporizador establecido con `setInterval()`.
    window.clearInterval(intervalo); // Borra el intervalo previamente establecido

    // Desplaza la ventana a una posición especificada.
    window.scrollTo(0, 500); // Desplaza la ventana a la posición (0, 500)

    // Devuelve el valor de una propiedad CSS computada de un elemento.
    var estilo = window.getComputedStyle(document.body).backgroundColor;
    console.log(estilo); // Muestra el color de fondo computado del elemento body

