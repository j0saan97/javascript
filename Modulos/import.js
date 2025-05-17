/* El uso de import permite incluir las funcionalidades exportadas desde otros módulos.

Tipos de importaciones
Importación nombrada: Se usa para importar elementos específicos de un módulo. Los nombres deben coincidir con los nombres exportados. */

    // archivo: main.js
    import { pi, sumar } from './math.js';

    console.log(pi); // 3.1416
    console.log(sumar(2, 3)); // 5

// Importación por defecto: Se usa para importar el valor exportado por defecto. Se puede usar cualquier nombre para la importación.

    // archivo: main.js
    import mensaje from './mensaje.js';

    mensaje(); // "Hola, mundo!"

// Importación con alias: Puedes renombrar una importación usando la palabra clave as:

    // archivo: main.js
    import { sumar as add } from './math.js';

    console.log(add(2, 3)); // 5

// Importación de todo el módulo: Importa todas las exportaciones de un módulo bajo un único nombre.

    // archivo: main.js
    import * as MathUtils from './math.js';

    console.log(MathUtils.pi); // 3.1416
    console.log(MathUtils.sumar(2, 3)); // 5

/*
! cuando queramos importar un archivo que está en la misma carpeta donde estamso trabajando la sintaxis será: import{ nombreFuncionQueImportamos} from "./nombreArchivoDesdeDondeLaImportamos"

*/

import {multiplicar, dividir} from "./export.js"

console.log(multiplicar(2, 7));