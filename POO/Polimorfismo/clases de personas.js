// Clase base
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hablar() {
        console.log(`${this.nombre} dice: Hola.`);
    }
}

// Clases derivadas con sus propias implementaciones de hablar()
class Pirata extends Persona {
    hablar() {
        console.log(`${this.nombre} dice: ¡Argh, marinero!`);
    }
}

class Estratega extends Persona {
    hablar() {
        console.log(`${this.nombre} dice: Déjame que lo piense bien...`);
    }
}

class Piloto extends Persona {
    hablar() {
        console.log(`${this.nombre} dice: Entrando en pista.`);
    }
}

// Lista de personajes de diferentes tipos
const personajes = [
    new Pirata("Barbanegra"),
    new Estratega("Sun Tzu"),
    new Piloto("Maverick"),
    new Persona("Juan")
];

// Llamamos al método hablar() en todos sin importar su tipo
personajes.forEach(persona => persona.hablar());