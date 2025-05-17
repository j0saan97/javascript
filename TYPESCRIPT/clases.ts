// Ejemplo 1: Clase Básica con Propiedades Tipadas:

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

const persona1 = new Persona("Juan", 25);
console.log(persona1.saludar()); // "Hola, mi nombre es Juan y tengo 25 años."


// Ejemplo 2: Clase con Propiedades y Métodos Privados:

class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(monto: number): void {
        this.saldo += monto;
    }

    retirar(monto: number): void {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("Fondos insuficientes");
        }
    }

    obtenerSaldo(): number {
        return this.saldo;
    }
}

const miCuenta = new CuentaBancaria(1000);
miCuenta.depositar(500);
miCuenta.retirar(300);
console.log(miCuenta.obtenerSaldo()); // 1200


// Ejemplo 3: Clases con Herencia:

class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log("Sonido genérico");
    }
}

class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    hacerSonido(): void {
        console.log("Guau guau");
    }
}

const miPerro = new Perro("Fido");
miPerro.hacerSonido(); // "Guau guau"

/* Aquí, la clase Perro extiende la clase Animal, heredando su propiedad nombre y su método hacerSonido. Sin embargo,
 Perro sobrescribe el método hacerSonido para proporcionar un comportamiento específico. */

 // Ejemplo 4: Implementación de Interfaces en Clases:

 interface Forma {
    calcularArea(): number;
}

class Rectangulo implements Forma {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}

const miRectangulo = new Rectangulo(10, 5);
console.log(miRectangulo.calcularArea()); // 50


/* En este ejemplo, la clase Rectangulo implementa la interfaz Forma, que requiere que la clase tenga un método
 calcularArea que retorne un number. Esto asegura que cualquier clase que implemente Forma cumpla con este contrato. */

 // Ejemplo 5: Clases con Propiedades de Solo Lectura:

 class Libro {
    readonly titulo: string;
    readonly autor: string;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }

    obtenerInfo(): string {
        return `"${this.titulo}" por ${this.autor}`;
    }
}

const libro1 = new Libro("1984", "George Orwell");
console.log(libro1.obtenerInfo()); // "1984" por George Orwell

// libro1.titulo = "Un nuevo título"; // Error: Cannot assign to 'titulo' because it is a read-only property.

/* En este ejemplo, titulo y autor son propiedades de solo lectura (readonly). Esto significa que pueden ser inicializadas en el constructor, pero no pueden ser modificadas después. */


// Ejemplo 6: Clases con Métodos y Propiedades Estáticas:

class Matematicas {
    static PI: number = 3.14159;

    static calcularCircunferencia(diametro: number): number {
        return diametro * Matematicas.PI;
    }
}

console.log(Matematicas.PI); // 3.14159
console.log(Matematicas.calcularCircunferencia(10)); // 31.4159

/* En este ejemplo, la clase Matematicas tiene una propiedad estática PI y un método estático calcularCircunferencia.
Los miembros estáticos se pueden acceder directamente desde la clase sin necesidad de crear una instancia. */