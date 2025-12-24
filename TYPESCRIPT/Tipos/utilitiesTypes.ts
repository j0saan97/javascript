/*
Partial<T> (Convertir todo en opcional)
Este utilitario toma todas las propiedades de una interfaz y las vuelve opcionales (les añade el signo ?).
Es extremadamente útil para funciones de actualización (Update), donde el usuario solo quiere cambiar uno o dos datos, no todo el objeto.
*/

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad: number;
}

// Queremos actualizar un usuario, pero NO todas las propiedades a la vez
function actualizarUsuario(id: number, cambios: Partial<Usuario>) {
    console.log(`Actualizando el usuario ${id} con los datos:`, cambios);
    // Aquí 'cambios' puede tener nombre, o email, o ambos, o ninguno.
}

// Uso: Solo enviamos el nombre, y TS no se queja
actualizarUsuario(1, { nombre: "Carlos" }); 

// Uso: Solo enviamos la edad
actualizarUsuario(1, { edad: 30 });

/*
Required<T> (Convertir todo en obligatorio)
Es exactamente lo contrario a Partial. Toma una interfaz que tiene propiedades opcionales (?) y las vuelve obligatorias.
 Se usa mucho cuando quieres asegurar que, en cierto punto de tu código, no falte absolutamente ningún dato.
*/

interface ConfiguracionApp {
    tema?: "oscuro" | "claro";
    idioma?: "es" | "en";
    notificaciones?: boolean;
}

// Aunque las propiedades sean opcionales en la interfaz original...
// Queremos una función que necesite que TODO esté definido.
function iniciarApp(config: Required<ConfiguracionApp>) {
    console.log(`Iniciando en ${config.idioma} con tema ${config.tema}`);
}

// ERROR: Falta 'notificaciones' e 'idioma'
// iniciarApp({ tema: "oscuro" }); 

// CORRECTO: Debes pasar todas las propiedades
iniciarApp({
    tema: "claro",
    idioma: "es",
    notificaciones: true
});