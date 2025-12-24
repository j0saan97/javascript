interface ProcesadorPago {
    monto: number;
    procesar(): void;
}

interface Notificador {
    enviarRecibo(email: string): void;
}

// La clase 'PagoTarjeta' CUMPLE ambos contratos
class PagoTarjeta implements ProcesadorPago, Notificador {
    monto: number;
    private numeroTarjeta: string;

    constructor(monto: number, tarjeta: string) {
        this.monto = monto;
        this.numeroTarjeta = tarjeta;
    }

    // Implementación obligatoria de ProcesadorPago
    procesar(): void {
        console.log(`Validando tarjeta ${this.numeroTarjeta}...`);
        console.log(`Pago de $${this.monto} procesado con éxito.`);
    }

    // Implementación obligatoria de Notificador
    enviarRecibo(email: string): void {
        console.log(`Enviando recibo de tarjeta a: ${email}`);
    }
}

// Otra clase que solo cumple un contrato
class PagoEfectivo implements ProcesadorPago {
    monto: number;

    constructor(monto: number) {
        this.monto = monto;
    }

    procesar(): void {
        console.log(`Generando código de barras para pago de $${this.monto} en tienda.`);
    }
    // Esta clase NO necesita enviarRecibo porque no implementa 'Notificador'
}

// --- USO DEL SISTEMA ---

const miPago = new PagoTarjeta(150, "4540-1234-5678");
miPago.procesar();
miPago.enviarRecibo("cliente@email.com");