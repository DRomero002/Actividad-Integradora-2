const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

export const fetchInitialTasks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error en la petición API: Status ${response.status}`);
        }
        const data = await response.json();
        
        // Mapear el formato de la API al formato interno de la aplicación
        return data.map(task => ({
            id: String(task.id),
            title: task.title,
            completed: task.completed,
            priority: 'Media',
            createdAt: new Date().toISOString()
        }));
    } catch (error) {
        console.error('Error al consumir API:', error);
        throw error;
    }
};