/*

Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23

*/

function diferenciaDeDias(fecha1, fecha2){

    // comprobar que ambas fechas tengan un formato correcto:
    fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
    // si es una instancia del objeto date no hagas nada, sino crea una instancia con la fecha dada por el usuario como parametro
    fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);

    // Obtener la diferencia en milisegundos entre las 2 fechas 
    const diferenciaEnMilisegundos = Math.abs(fecha1.getTime() - fecha2.getTime());

    // dividir la diferencia en milisegundos entre el numero de milisegundos que tiene un dia y redondear para sacar los dias
    const dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

    if(isNaN(dias)){
        return "Formato de fecha incorrecto, usa el formato americano";
    }

    return "La diferencia son " + dias + "dias";
}

console.log(diferenciaDeDias("Dec 1, 2023", "Dec 24, 2023"));