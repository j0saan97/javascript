/* -LISTAS O ARRAYS
   -OBJETOS
   -FECHAS*/

// LISTAS:
const lista = [1, "hola", true, undefined, null];
const lista2 = [2, "hola", true, undefined, null];

console.log(lista);
console.log(lista2);

// podemos crear una lista vacia con tantos espacios como queramos para luego añadirle elementos

const lista3 = new Array(3);
lista3[0] = "soy el primer elemento";
lista3[2] = "soy el ultimo elemento";

console.log(lista3[0])
console.log(lista3[2])
console.log(lista3)




//OBJETOS:

// DEFINIMOS UN OBJETO CON LLAVES:
const movil = {
    altura: 10,
    anchura: 5,
    marca: "xiaomi",
    contactos: ["gorka", "juan", "irene"],
    //podemos crear un objeto dentro de otro objeto
    tarjeta: {
        marca: "sandisk",
        almacenamiento: 32,
    }
}
//comprobamos que hemos creadi bien el objeto tarjeta comprobando su tipo
console.log(typeof (movil.tarjeta))

// si volvemos a asignarle un valor a una propiedad de un objeto ya creado se sobrescribirá, almacenando el nuevo valor:

movil.marca = "samsung";
console.log(movil.marca);

// FECHAS

// Para obtener la fecha actual, usaremos el metodo new Date.
// Nos da la fecha actual en formato mes/num dia/año   hora/min/seg  
const ahora = new Date();
console.log(ahora);

/* Diferentes formas de instanciar el objeto fecha: 
     - Paso de instancia entre comillas (solo obligatorio el año)
 "YYYY-MM-DD",  ES DECIR... AÑO-MES-DIA */
const bodaJuan = new Date("2008-02-20");
console.log(bodaJuan);

// se puede hacer con barras, siendo obligatorios todos los parámetros aquí
const atentado11S = new Date("2001/09/11");
console.log(atentado11S);

// añadiendo las horas minutos y segundos (mismo formato que el anterior):
const horaPartido = new Date("2023/10/19 12:15:00");
console.log(horaPartido);

// Métodos usados del objeto DATE:

// - getTime() ,  - getFullYear() , getMonth(), getDate() , getDay() : nos devuelven el parámetro seleccionado como numero entero

console.log(horaPartido.getFullYear());
console.log(horaPartido.getMonth());
console.log(horaPartido.getDay());

// - getHours() , getMinutes() , getMiliSeconds():
console.log(horaPartido.getHours());
console.log(horaPartido.getMinutes());
console.log(horaPartido.getMilliseconds());

// Para MODIFICAR VALORES DE FECHAS:
// setDate(dia) , setMonth(mes, dia) , setFullYear(año, mes ,dia)
const inicioMundialLol = new Date("2023/10/08 13:15:00")
inicioMundialLol.setDate(5);
console.log(inicioMundialLol);


// comparación de fechas :

