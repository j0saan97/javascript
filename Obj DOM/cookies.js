// Crear una cookie con nombre "username" y valor "JohnDoe" que expira en 7 días
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Ejemplo
setCookie("username", "JohnDoe", 7);

// leer una cookie:

// Leer una cookie por su nombre
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Ejemplo
const username = getCookie("username");
if (username) {
    console.log("Username: " + username);
} else {
    console.log("No cookie found");
}


// eliminar una cookie:

    // Eliminar una cookie configurando su fecha de expiración en el pasado
    function deleteCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }

    // Ejemplo
    deleteCookie("username");

    /* Usando una biblioteca para manipular cookies (js-cookie) 
    Instalar js-cookie: npm install js-cookie
    O puedes incluirlo directamente en tu HTML con un <script> :<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js"></script>

*/

// Crear una cookie:

// Crear una cookie con nombre "username" y valor "JohnDoe" que expira en 7 días
Cookies.set('username', 'JohnDoe', { expires: 7 });

// Leer la cookie "username"
const username = Cookies.get('username');
console.log(username); // "JohnDoe"

// Eliminar la cookie "username"
Cookies.remove('username');
