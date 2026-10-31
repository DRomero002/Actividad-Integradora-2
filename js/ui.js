// Referencias al DOM
const taskList = document.getElementById('task-list');
const totalTasksEl = document.getElementById('total-tasks');
const pendingTasksEl = document.getElementById('pending-tasks');
const completedTasksEl = document.getElementById('completed-tasks');
const notificationEl = document.getElementById('notification');

/*Muestra una notificación de error en pantalla por 4 segundos */
export const showNotification = (message) => {
    notificationEl.textContent = message;
    notificationEl.classList.remove('hidden');
    setTimeout(() => {
        notificationEl.classList.add('hidden');
    }, 4000);
};

/* Actualiza el panel de estadísticas */
export const updateMetrics = (tasks) => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    totalTasksEl.textContent = total;
    pendingTasksEl.textContent = pending;
    completedTasksEl.textContent = completed;
};

/* Renderiza la lista de tareas en el HTML */
export const renderTasks = (tasks) => {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<li style="text-align:center; color:#64748b; padding:1rem;">No hay tareas registradas.</li>';
        return;
    }

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        li.dataset.id = task.id;

        li.innerHTML = `
            <div style="display:flex; align-items:center; gap:0.75rem;">
                <input type="checkbox" class="toggle-complete" ${task.completed ? 'checked' : ''}>
                <span class="task-text">${task.title}</span>
                <span class="badge-priority badge-${task.priority}">${task.priority}</span>
            </div>
            <div class="task-actions">
                <button class="btn-delete" data-id="${task.id}">Eliminar</button>
            </div>
        `;

        taskList.appendChild(li);
    });
};