



/*
let roi = 7;
let frasesi = "su roi es = o mayor que 5 e igual o inferior a 7 ";
let fraseinferior = "su roi es inferior a 5 ";
let frasedefault = "SU ROI ES SUPERIOR A 7";

if (roi < 5) {
    console.log(fraseinferior);
} else if(roi >= 5 && roi <= 7) {
    console.log(frasesi);

} else {
    console.log(frasedefault);
}

*/

// 2 SWITCH CASE
/*
let mes = "marzo";

switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log(mes + " tiene 31 dias");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log(mes + " tiene 30 dias");
        break;
    case "febrero":
        console.log(mes + " tiene 20 dias");
        break;  
}

 
// 3: DUDA 1
// ejemplo agrupando los cases en 1 linea


switch (mes) {
    case "enero" || , "marzo" || "mayo" || "julio" || "agosto" || "octubre" || "diciembre":
        console.log(mes + " tiene 31 días");
        break;
    case "abril" || "junio" || "septiembre" || "noviembre":
        console.log(mes + " tiene 30 días");
        break;
    case "febrero":
        console.log(mes + " tiene 28 o 29 días");
        break;
    default:
        console.log("Mes no válido");
        break;
}





/* 4 do while

let contador = 5;
do {
    console.log("el contador va por " + contador);
    contador++ ;
}  while (contador < 15)
*/



/* 8 Se quiere un bucle que genere una lista con todos los
 números pares positivos por debajo del número tecleado por el usuario

function contandoAtras() {

let numUsuario = 11;
let finCuenta = 0 ;

if ((numUsuario % 2 === 0) && (numUsuario > finCuenta)) {
    while (numUsuario >= finCuenta) {
        console.log(numUsuario);
        numUsuario =  (numUsuario - 2);
    }
}
}
*/

// 9 con do while

/*
let numUsuario = prompt("introduzca numero");

for (numUsuario; numUsuario > 0; numUsuario--){
    if (numUsuario % 2 == 0) {
        console.log(numUsuario + "es par")
    }
}
*/

/* Bucle FOR IN
let alumnos = ["josan", "miki", "miquel", "nene"];

for (i in alumnos) {
    console.log(alumnos[i])
}

console.log(typeof (alumnos));
*/

/*
try {
    let numero = prompt("Introduce un número par:");
    numero = parseInt(numero);

    if (numero % 2 !== 0) {
        throw new Error("El número introducido es impar."); 
    } while (numero % 2 !== 0) {
        let numero = prompt("Introduce un número par:");
    }

    console.log("Número introducido correctamente: " + numero);
} catch (error) {
    console.error("Error: " + error.message);
} finally {
    console.log("Operación completada.");
}

*/

// crear una funcion que pida al usuario:
// -  el num de apuestas que ha echo,
// -  el importe de cada una y
// -  porcentaje de apuestas acertadas y le diga el beneficio o la pérdida

let numApuestas = 40;
let numAcertadas = numApuestas * 0.85 //aqui presuponemos un acierto del 85%
let numFalladas = numApuestas - numAcertadas
let importeApuesta = 30;
let cuotaMedia = 1.6;



let rsdoEstrategia = (numAcertadas * importeApuesta * cuotaMedia) - (numFalladas * importeApuesta)

console.log(rsdoEstrategia);



/*Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. */ 
function suma2(num1, num2) {
    return(num1 + num2);
}

console.log(suma2(6, 3));

// FUNCION QUE DIGA SI EL NUM ES PAR O IMPAR
    // % operador modulo: devuelve el resto de la division
function esPar(num) {
    if (num % 2 === 0) {
        console.log("es par");
    } else {
        console.log("es impar");
    }
}

console.log(esPar(8));

// Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto muLtiplo del segundo argumento.

function esMultiplo(num7 , num8) {
    if (num7 % num8 === 0) {
        console.log(num7 + " es multiplo de " + num8);
    } else {
        console.log(num7 + "  no es multiplo de " + num8)
    }
}

esMultiplo(10, 5);

// Definir una función que cree una cadena de letras repetidas tantas veces como le digamos. La función recibe dos argumentos: la letra y el número de repeticiones.

function crearStrRepeat(a, b) {
    // mientras i sea < al num de repeat
    for (let i = 0; i < b; i++){
        console.log(a);
    }
}

crearStrRepeat("tu", 10);
//si introducimos el 1er parametro sin comillas seria tratado como una variable no definida y nos daria error

// a es la letra o string y b el num de repeat







//maximo comun divisor de 2 num:
function MCD(n1, n2){
    let mcd;
    let resto;
    //verifico que son 2 numeros diferentes a 0
while (n1 != 0 && n2 != 0){
    resto = n1 % n2;
    n1 = n2;
    n2 = resto;
} if(n1==0) mcd = n2;
  if(n2==0) mcd = n1;
  return mcd;
}

console.log(MCD(100, 50));
alert("MCD de " + num1 + " y " + num2 + " es " + MCD(num1, num2));

//calculo rateback en un mes:

function calcularRateback() {
    
}

/* datos que necesito:


1.- cuantos spins jugare hasta el 31?
2.- cuanto me devuelven x cada spin
3.- funcion que calcule spins por rateback 

*/
//z spines jugados en 18 dias
let z = 495;
// x : spines esperados en 13 dias
let spinesJugadosDia = (z / 18);
let spinesEsperadosMes = spinesJugadosDia * 31;
// 
let y = (spinesJugadosDia + z);
let stake = 2;
let rake = (stake * 0.07);
let rakeback = (rake * 0.35);

// millonario nos dice el rateback generado al cabo del mes

console.log(spinesEsperadosMes);
console.log(spinesJugadosDia);
console.log(rakeback);

let rsdo = (spinesEsperadosMes * rakeback);
console.log(rsdo);