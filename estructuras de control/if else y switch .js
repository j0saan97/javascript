// ejemplo de un if con varias clausulas else if y una clausula else que cubre el resto de condiciones

let valor = 10;

if (valor < 5) {
    console.log("El valor es menor que 5");
} else if (valor < 8) {
    console.log("El valor es menor que 8");
} else if (valor < 10) {
    console.log("El valor es menor que 10");
} else if (valor < 15) {
    console.log("El valor es menor que 15");
} else {
    console.log("El valor es mayor o igual a 15");
}

// ejemplo 2 con varias variables:

let saldo = 50;
let efectivo = 100;

if (efectivo < saldo) {
    console.log("Puedes sacar dinero")
} else {
    console.log("Saldo insuficiente")
}

// ej 3: if else + if else

let nota = 2;

if (nota === 5) {
    console.log("Has aprobado");
} else if (nota === 4) {
    console.log("Podrias haberlo echo mejor");
} else if (nota === 3) {
    console.log("insuficiente");
} else if (nota === 2) {
    console.log("tienes que estudiar mucho mas");
} else if (nota === 1) {
    console.log("no has estudiao na");
    // introducimos un else por si introduce una nota que no esté entre 1 y 5
} else {
    console.log("Introduce una nota entre 1 y 5");
}



/* SWITCH CASE (ejemplo anterior) ... No olvidar meter un break en cada instrucción para que no ejecute varias instrucciones seguidas
    - poner un caso por default para que siempre tenga un caso para entrar ( son buenas prácticas)

*/
let notaExamen = 9;

switch (notaExamen) {
    case 1:
        console.log("has sacao un 1");
        break;
    case 2:
        console.log("has sacao un 2");
        break;
    case 3:
        console.log("has sacao un 3");
        break;
    case 4:
        console.log("has sacao un 4");
        break;
    case 5:
        console.log("has sacao un 5");
        break;
    default:
        console.log("tu notas es superior a 5, muy bien");

}

/* ejemplo con meses del año, el programa nos dice cuantos dias tiene el mes que le indiquemos
    Podemos introducir la misma instrucción para varios valores, haciendo el código mas corto y legible
*/

let mes = "febrero"

switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log(mes + " tiene 31 dias")
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log(mes + " tiene 30 dias");
        break;
    // metemos la instruccion default para cubrir todos los sacos restantes
    default:
        console.log(mes + " tiene 28 dias")
}