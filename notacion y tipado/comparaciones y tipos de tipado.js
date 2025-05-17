/* comparaciones

- 2 signos ==  --> tipado debil, sólo verifica que el valor sea igual --> igualdad débil
- 3 signos === --> verifica que el valor y el tipo sean igual --> igualdad fuerte


*/

if (5 == 5) {
    console.log("5 es igual a 5") // tipado debil
}

if (5 === 5) {
    console.log("5 es muy igual a 5") // tipado fuerte
}

let a = 6;
let b = "6";

if (a == b) {
    console.log("a es igual a b") // solo compara valor -->tipado debil
}

if (a === b) {
    console.log("a es muy igual a b)") // compara valor y tipo de dato -->tipado fuerte
    //no lo muestra xk son de diferente tipo
}

// lo mismo con el operador de desigualdad
if (a != b) {
    console.log("a es diferente a  b- Tipado Debil")
}

if (a !== b) {
    console.log("a es estrictamente diferente a b-Tipado Fuerte ") // mostraría el mensaje puesto que el tipado es fuerte y son de diferente tipo
}


