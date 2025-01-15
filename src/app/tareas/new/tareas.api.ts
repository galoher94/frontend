// Función para obtener tareas
export async function getTareas() {
    const data = await fetch("http://localhost:4000/api/tareas");
    return await data.json();
}

// Función para obtener tareas
export async function obtenerTarea(id: string) {
    const data = await fetch(`http://localhost:4000/api/tareas/${id}`);
    return await data.json();
}


// Función para crear tareas
export async function createTareas(data: any) {
    try {
        const response = await fetch("http://localhost:4000/api/tareas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("Error en el servidor:", error);
            throw new Error("Error al crear la tarea");
        }

        return await response.json();
    } catch (error) {
        console.error("Error al enviar datos:", error);
        throw error;
    }
}
// Función para actualizar tareas
export async function updateTareas(id: string, data: any) {
    try {
        // Utiliza el parámetro `id` directamente en la URL
        const response = await fetch(`http://localhost:4000/api/tareas/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("Error en el servidor:", error);
            throw new Error("Error al actualizar la tarea");
        }

        return await response.json();
    } catch (error) {
        console.error("Error al enviar datos:", error);
        throw error;
    }
}

// Función para eliminar tareas
export async function deleteTareas(id: number) {
    try {
        const response = await fetch(`http://localhost:4000/api/tareas/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const error = await response.json();
            console.error("Error en el servidor:", error);
            throw new Error("Error al eliminar la tarea");
        }

        return await response.json();
    } catch (error) {
        console.error("Error al enviar datos:", error);
        throw error;
    }
}