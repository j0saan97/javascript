function sonCompatibles(lenguaje1, lenguaje2) {
    // Definir dos arrays con lenguajes frontend y backend
    const frontend = ["HTML", "HTML5", "XHTML", "CSS", "CSS3", "JAVASCRIPT"];
    const backend = ["PHP", "PYTHON", "RUBY", "NODE", "C#", "RUST", "PERL", "GO"];

    // Comprobar si un lenguaje es frontend y el otro backend
    if (
        (frontend.includes(lenguaje1.toUpperCase()) && backend.includes(lenguaje2.toUpperCase())) ||
        (backend.includes(lenguaje1.toUpperCase()) && frontend.includes(lenguaje2.toUpperCase()))
    ) {
        // Si son compatibles, devolver true
        return true;
    } else {
        // Si no son compatibles, devolver false
        return false;
    }
}

// Ejemplo de uso
console.log(sonCompatibles('JavaScript', 'Node'));  // Devuelve: true
console.log(sonCompatibles('HTML', 'PHP'));         // Devuelve: true
console.log(sonCompatibles('CSS', 'JavaScript'));   // Devuelve: false
