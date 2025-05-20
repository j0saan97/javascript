/*
Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los proximos 30 años
 
! cada 4 años hay un año bisiesto y se añade el 29 de febrero

Ejemplo:
bisiestos(2023);
 
 Salida:
    2024
    2028
    2032
    2036
    2040
    2044
    2048
    2052
*/

function bisiestos(anio){

    // tener variable con límite de años
    const limite = 50;
    // bucle que se ejecute tantas veces como años limite tengamos
    for(let i = 0; i < limite; i++){
    // compruebo si el dia 29 de febrero existe en el año actual
    const fecha = new Date(anio, 1, 29).getMonth();
   
    // comprobamos si es igual a 1 porque en JS el mes 0 seria enero, entonces febrero seria el 1
    if(fecha ===1){
        console.log(anio);
    }

    anio++;
    // si si existe, mostrar año visiesto
    }

}

bisiestos(2029);