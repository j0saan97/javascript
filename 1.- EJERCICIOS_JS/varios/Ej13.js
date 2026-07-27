/*

! Crea una funcion que calcule el area de un cuadrado, un rectangulo o un triangulo
 
Ejemplos:
calcularAreaPoligono({ tipo: 'triangulo', base: 6, altura: 9 }); 
 
Devuelve: 27

*/

function calcularAreaPoligono(poligono) {
    let rsdo = 0;

    if (poligono.tipo === "cuadrado" && poligono.lado >= 1) {
        rsdo = poligono.lado * poligono.lado;

    } else if (poligono.tipo === "rectangulo" && poligono.base >= 1 && poligono.altura >= 1) {
        rsdo = poligono.base * poligono.altura;

    } else if (poligono.tipo === "triangulo" && poligono.base >= 1 && poligono.altura >= 1) {
        rsdo = (poligono.base * poligono.altura) / 2;
    }

    console.log(poligono.tipo, " : ", rsdo);
    return rsdo;
}

console.log(calcularAreaPoligono({tipo: "triangulo", base: 6, altura: 9 }));
console.log(calcularAreaPoligono({tipo: "cuadrado", lado: 6 }));
console.log(calcularAreaPoligono({tipo: "rectangulo", base: 6, altura: 9 }));
