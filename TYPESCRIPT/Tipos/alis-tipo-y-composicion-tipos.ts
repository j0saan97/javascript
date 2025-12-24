/* En TypeScript, los Type Aliases (alias de tipos) te permiten crear un nuevo nombre para un tipo existente.
 Esto es útil para hacer que el código sea más legible y para reutilizar tipos complejos. La composición de tipos
  se refiere a la combinación de tipos usando operadores como & (intersección) y | (unión) para crear nuevos tipos. */

  // Ejemplo 1: Type Alias para Tipos Primitivos:

  type ID = string | number;

    function obtenerUsuarioPorId(id: ID): void {
        console.log(`Buscando usuario con ID: ${id}`);
    }

    obtenerUsuarioPorId(101); // "Buscando usuario con ID: 101"
    obtenerUsuarioPorId("ABC123"); // "Buscando usuario con ID: ABC123"

    // Ejemplo 2: Type Alias para Objetos:

    type Punto = {
        x: number;
        y: number;
    };
    
    function moverPunto(punto: Punto, dx: number, dy: number): Punto {
        return {
            x: punto.x + dx,
            y: punto.y + dy,
        };
    }
    
    const puntoInicial: Punto = { x: 0, y: 0 };
    const nuevoPunto = moverPunto(puntoInicial, 5, 3);
    
    console.log(nuevoPunto); // { x: 5, y: 3 }

    // Ejemplo 3: Composición de Tipos con Intersección (&):

    type Persona = {
        nombre: string;
        edad: number;
    };
    
    type Empleado = {
        salario: number;
        puesto: string;
    };
    
    type EmpleadoCompleto = Persona & Empleado;
    
    const empleado1: EmpleadoCompleto = {
        nombre: "Ana",
        edad: 30,
        salario: 50000,
        puesto: "Desarrolladora",
    };
    
    console.log(empleado1);
    // { nombre: 'Ana', edad: 30, salario: 50000, puesto: 'Desarrolladora' }


    // Ejemplo 4: Composición de Tipos con Unión (|):

    type NotificacionEmail = {
        tipo: "email";
        destinatario: string; // dirección de correo
        asunto: string;
        mensaje: string;
    };
    
    type NotificacionSMS = {
        tipo: "sms";
        numero: string; // número de teléfono
        mensaje: string;
    };
    
    type Notificacion = NotificacionEmail | NotificacionSMS;
    
    function enviarNotificacion(notificacion: Notificacion): void {
        if (notificacion.tipo === "email") {
            console.log(`Enviando correo a ${notificacion.destinatario}`);
            console.log(`Asunto: ${notificacion.asunto}`);
            console.log(`Mensaje: ${notificacion.mensaje}`);
        } else {
            console.log(`Enviando SMS a ${notificacion.numero}`);
            console.log(`Mensaje: ${notificacion.mensaje}`);
        }
    }
    
    // Crear una notificación de correo electrónico
    const notificacionEmail: NotificacionEmail = {
        tipo: "email",
        destinatario: "usuario@example.com",
        asunto: "Bienvenido!",
        mensaje: "Gracias por registrarte en nuestro sitio.",
    };
    
    // Crear una notificación de SMS
    const notificacionSMS: NotificacionSMS = {
        tipo: "sms",
        numero: "+1234567890",
        mensaje: "Tu código de verificación es 123456.",
    };
    
    // Enviar las notificaciones
    enviarNotificacion(notificacionEmail); // Envía un correo
    enviarNotificacion(notificacionSMS);   // Envía un SMS
    

    

    