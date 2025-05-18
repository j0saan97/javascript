// Definimos el objeto calculadora
const calculadora = {
  version: "2.1",
  operaciones: {
    sumar:   (a, b) => a + b,
    restar:  (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
      if (b === 0) throw new Error("No se puede dividir por cero");
      return a / b;
    }
  },
  config: {
    precision: 3,
    modo: "científico"
  }
};

// ── Desestructuración básica ────────────────────────────────────────────────
// Extraemos version, operaciones y config
const { version, operaciones, config } = calculadora;
console.log(version);           // "2.1" --> ahora es un objeto por si soo, y podemos operar con el
console.log(config.modo);       // "científico"

// ── Desestructuración anidada ───────────────────────────────────────────────
// Extraemos directamente cada función de operaciones y precision de config
const {
  operaciones: { sumar, restar, multiplicar, dividir },
  config: { precision = 2 }     // valor por defecto si no existiera
} = calculadora;

// Ahora podemos usar las operaciones “sueltas”:
console.log("Suma:", sumar(5, 7));                             // 12
console.log("Resta:", restar(10, 4));                          // 6
console.log(
  "División con precisión:",
  dividir(22, 7).toFixed(precision)                            // formatea a 3 decimales
);

// ── Desestructuración en parámetros de función ─────────────────────────────
// Creamos una función que recibe toda la calculadora y extrae sólo lo que necesita
function reporte({ version, operaciones: { sumar, dividir }, config: { modo } }) {
  console.log(`Calculadora v${version} [modo: ${modo}]`);
  console.log("Ejemplos:", sumar(2,3), dividir(9,3));
}

reporte(calculadora);
