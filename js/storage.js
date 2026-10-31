const STORAGE_KEY = 'taskmanager_tasks';

export const getTasksFromStorage = () => {
    const tasks = localStorage.getItem(STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
};

export const saveTasksToStorage = (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};