// https://regexr.com
// http://estilow3b.com/ejemplos-comunes-de-expresiones-regulares-javascript/

// algunas expresiones en mayuscula, siginifican lo contrario que en minuscula. Ej /d y /D

/* El modificador \b en una expresión regular se utiliza para hacer coincidir un límite de palabra. Un límite de palabra se define como el punto donde un carácter de
 palabra (letra, número o guión bajo) se encuentra adyacente a un carácter que no es de palabra (como un espacio en blanco, una puntuación o un símbolo).\b
Cuando se utiliza en una expresión regular, coincide con una posición en la cadena donde se produce un cambio entre un carácter de palabra y un carácter que no es
 de palabra. Esto puede ser útil para buscar palabras completas o para delimitar partes específicas de una cadena
*/

let texto_largo = "Tito no es un mono cualquiera. a Tito no le gusta trepar por los arboles y odia comer platanos.tito prefiere pasear por el bosque, oler las flores y recoger las niueces que se caen de los arboles"

// para buscar una cadena de texto en una expresion regular, usamos el metodo match:

console.log(texto_largo.match(/los/g));

// para añadir 2 modificadores en una única búsqueda simplemente ponemos uno al lado del otro (/gi)
console.log(texto_largo.match(/Tito/gi));


let dni_josan = "20086752a";
// la siguiente constante verifica el numero de dni
const dni_reg_exp = /^\d{8}[A-Z]$/i;

if (dni_reg_exp.test(dni_josan)) {
    console.log("EL NUMERO DE DNI ES VALIDO"); //muestra el msj
} else {
    console.log("el numero de dni no es valido");
}

// busca una palabra que no contenga la letra "e" o "E" en la const dada:

const aliceExcerpt = 'The Caterpillar and Alice looked at each other';
const regexpWithoutE = /\b[a-df-z]+\b/gi;
console.log(aliceExcerpt.match(regexpWithoutE));

// caracteres negado o complementario: se usa para buscar cualquier cosa que no esé encerrada entre corchetes:

//const reg_exp2 = /[^xyz]/g;
const abecedario = 'abcdefghijklmnopqrstuvwxyz';

//para buscar cualquier trozo de cadena: /[xyz]/g --> metemos entre corchetes la cadena a buscar
const reg_exp3 = /[abc]/g;

//para buscar cualquier trozo de cadena: /[xyz]/g --> metemos entre corchetes la cadena a buscar
console.log(abecedario.match(reg_exp3));

// Ej 1: Muestra todas las letras del abecedario menos las letras : "x, y, z"
const reg_exp2 = /[a-wA-W]/g;
console.log(abecedario.match(reg_exp2));




// Ejemplos mas comunes:

// Solo Números
let ExpRegSoloNumeros="^[0-9]+$";
 
let NumeroValido="12346789";//Cadena Texto de Solo Números Valida
let NumeroInvalido="2346789D";//Cadena Texto de Solo Números Invalida
 
//Evaluación de Cadena Valida de Solo Números 
if(NumeroValido.match(ExpRegSoloNumeros)!=null)
    console.log("Numero Valido"); //muestra valido
 
//Evaluación de Cadena Invalida de Solo Números     
if(NumeroInvalido.match(ExpRegSoloNumeros)==null)
    console.log("Numero Invalido"); // muestra invalido

// Solo letras:
const reg_exp4 = /^[a-zA-Zá-úÁ-Ú]+$/;
 
let SoloLetrasValido="ABCDáéíó";//Cadena de Solo Letras Valida
let SoloLetrasInvalido = " ABCDáé8íó";//Cadena de Solo Letras Invalida
let cadenaConNumero = "abakfvba6adb";
 
//Evaluación de Cadena Valida de Solo Letras 
if(SoloLetrasValido.match(reg_exp4)!=null)
    console.log("Letras Válidas");
 
//Evaluación de Cadenas Invalidas de Solo Letras     
if (SoloLetrasInvalido.match(reg_exp4) == null)
    console.log("Letras Invalida");

if (cadenaConNumero.match(reg_exp4) == null)
    console.log("Letras Invalida");

// Validacion numeros enteros :

const ExpRegNumEntero= /^-?\d+$/;
 
let NumEnteroValido = "-10";//Cadena de Número Entero

 
//Evaluación de Cadena Valida de Número Entero
if (NumEnteroValido.match(ExpRegNumEntero)) {
    console.log("Número Entero Válido");
} else {
    console.log("introduzca un numero entero sin decimales")
}
//nota: usar comillas para los numeros para que java script los interprete bien en la expresion regular
 


// VALIDACION FECHA: FORMATO dd/mm/yyyy: Esta expresión regular valida la fecha de formato dd/mm/yyyy incluyendo los meses bisiestos.
const chekData = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/

let fechaEjemplo = "23/05/1997";
let fechaEjemplo2 = "1997/12/12";

if (chekData.test(fechaEjemplo2)) {
    console.log("fecha valida");
} else {
    console.log("fecha invalida");
}



//Expresión Regular Horario en formato 12 hrs.
let ExpRegHora12Hrs = /((1[0-2]|0?[1-2]):([0-5][0-9]) ?([AaPp][Mm]))/;


let Hora12HrsValida="12:00 PM";//Cadena de Horario 12 hrs.
let Hora12Hrsinvalida="13:00 PM";//Cadena de Horario 12 hrs.
 
//Evaluación de Cadena Valida de Horario 12 hrs.
if (Hora12HrsValida.match(ExpRegHora12Hrs) != null) {
    console.log("Horario 12 hrs. Válida");
} else {
    console.log(" formato horario invalido")
}
    
/* validacion contraseña fuerte: Esta expresión regular valida una
 contraseña fuerte que debe tener una letra minúscula, una letra mayúscula,
  un número, un carácter especial y mínimo 8 dígitos*/

const strongPassword = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

var PassFuerteValida="wMH432595@";
var PassFuerteinvalida="wMHdd5@";
 
//Evaluación de Cadena Valida de Contraseña Fuerte:
if(PassFuerteinvalida.match(strongPassword)!=null){
    console.log("Contraseña Fuerte Válida");
} else {
    console.log("Contraseña débil");
    }

// validacion ip:
const checkIP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;