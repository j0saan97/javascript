/*
En TypeScript, cuando quieres que una clase siga obligatoriamente la estructura definida por una interface,
 debes utilizar la palabra reservada implements.

Esto funciona como un "contrato": si la clase dice que implementa una interfaz pero olvida un método o una propiedad,
 TypeScript lanzará un error inmediatamente.
*/

interface Dispositivo {
    encendido: boolean;
    encender(): void;
    apagar(): void;
}

// Usamos 'implements' para obligar a la clase a seguir la interfaz
class Televisor implements Dispositivo {
    encendido: boolean = false;

    encender(): void {
        this.encendido = true;
        console.log("La TV está encendida");
    }

    apagar(): void {
        this.encendido = false;
        console.log("La TV está apagada");
    }

    // La clase puede tener sus propios métodos adicionales
    cambiarCanal(canal: number) {
        console.log(`Cambiando al canal ${canal}`);
    }
}