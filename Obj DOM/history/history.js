// history metodos

/*
El objeto history en JavaScript tiene varios métodos que se utilizan para interactuar con el historial de navegación del navegador. A continuación, te menciono los 10 métodos más usados del objeto history:

1. history.back()
Navega a la página anterior en el historial, equivalente a hacer clic en el botón "Atrás" del navegador.
Ejemplo: history.back();

2. history.forward()
Navega a la página siguiente en el historial, equivalente a hacer clic en el botón "Adelante" del navegador.
Ejemplo: history.forward();

3. history.go()
Navega a una página específica en el historial, basado en el índice. Puedes usar valores positivos para avanzar y negativos para retroceder.
Ejemplo: history.go(-2); (va dos páginas hacia atrás).

4. history.pushState()
Añade un nuevo estado al historial del navegador sin recargar la página. Esto también cambia la URL en la barra de direcciones.
Ejemplo: history.pushState({ page: 1 }, "title 1", "?page=1");

5. history.replaceState()
Reemplaza el estado actual en el historial con un nuevo estado, sin crear una nueva entrada en el historial.
Ejemplo: history.replaceState({ page: 2 }, "title 2", "?page=2");

6. history.length
Propiedad que devuelve el número de entradas en el historial para la pestaña o ventana actual.
Ejemplo: console.log(history.length);

7. history.state
Propiedad que devuelve el estado actual del historial, el cual fue añadido por pushState() o replaceState().
Ejemplo: console.log(history.state);

8. history.scrollRestoration
Propiedad que controla si el navegador debe restaurar la posición de desplazamiento cuando el usuario navega hacia atrás o adelante.
Valores: "auto" (restauración automática) o "manual" (sin restauración).
Ejemplo: history.scrollRestoration = "manual";

9. history.push() (obsoleto)
Método heredado de versiones antiguas y es sinónimo de history.go(). Es poco usado y en su lugar se utiliza go() directamente.
Ejemplo: history.push(-1); (equivalente a history.go(-1);).

10. history.replace() (obsoleto)
Similar a replaceState() pero es parte de un uso anterior y menos recomendado.
Ejemplo: history.replace(2); (equivalente a history.go(2);).
Nota: Los métodos push() y replace() son considerados obsoletos y no se usan en las prácticas modernas. Se mantienen por compatibilidad con versiones muy antiguas de navegadores, pero se recomienda el uso de los métodos modernos (pushState, replaceState, go, etc.).

Los métodos y propiedades modernos, como pushState, replaceState, y scrollRestoration, son muy poderosos para manejar la navegación sin recargar la página y mejorar la experiencia del usuario en aplicaciones web modernas.










*/