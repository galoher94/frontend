import { TareasForm } from "../new/tareas-form";
import { obtenerTarea } from "../new/tareas.api";

interface Props {
    params: {
        id: string;
    };
}

async function EditTareaPage({ params }: Props) {
    try {
        // Obtén los datos de la tarea a partir del ID
        const tarea = await obtenerTarea(params.id);

        if (!tarea) {
            throw new Error("No se encontró la tarea con el ID proporcionado");
        }

        return (
            <div>
                <h1>Editar Tarea</h1>
                <TareasForm tarea={tarea} />
            </div>
        );
    } catch (error) {
        console.error("Error al cargar la tarea:", error);
        return (
            <div>
                <h1>Error</h1>
                <p>{error instanceof Error ? error.message : "Error al cargar la tarea"}</p>
            </div>
        );
    }
}

export default EditTareaPage;
