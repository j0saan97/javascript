
## 🔁 Conversión de tipos en JavaScript

JavaScript es un lenguaje **dinámico y débilmente tipado**, lo que significa que **los valores pueden cambiar de tipo automáticamente** según el contexto. Esto se conoce como **conversión de tipos (type coercion)**, y puede ser:

---

### ✅ 1. **Conversión implícita (coerción implícita)**

* **La realiza automáticamente el motor de JavaScript** cuando se necesita un tipo específico en una operación.
* El lenguaje intenta **adaptar los valores** al tipo necesario para la operación sin que tú lo indiques directamente.

#### Ejemplo:

```js
"5" + 1 // "51" → convierte 1 a string
"5" - 1 // 4    → convierte "5" a número
```

> Se produce en operaciones como `+`, `-`, comparaciones (`==`), y otros contextos donde se espera un tipo determinado.

---

### ✅ 2. **Conversión explícita**

* **La haces tú directamente en el código**, usando funciones o métodos para cambiar el tipo de un valor de forma controlada.
* Usas funciones como: `Number()`, `String()`, `Boolean()`, `parseInt()`, `parseFloat()`, etc.

#### Ejemplo:

```js
let num = Number("42"); // convierte string a número
let str = String(100);  // convierte número a string
```

> Es recomendable usar conversión explícita cuando necesitas controlar bien el tipo de datos y evitar errores inesperados.

---

### 🎯 Diferencia clave

| Característica   | Conversión Implícita                      | Conversión Explícita                     |
| ---------------- | ----------------------------------------- | ---------------------------------------- |
| Quién la realiza | El motor de JS automáticamente            | El desarrollador intencionalmente        |
| Cuándo ocurre    | En operaciones/contextos que lo requieren | Cuando tú llamas funciones de conversión |
| Control          | Menos control, más propensa a errores     | Más controlada y predecible              |
| Ejemplo          | `"5" + 1 → "51"`                          | `Number("5") + 1 → 6`                    |

---

¿Quieres un resumen visual o un cuadro comparativo con más ejemplos?
