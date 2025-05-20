function convertirTemperatura(grados, tipoGrado) {
    if (["C", "Celcius", "celsius"].includes(tipoGrado)) {
        // Celsius a Fahrenheit
        let conversion = (grados * 9/5) + 32;
        return `${conversion} grados Fahrenheit`;
    } else if (["F", "fahrenheit", "Fahrenheit"].includes(tipoGrado)) {
        // Fahrenheit a Celsius
        let conversion = (grados - 32) * 5/9;
        return `${conversion} grados Celsius`;
    } else {
        return "Tipo de grado no reconocido. Usa 'C' o 'F'.";
    }
}

console.log(convertirTemperatura(100, "C")); // Debería retornar "212 grados Fahrenheit"
console.log(convertirTemperatura(32, "F")); // Debería retornar "0 grados Celsius"
