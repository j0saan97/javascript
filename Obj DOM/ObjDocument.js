/* El objeto document en JavaScript es una representación del documento HTML que se carga en el navegador. Proporciona métodos y propiedades que permiten interactuar y 
manipular el contenido del documento. */

// Propiedades:

    // document.title: Obtiene o establece el título del documento.

    console.log(document.title); // Muestra el título actual del documento
    document.title = "Nuevo Título"; // Cambia el título del documento

    // document.body: Accede al elemento <body> del documento.

    console.log(document.body); // Muestra el elemento <body>
    document.body.style.backgroundColor = "lightblue"; // Cambia el color de fondo del <body>

    // document.URL: Devuelve la URL completa del documento actual.

    console.log(document.URL); // Muestra la URL del documento

    // document.forms: Devuelve una colección de todos los formularios (<form>) en el documento:

    console.log(document.forms); // Muestra una colección de todos los formularios

    // document.images: Devuelve una colección de todas las imágenes (<img>) en el documento.

    console.log(document.images); // Muestra una colección de todas las imágenes



// Metodos:

    // document.getElementById(id): Devuelve el elemento con el ID especificado:

    var element = document.getElementById("miElemento");
    element.style.color = "red"; // Cambia el color del texto del elemento con ID "miElemento" a rojo

    // document.getElementsByClassName(className): Devuelve una colección de todos los elementos con la clase especificada.

    var elements = document.getElementsByClassName("miClase");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none"; // Oculta todos los elementos con la clase "miClase"
    }

    // document.getElementsByTagName(tagName): Devuelve una colección de todos los elementos con el nombre de etiqueta especificado.

    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontWeight = "bold"; // Pone en negrita todos los párrafos
}

    // document.querySelector(selector): Devuelve el primer elemento que coincide con el selector CSS especificado.

    var elements = document.querySelectorAll("div.miClase");
    elements.forEach(function(element) {
    element.style.border = "1px solid black"; // Agrega un borde negro a todos los <div> con la clase "miClase"
});

    // document.createElement(tagName): Crea un nuevo elemento con el nombre de etiqueta especificado.

    var newDiv = document.createElement("div");
    newDiv.textContent = "Hola, soy un nuevo div!";
    document.body.appendChild(newDiv); // Agrega el nuevo <div> al final del <body>


    // document.getElementsByName(name): Devuelve una colección de todos los elementos con el atributo name especificado.

    var elements = document.getElementsByName("nombreElemento");
    lements.forEach(function(element) {
    element.style.backgroundColor = "yellow"; // Cambia el fondo de todos los elementos con el atributo name "nombreElemento"
});


    // document.implementation.createDocument(namespaceURI, qualifiedNameStr, documentType): Crea un nuevo documento XML.

    var xmlDoc = document.implementation.createDocument(null, "root", null);
    var rootElement = xmlDoc.documentElement;
    var newElement = xmlDoc.createElement("elemento");
    rootElement.appendChild(newElement);
    console.log(xmlDoc);
    
    // document.write("Este texto se escribe directamente en el documento.");

    document.write("Este texto se escribe directamente en el documento.");

    // document.close(): Cierra el flujo de salida del documento actual. Generalmente se usa junto con document.write().

    document.write("<p>Este es un párrafo.</p>");
    document.close();
