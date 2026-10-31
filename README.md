# TaskManager — Actividad Integradora 2

# 📝 TaskManager App — Gestor de Tareas Offline

![JavaScript Vanilla](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E56027?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---

Este repositorio contiene la entrega oficial de la **Actividad Integradora 2** de la asignatura **Programación de Sistemas Web** en la **Universidad ECOTEC**.

El proyecto consiste en el desarrollo de una aplicación web interactiva de gestión de tareas (**TaskManager**) construida en **JavaScript Vanilla (ES6+)**, incorporando maquetación responsiva en CSS3, persistencia local con `localStorage`, consumo asíncrono de APIs REST y arquitectura modular.

---

## 🛠️ Funcionalidades Obligatorias Desarrolladas

1. **Gestión CRUD Completa:**
   * Crear, completar (toggle), eliminar y listar tareas de manera dinámica.
   * Validación estricta en JavaScript para evitar el registro de campos vacíos.

2. **Dashboard de Métricas en Tiempo Real:**
   * Cálculo automático del total de tareas, tareas pendientes y completadas con actualización reactiva tras cualquier modificación en el DOM.

3. **Filtros y Búsqueda Dinámica:**
   * Búsqueda en tiempo real por título utilizando `includes()` y `toLowerCase()`.
   * Filtrado por estado: *Todas*, *Pendientes* y *Completadas*.

4. **Ordenamiento Personalizado:**
   * Ordenamiento dinámico de tareas por **Fecha de creación** o por **Nivel de Prioridad** (*Alta*, *Media*, *Baja*) implementado mediante `.sort()`.

5. **Consumo de API REST y Persistencia Local:**
   * Carga inicial asíncrona (`async/await` + `fetch`) conectada a la API de pruebas **JSONPlaceholder** (`/todos`).
   * Almacenamiento en `localStorage` con `JSON.stringify()` y `JSON.parse()` para permitir funcionamiento *offline*.
   * Manejo robusto de errores mediante `try/catch` con notificación visual flotante en pantalla.

---

## 🏗️ Arquitectura Modular (ES6 Modules)

El proyecto adopta la **Opción A** del componente de investigación técnica, organizando el código mediante módulos nativos de JavaScript (`import` / `export`):

TaskManager/
├── index.html          # Estructura semántica de la aplicación
├── css/
│   └── styles.css      # Variables CSS, maquetación Card UI y Media Queries
├── js/
│   ├── app.js          # Punto de entrada principal y coordinación de eventos
│   ├── api.js          # Módulo asíncrono de integración con JSONPlaceholder
│   ├── storage.js      # Módulo encargardo de la persistencia en localStorage
│   └── ui.js           # Módulo para manipulación del DOM, badges y métricas
├── AI_DECLARATION.md   # Declaración transparente y transparente del uso de IA
└── README.md           # Documentación oficial del proyecto

---

## 🎨 Diseño e Interfaz (UI/UX)

* **Maquetación Responsiva:** Adaptación fluida mediante Flexbox y CSS Grid para pantallas de escritorio y dispositivos móviles (`@media (max-width: 600px)`).
* **Badges de Prioridad:** Píldoras visuales con código de color distintivo para prioridades:
  * **Alta:** Rojo (`#fee2e2` / `#dc2626`)
  * **Media:** Naranja (`#ffedd5` / `#ea580c`)
  * **Baja:** Verde (`#dcfce7` / `#16a34a`)
* **Microinteracciones:** Transiciones suavizadas al interactuar con las tarjetas (`hover`) y opacidad atenuada al marcar tareas como completadas.

---

## 🚀 Instalación y Ejecución Local

1. Clonar el repositorio académico:

   git clone https://github.com/DRomero002/Actividad-Integradora-2.git

2. Acceder al directorio del proyecto:
   
   cd Actividad-Integradora-2
   
3. Abrir el archivo `index.html` en tu navegador o utilizando la extensión **Live Server** de VS Code.

---

## 📝 Declaración del Uso de Inteligencia Artificial

De acuerdo con las normativas académicas de autoría, se ha incluido en la raíz del repositorio el archivo **`AI_DECLARATION.md`**