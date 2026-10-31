import { fetchInitialTasks } from './api.js';
import { getTasksFromStorage, saveTasksToStorage } from './storage.js';
import { renderTasks, updateMetrics, showNotification } from './ui.js';

// Estado global de tareas
let tasks = [];

// Elementos del DOM
const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskPriorityInput = document.getElementById('task-priority');
const searchInput = document.getElementById('search-input');
const filterStatusSelect = document.getElementById('filter-status');
const sortBySelect = document.getElementById('sort-by');
const taskListEl = document.getElementById('task-list');

/* Carga inicial de datos desde LocalStorage o la API REST */
const initApp = async () => {
    tasks = getTasksFromStorage();

    if (tasks.length === 0) {
        try {
            tasks = await fetchInitialTasks();
            saveTasksToStorage(tasks);
        } catch (error) {
            showNotification('⚠️ No se pudo conectar a la API. Trabajando en modo offline.');
            tasks = [];
        }
    }

    applyFiltersAndRender();
};

/* Procesa filtros de búsqueda, estado y ordenamiento antes de renderizar */
const applyFiltersAndRender = () => {
    let filteredTasks = [...tasks];

    // 1. Búsqueda por título
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        filteredTasks = filteredTasks.filter(task => 
            task.title.toLowerCase().includes(searchTerm)
        );
    }

    // 2. Filtro por Estado
    const statusFilter = filterStatusSelect.value;
    if (statusFilter === 'pending') {
        filteredTasks = filteredTasks.filter(task => !task.completed);
    } else if (statusFilter === 'completed') {
        filteredTasks = filteredTasks.filter(task => task.completed);
    }

    // 3. Ordenamiento
    const sortBy = sortBySelect.value;
    if (sortBy === 'priority') {
        const priorityWeight = { 'Alta': 3, 'Media': 2, 'Baja': 1 };
        filteredTasks.sort((a, b) => priorityWeight[b.priority] - priorityWeight[a.priority]);
    } else {
        filteredTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    renderTasks(filteredTasks);
    updateMetrics(tasks);
};

// --- Eventos ---

// Crear Tarea
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = taskTitleInput.value.trim();
    const priority = taskPriorityInput.value;

    if (!title) {
        showNotification('El título de la tarea no puede estar vacío.');
        return;
    }

    const newTask = {
        id: String(Date.now()),
        title,
        completed: false,
        priority,
        createdAt: new Date().toISOString()
    };

    tasks.unshift(newTask);
    saveTasksToStorage(tasks);
    applyFiltersAndRender();

    taskTitleInput.value = '';
});

// Delegación de eventos para Eliminar y Toggle Completar
taskListEl.addEventListener('click', (e) => {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;
    const taskId = taskItem.dataset.id;

    if (e.target.classList.contains('btn-delete')) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasksToStorage(tasks);
        applyFiltersAndRender();
    } else if (e.target.classList.contains('toggle-complete')) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = e.target.checked;
            saveTasksToStorage(tasks);
            applyFiltersAndRender();
        }
    }
});

// Eventos de Búsqueda y Filtros en tiempo real
searchInput.addEventListener('input', applyFiltersAndRender);
filterStatusSelect.addEventListener('change', applyFiltersAndRender);
sortBySelect.addEventListener('change', applyFiltersAndRender);

// Inicializar Aplicación
document.addEventListener('DOMContentLoaded', initApp);