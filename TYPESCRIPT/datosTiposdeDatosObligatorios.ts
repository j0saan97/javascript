// ej 1
function listarFrutas(frutas: string[] = ["manzana", "banana", "naranja"]): void {
  frutas.forEach(fruta => console.log(`- ${fruta}`));
}

// Uso:
listarFrutas(["pera", "melón"]); // ✅
listarFrutas();                   // ✅

// ej 2

function procesarNumeros(numeros: Set<number>): void {
  numeros.forEach(num => console.log(num * 2));
}

// Uso:
procesarNumeros(new Set([1, 2, 3])); // ✅

// ej 3

function mostrarPermisos(permisos: Map<string, boolean>): void {
  permisos.forEach((valor, clave) => {
    console.log(`${clave}: ${valor ? "permitido" : "denegado"}`);
  });
}

// Uso:
const permisos = new Map<string, boolean>([
  ["editar", true],
  ["borrar", false]
]);

mostrarPermisos(permisos); // ✅

// ej 4

type Usuario = {
  nombre: string;
  edad: number;
};

function imprimirUsuario(usuario: Usuario): void {
  console.log(`${usuario.nombre} tiene ${usuario.edad} años`);
}

// Uso:
imprimirUsuario({ nombre: "Ana", edad: 30 }); // ✅


