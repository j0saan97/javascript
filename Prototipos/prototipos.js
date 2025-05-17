/*En JavaScript, el prototipo es un mecanismo fundamental que se utiliza para la herencia y el compartir de propiedades y métodos entre objetos. Cada objeto en JavaScript tiene una propiedad interna llamada [[Prototype]], que es un enlace a otro objeto. Este objeto al que se enlaza es conocido como el prototipo del objeto.

Conceptos Clave
Prototipo de un Objeto:

El prototipo de un objeto es otro objeto del cual el objeto hereda propiedades y métodos.
Cuando accedes a una propiedad o método de un objeto, JavaScript primero busca en el objeto mismo. Si no lo encuentra, busca en el prototipo del objeto, y así sucesivamente en la cadena de prototipos.
Cadena de Prototipos:

La cadena de prototipos es el mecanismo que permite a un objeto heredar de otro. Esta cadena termina en un objeto que no tiene prototipo (es decir, null), que es el final de la cadena de herencia.
Cómo Funciona el Prototipo
Creación de Objetos y Prototipos:

Cuando se crea un objeto usando un constructor, el nuevo objeto hereda propiedades y métodos del prototipo del constructor. */

    function Persona(nombre) {
        this.nombre = nombre;
    }

    Persona.prototype.saludar = function() {
        return `Hola, mi nombre es ${this.nombre}`;
    };

    const juan = new Persona("Juan");
    console.log(juan.saludar()); // "Hola, mi nombre es Juan"

    /*En este ejemplo:

Persona.prototype es el prototipo del objeto creado con el constructor Persona.
saludar es un método definido en el prototipo de Persona, por lo que todos los objetos creados con Persona pueden acceder a él.*/


/*Acceso a Propiedades y Métodos en la Cadena de Prototipos:
Si intentas acceder a una propiedad o método que no está directamente en el objeto, JavaScript busca en el prototipo del objeto.*/

console.log(juan.nombre); // "Juan" (directamente en el objeto `juan`)
console.log(juan.saludar()); // "Hola, mi nombre es Juan" (en el prototipo)

// Modificar el Prototipo: Puedes añadir propiedades y métodos al prototipo después de que los objetos han sido creados.

Persona.prototype.despedir = function() {
    return `Adiós, ${this.nombre}`;
};

console.log(juan.despedir()); // "Adiós, Juan"

// Ahora, todos los objetos creados con el constructor Persona tendrán el método despedir.



// HERENCIA PROTOTIPICA:

/* La herencia prototípica en JavaScript es un mecanismo mediante el cual un objeto puede heredar propiedades y métodos de otro objeto a través 
de una cadena de prototipos. En lugar de una herencia basada en clases, como en muchos lenguajes orientados a objetos tradicionales, JavaScript
 utiliza una cadena de prototipos para compartir funcionalidades entre objetos. 
 
 Cómo Funciona la Herencia Prototípica
    Prototipos y Cadenas de Prototipos:

    Cada objeto en JavaScript tiene una propiedad interna llamada [[Prototype]] (accesible mediante __proto__ o Object.getPrototypeOf), que referencia otro objeto.
     Este objeto es el prototipo del objeto original. La cadena de prototipos es la secuencia de objetos a lo largo de la cual JavaScript busca propiedades y métodos.

    Cadena de Prototipos: Si un objeto no tiene una propiedad o método que estás buscando, JavaScript lo busca en el prototipo del objeto, luego en el prototipo del prototipo,
     y así sucesivamente, hasta que encuentra el valor o llega al final de la cadena (donde el prototipo es null).
    Creación de Objetos y Herencia:

    Aquí se muestra cómo se puede crear un objeto y establecer la herencia prototípica:*/

        // Objeto prototipo
            const animal = {
                hacerSonido() {
                    console.log('Este animal hace un sonido');
                }
            };

            // Objeto que hereda de `animal`
            const perro = Object.create(animal);
            perro.hacerSonido = function() {
                console.log('El perro ladra');
            };

            perro.hacerSonido(); // "El perro ladra"

            /* En este ejemplo, perro hereda de animal. Cuando llamas a perro.hacerSonido(), JavaScript busca el método hacerSonido en perro. 
            Como perro tiene su propia implementación de hacerSonido, se ejecuta esa implementación. Si perro no tuviera hacerSonido, JavaScript buscaría en el prototipo animal */


            /* Ventajas y Desventajas
            
                Ventajas:

                Reutilización de Código: Permite compartir métodos y propiedades entre objetos, evitando la duplicación de código.
                Flexibilidad: La herencia prototípica permite la modificación y extensión de objetos existentes de manera dinámica.
                Desventajas:

                Complejidad: La comprensión y gestión de la cadena de prototipos puede ser compleja, especialmente en sistemas con muchas capas de herencia.
                Confusión Potencial: Los desarrolladores nuevos pueden encontrar la herencia prototípica menos intuitiva que la herencia basada en clases. */