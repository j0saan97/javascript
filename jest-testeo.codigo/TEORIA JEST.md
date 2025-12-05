# 🧪 Resumen Esencial de Jest para Desarrolladores Junior

---

## 🔑 I. Términos Clave y Sintaxis Básica de Jest

Estos son los pilares que usarás en cada archivo de pruebas:

### Funciones Globales

| Término | Propósito | Ejemplo Básico |
| :--- | :--- | :--- |
| **`test()`** (o **`it()`**) | Define un caso de prueba **individual**. Es la unidad de validación. | `test('debe sumar 1 + 1', ...)` |
| **`describe()`** | **Agrupa** tests relacionados bajo un bloque temático (Tests Compuestos). | `describe('Pruebas de la Calculadora', ...)` |
| **`expect(value)`** | Inicia una **aserción**. Envuelve el valor real que resulta de la ejecución del código. | `expect(suma(1, 1))` |
| **`Matcher`** | Métodos que se encadenan a `expect()` para comparar el valor real con el esperado. | `.toBe(2)`, `.toEqual({ a: 1 })` |

### Matchers Esenciales (Comparadores)

| Matcher | Uso | Propósito |
| :--- | :--- | :--- |
| **`.toBe(value)`** | Valores Primitivos (números, strings). | Comprueba la **igualdad estricta** (`===`). |
| **`.toEqual(obj)`** | Objetos y Arrays. | Comprueba la **igualdad profunda** (compara contenido). |
| **`.toThrow(error)`** | Manejo de Errores. | Verifica que una función lanza un error esperado. |
| **`.toBeNull()`** | Valores nulos. | Verifica que el valor es exactamente `null`. |
| **`.toBeUndefined()`** | Valores no definidos. | Verifica que el valor es exactamente `undefined`. |
| **`.toBeTruthy()`** | Valores *Truthy*. | Verifica que el valor es verdadero en un contexto booleano (ej. `1`, un string no vacío). |
| **`.toBeFalsy()`** | Valores *Falsy*. | Verifica que el valor es falso en un contexto booleano (ej. `0`, `""`, `null`, `undefined`). |

### Hooks (Ganchos de Ciclo de Vida)

| Hook | Ejecución | Propósito |
| :--- | :--- | :--- |
| **`beforeAll()`** | Una vez, antes de **todos** los tests. | Configurar recursos costosos (ej. iniciar un servidor simulado). |
| **`beforeEach()`** | Antes de **cada** test individual. | Restablecer variables o datos de prueba para asegurar la independencia. |

---

## 🛠️ II. Tipos de Pruebas a Dominar por un Junior

Como Junior, debes enfocarte en estos dos tipos de pruebas:

### 1. Pruebas Unitarias (Unit Tests)

* **Objetivo:** Probar la **unidad** más pequeña de código aislada (generalmente una función).
* **Dominio Clave:** Debes saber cómo testear todas las rutas de ejecución de una función:
    * **Casos Felices (Happy Paths):** Entradas válidas para el resultado esperado.
    * **Casos de Borde (Edge Cases):** Valores mínimos (0), máximos, negativos o valores límite.
    * **Casos de Error:** Usar `.toThrow()` para verificar que la función lanza errores ante datos inválidos.

### 2. Pruebas de Integración (Integration Tests)

* **Objetivo:** Verificar que dos o más módulos de código trabajan **juntos** correctamente.
* **Dominio Clave:** Aprender a usar **Mocks y Spies** (`jest.fn()`, `jest.mock()`) para simular dependencias externas (llamadas a API, bases de datos) y aislar el código que realmente estás probando.