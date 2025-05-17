/* Estos métodos y propiedades del objeto location te permiten manipular y obtener información sobre la URL del 
documento actual, facilitando la navegación y la gestión de la ubicación en la aplicación web. */

// PROPIEDADES:

    // Devuelve la URL completa de la página actual.
    console.log(location.href); // Muestra la URL completa del documento actual
    location.href = "https://www.ejemplo.com"; // Cambia la URL, redirigiendo a la nueva dirección

    // Devuelve el protocolo de la URL (por ejemplo, "http:" o "https:").
    console.log(location.protocol); // Muestra el protocolo de la URL
    location.protocol = "https:"; // Cambia el protocolo de la URL

    // Devuelve el nombre del host y el número de puerto de la URL.
    console.log(location.host); // Muestra el host de la URL (por ejemplo, "www.ejemplo.com:80")

    // Devuelve el nombre del host de la URL (sin el puerto).
    console.log(location.hostname); // Muestra el nombre del host (por ejemplo, "www.ejemplo.com")

    // Devuelve el número de puerto de la URL.
    console.log(location.port); // Muestra el número de puerto de la URL (por ejemplo, "80")
    location.port = "8080"; // Cambia el número de puerto de la URL

    // Devuelve la ruta de la URL.
    console.log(location.pathname); // Muestra la ruta de la URL (por ejemplo, "/ruta/pagina")
    location.pathname = "/nuevaRuta"; // Cambia la ruta de la URL

    // Devuelve la cadena de búsqueda de la URL, incluyendo el "?".
    console.log(location.search); // Muestra la cadena de búsqueda de la URL (por ejemplo, "?id=123")

    // Devuelve la parte del fragmento de la URL, incluyendo el "#".
    console.log(location.hash); // Muestra el fragmento de la URL (por ejemplo, "#seccion")
    location.hash = "#nuevaSeccion"; // Cambia el fragmento de la URL


// METODOS:

    // Recarga la página actual.
    location.reload(); // Recarga la página actual

    // Recarga la página actual desde el servidor, ignorando la caché.
    location.reload(true); // Recarga la página actual desde el servidor

    // Carga una nueva URL.
    location.assign("https://www.ejemplo.com"); // Redirige a la URL especificada

    // Reemplaza la URL actual con una nueva sin guardar la URL anterior en el historial.
    location.replace("https://www.ejemplo.com"); // Reemplaza la URL actual con la URL especificada

    // Devuelve la URL base del documento.
    console.log(location.origin); // Muestra el origen de la URL (por ejemplo, "https://www.ejemplo.com")
