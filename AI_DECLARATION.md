# Declaración del Uso de Inteligencia Artificial (IA)

## 1. Herramientas de IA Utilizadas y Puntos de Asistencia

Durante el desarrollo de la **Actividad Integradora 2**, se utilizó la asistencia puntual de **Gemini AI** como herramienta de consulta técnica y maquetación inicial en dos aspectos específicos:

1. **Maquetación de la Estructura del Proyecto y Documentación ES6:**
   * Orientación visual para la distribución del árbol de carpetas y archivos en la raíz del proyecto (`index.html`, carpeta `css/` con `styles.css` y carpeta `js/` para los módulos).
   * Búsqueda y consulta rápida de documentación técnica sobre el uso estándar de **Módulos ES6** (`import` / `export`).

2. **Diseño de Píldoras de Prioridad y Conexión en `js/ui.js`:**
   * Asistencia en el diseño visual CSS de los badges o píldoras para representar los niveles de prioridad (**Alta: rojo**, **Media: naranja**, **Baja: verde**).
   * Guía para la vinculación dinámica de estas clases dentro del módulo de interfaz gráfica `js/ui.js` al momento de renderizar las tareas en el DOM.

---

## 2. Prompts (Instrucciones) Clave Utilizadas

### Prompt 1: Estructuración del árbol de proyecto y referencia ES6
> *"¿Cómo se debe maquetar visualmente el árbol de carpetas y archivos para un proyecto modular web que utilice Módulos ES6 nativos, separando la interfaz, el almacenamiento y la API?"*

### Prompt 2: Creación de badges de prioridad y vinculación con JS
> *"¿Cómo puedo estructurar en CSS las píldoras (badges) de prioridad con los colores rojo (Alta), naranja (Media) y verde (Baja), y cuál es la forma de inyectar dinámicamente esas clases dentro del archivo de renderizado JS (`js/ui.js`)?"*

---

## 3. Ajustes Manuales Realizados

El desarrollo de la lógica de negocio, manejo de eventos, persistencia en `localStorage` y consumo asíncrono de la API REST fue realizado por el estudiante. Los ajustes manuales sobre las sugerencias puntuales de la IA incluyeron:

* **Personalización CSS:** Selección fina de tonalidades de color (`background-color`, `border` y `color`) para asegurar un contraste accesible en las píldoras de prioridad.
* **Integración en el DOM:** Adaptación de las cadenas de plantilla (*template literals*) en `js/ui.js` para integrar las etiquetas `<span class="badge-priority badge-${task.priority}">` según las propiedades específicas del objeto de datos.