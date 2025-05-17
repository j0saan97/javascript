/*podemos definir variables con let o var o const,
 var afecta a todo el codigo y let solo al bloque donde es declarado*/

var variable = "soy una variable var";
for (var i = 0; i < 3; i++) {
    var variable = "soy la 2a variable"
}

console.log(variable);


let variableLet = "soy una variable let";
for (var i = 0; i < 3; i++) {
    let variableLet = "soy la 2a variable let";
    console.log(variableLet);
}

console.log(variableLet);

// Para mostrar el tipo de la variable usamos el operador typeof:

console.log(typeof(variableLet))