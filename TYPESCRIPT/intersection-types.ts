/* La intersección de tipos en TypeScript se utiliza para combinar múltiples tipos en un solo tipo. Esto se hace utilizando 
el operador &, lo que significa que el nuevo tipo resultante tendrá todas las propiedades de los tipos involucrados. */

// Ejemplo 1: Combinación de Tipos de Objetos:

type Persona = {
    nombre: string;
    edad: number;
};

type Empleado = {
    puesto: string;
    salario: number;
};

type EmpleadoCompleto = Persona & Empleado;

const empleado1: EmpleadoCompleto = {
    nombre: "Carlos",
    edad: 28,
    puesto: "Desarrollador",
    salario: 50000,
};

console.log(empleado1);
// { nombre: 'Carlos', edad: 28, puesto: 'Desarrollador', salario: 50000 }

/* En este ejemplo, el tipo EmpleadoCompleto es una intersección de los tipos Persona y Empleado. Cualquier objeto de tipo EmpleadoCompleto debe tener todas las propiedades de ambos tipos */

// Ejemplo 2: Intersección de Tipos con Métodos:

    type Vehiculo = {
        marca: string;
        modelo: string;
    };

    type Electrico = {
        bateria: number; // Capacidad de batería en kWh
        cargar: () => void;
    };

    type VehiculoElectrico = Vehiculo & Electrico;

    const tesla: VehiculoElectrico = {
        marca: "Tesla",
        modelo: "Model S",
        bateria: 100,
        cargar() {
            console.log("Cargando el vehículo eléctrico...");
        },
    };

    console.log(tesla);
    tesla.cargar(); // "Cargando el vehículo eléctrico..."

    // Aquí, VehiculoElectrico combina el tipo Vehiculo con el tipo Electrico. Un objeto de tipo VehiculoElectrico debe tener propiedades de ambos tipos, incluidas las propiedades de método del tipo Electrico

    
// Ejemplo 3: Intersección de Tipos con Funciones

    type Loggable = {
        log: () => void;
    };

    type Identificable = {
        id: number;
    };

    type Usuario = Loggable & Identificable;

    const usuario: Usuario = {
        id: 1,
        log() {
            console.log(`Usuario ID: ${this.id}`);
        },
    };

    usuario.log(); // "Usuario ID: 1"

/* Usuario es una intersección de los tipos Loggable e Identificable. Esto significa que cualquier objeto de tipo Usuario debe tener
 la propiedad id y el método log. La implementación de la función log utiliza la propiedad id. */