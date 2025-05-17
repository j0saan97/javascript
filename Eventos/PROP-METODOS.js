// Propiedades del objeto Event

document.addEventListener('click', function(event) {
    // type: Indica el tipo de evento, como 'click', 'keydown', 'mouseover', etc.
    console.log('Tipo de evento:', event.type); // 'click'

    // target: Hace referencia al elemento que disparó el evento.
    console.log('Elemento objetivo:', event.target); // <elemento que disparó el evento>

    // currentTarget: Hace referencia al elemento en el cual el evento actualmente se está procesando.
    console.log('Elemento actual:', event.currentTarget); // <document>

    // timeStamp: Devuelve la marca de tiempo en milisegundos en la que ocurrió el evento.
    console.log('Marca de tiempo:', event.timeStamp);

    // bubbles: Indica si el evento se propaga hacia los elementos padres (true) o no (false).
    console.log('¿Burbujea?', event.bubbles); // true o false

    // cancelable: Indica si el evento puede ser cancelado (true) o no (false).
    console.log('¿Cancelable?', event.cancelable); // true o false

    // defaultPrevented: Indica si se ha llamado a preventDefault() para evitar la acción predeterminada.
    console.log('¿Acción predeterminada evitada?', event.defaultPrevented); // true o false

    // isTrusted: Indica si el evento fue disparado por el usuario (true) o generado por código (false).
    console.log('¿Evento confiable?', event.isTrusted); // true o false
});

// Métodos del objeto Event

document.getElementById('myButton').addEventListener('click', function(event) {
    // preventDefault(): Cancela la acción predeterminada asociada al evento (si es cancelable).
    event.preventDefault(); // Previene la acción predeterminada del botón

    // stopPropagation(): Detiene la propagación del evento hacia los elementos padres.
    event.stopPropagation(); // Evita que el evento se propague más allá de este elemento

    // stopImmediatePropagation(): Detiene la propagación del evento y evita que otros listeners en el mismo elemento sean ejecutados.
    event.stopImmediatePropagation(); // Detiene la propagación y otros listeners en este elemento

    console.log('Evento manejado y propagación detenida.');
});

// initEvent(): Inicializa el valor del objeto Event.
var event = document.createEvent('Event');
event.initEvent('build', true, true); // Inicializa el evento 'build' que burbujea y es cancelable.
document.dispatchEvent(event); // Dispara el evento
