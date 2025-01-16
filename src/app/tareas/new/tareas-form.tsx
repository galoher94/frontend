"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { createTareas, updateTareas } from "./tareas.api";
import { useParams, useRouter } from "next/navigation";

type FormData = {
    id?: number;
    titulo: string;
    descripcion: string;
    fecha: string; // Formato inicial de fecha será string
    prioridad: string;
    estado: string;
};

export function TareasForm({tarea}: any) {
    const { register, handleSubmit, control } = useForm<FormData>({defaultValues:{
        titulo: tarea.titulo,
        descripcion: tarea.descripcion,
        fecha: tarea.fecha,
        prioridad: tarea.prioridad,
        estado: tarea.estado
    }});
    const router = useRouter();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
            // Formatear la fecha solo si es necesario
            const formattedData = {
                ...data,
                fecha: new Date(data.fecha).toISOString().split("T")[0],  // Formato 'YYYY-MM-DD'
            };
    
            if (params.id && typeof params.id === "string") {
                // Editar tarea existente
                await updateTareas(params.id, formattedData);
            } else {
                // Crear nueva tarea
                await createTareas(formattedData);
            }
    
            // Redirigir a la ruta principal
            router.push("/");
    });
    
    
    const handleCancel = () => {
        // Redirigir a la ruta principal sin realizar ninguna acción
        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Label>Titulo</Label>
                <Input type="text" {...register("titulo", { required: true })} />
            </div>

            <div>
                <Label>Descripcion</Label>
                <Input type="text" {...register("descripcion", { required: true })} />
            </div>

            <div>
                <Label>Fecha</Label>
                <Input type="date" {...register("fecha", { required: true })}/>
            </div>

            <fieldset>
                <legend>Prioridad</legend>
                <Controller
                    control={control}
                    name="prioridad"
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccione una prioridad" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Baja">Baja</SelectItem>
                                <SelectItem value="Media">Media</SelectItem>
                                <SelectItem value="Alta">Alta</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />
            </fieldset>

            <fieldset>
                <legend>Estado</legend>
                <Controller
                    control={control}
                    name="estado"
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccione un estado" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Pendiente">Pendiente</SelectItem>
                                <SelectItem value="En Proceso">En Proceso</SelectItem>
                                <SelectItem value="Terminada">Terminada</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />
            </fieldset>
            <div className="p-4 flex justify-between">
                <Button type="button" onClick={handleCancel} variant="outline" className="w-24 mr-2 ">Cancelar</Button>
                <Button>
                    {params.id ? "Actualizar" : "Crear"}
                </Button>
            </div>

        </form>
    );
}

export default TareasForm;