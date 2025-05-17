/*El narrowing (reducción de tipo) en programación, especialmente en lenguajes con tipado estático como TypeScript, 
se refiere al proceso de restringir un tipo más general a un tipo más específico dentro de un bloque de código. 
Esto permite que el compilador o el intérprete entienda que una variable puede ser de un tipo más específico bajo ciertas condiciones.
*/

// Ejemplo 1: Uso de typeof para Narrowing:

function procesarValor(valor: string | number) {
    if (typeof valor === "string") {
        console.log(`La longitud de la cadena es: ${valor.length}`);
    } else {
        console.log(`El número es: ${valor}`);
    }
}

procesarValor("Hola Mundo"); // La longitud de la cadena es: 11
procesarValor(42); // El número es: 42


// Ejemplo 2: Uso de instanceof para Narrowing:

class Perro {
    ladrar() {
        console.log("¡Guau!");
    }
}

class Gato {
    maullar() {
        console.log("¡Miau!");
    }
}

function hacerSonido(animal: Perro | Gato) {
    if (animal instanceof Perro) {
        animal.ladrar();
    } else {
        animal.maullar();
    }
}

const miPerro = new Perro();
const miGato = new Gato();

hacerSonido(miPerro); // ¡Guau!
hacerSonido(miGato); // ¡Miau!


// Ejemplo 3: Uso de Guardias de Tipo Personalizadas:

type Coche = {
    tipo: "coche";
    marca: string;
};

type Bicicleta = {
    tipo: "bicicleta";
    marca: string;
};

type Vehiculo = Coche | Bicicleta;

function mostrarVehiculo(vehiculo: Vehiculo) {
    switch (vehiculo.tipo) {
        case "coche":
            console.log(`Es un coche de marca: ${vehiculo.marca}`);
            break;
        case "bicicleta":
            console.log(`Es una bicicleta de marca: ${vehiculo.marca}`);
            break;
    }
}

const miCoche: Coche = { tipo: "coche", marca: "Toyota" };
const miBicicleta: Bicicleta = { tipo: "bicicleta", marca: "Giant" };

mostrarVehiculo(miCoche); // Es un coche de marca: Toyota
mostrarVehiculo(miBicicleta); // Es una bicicleta de marca: Giant

// ejemplo 4:

function obtenerLongitud(texto?: string | null): number {
    if (texto == null) {
        return 0; // manejo de null y undefined
    }
    return texto.length;
}

console.log(obtenerLongitud("Hola")); // 4
console.log(obtenerLongitud(null)); // 0
console.log(obtenerLongitud()); // 0

