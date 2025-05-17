/* El objeto Element en JavaScript representa un elemento del documento HTML o XML. Es una subclase del objeto Node, lo que significa que
 hereda propiedades y métodos de Node, pero también proporciona características específicas para manipular elementos individuales del DOM (Document Object Model). */

// PROPIEDADES:

    // Obtiene o establece el atributo `id` del elemento.
    var element = document.getElementById("miElemento");
    console.log(element.id); // Muestra el id del elemento
    element.id = "nuevoId"; // Cambia el id del elemento

    // Obtiene o establece el atributo `class` del elemento.
    console.log(element.className); // Muestra las clases del elemento
    element.className = "nuevaClase"; // Cambia las clases del elemento

    // Obtiene o establece el contenido HTML dentro del elemento.
    console.log(element.innerHTML); // Muestra el contenido HTML del elemento
    element.innerHTML = "<p>Nuevo contenido HTML</p>"; // Cambia el contenido HTML del elemento

    // Obtiene o establece el contenido textual del elemento, sin HTML.
    console.log(element.textContent); // Muestra el contenido textual del elemento
    element.textContent = "Nuevo contenido de texto"; // Cambia el contenido textual del elemento

    // Accede a la propiedad `style` del elemento, que permite modificar el estilo CSS.
    element.style.color = "blue"; // Cambia el color del texto del elemento a azul


// METODOS:

    // Obtiene el valor de un atributo especificado del elemento.
    var value = element.getAttribute("data-atributo");
    console.log(value); // Muestra el valor del atributo "data-atributo"

    // Establece el valor de un atributo especificado del elemento.
    element.setAttribute("data-atributo", "nuevoValor"); // Establece el valor del atributo "data-atributo" a "nuevoValor"

    // Elimina un atributo especificado del elemento.
    element.removeAttribute("data-atributo"); // Elimina el atributo "data-atributo" del elemento

    // Agrega un nodo hijo al final de la lista de hijos del elemento.
    var newElement = document.createElement("div");
    element.appendChild(newElement); // Agrega el nuevo elemento <div> como hijo del elemento

    // Inserta un nuevo nodo antes del nodo de referencia como hijo del elemento.
    var referenceNode = document.getElementById("referencia");
    element.insertBefore(newElement, referenceNode); // Inserta el nuevo elemento antes del nodo de referencia

    // Elimina un nodo hijo del elemento.
    element.removeChild(newElement); // Elimina el nodo hijo especificado del elemento

    // Reemplaza un nodo hijo del elemento con un nuevo nodo.
    element.replaceChild(newElement, referenceNode); // Reemplaza el nodo de referencia con el nuevo elemento

    // Devuelve el primer elemento que coincide con el selector CSS especificado.
    var childElement = element.querySelector(".hijo");
    console.log(childElement); // Muestra el primer elemento hijo que coincide con el selector

    // Devuelve una lista de nodos de todos los elementos que coinciden con el selector CSS especificado.
    var childElements = element.querySelectorAll(".hijo");
    childElements.forEach(function(child) {
        child.style.backgroundColor = "lightgray"; // Cambia el fondo de todos los elementos hijos que coinciden con el selector
    });

    // Devuelve una copia del nodo. Si `deep` es `true`, se clonan también todos los nodos descendientes.
    var clone = element.cloneNode(true); // Clona el elemento y todos sus hijos
    document.body.appendChild(clone); // Agrega el clon al final del <body>



