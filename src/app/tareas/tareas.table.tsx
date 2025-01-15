"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { deleteTareas } from "./new/tareas.api";

export function TareasTable({ tareas }: { tareas: any[] }) {
    const router = useRouter();
    
    if (!tareas || tareas.length === 0) {
      return <p className="text-center text-gray-500">No hay tareas disponibles.</p>;
    }

    async function handleEdit (id: number) {
      // Redirección a la página de edición
      router.push(`/tareas/${id}/edit`);
    };
  
     async function handleDelete (id: number) {
        // Lógica para eliminar la tarea
            console.log(`Eliminando tarea con ID: ${id}`);
            await deleteTareas(id);
              // Redirigir a la ruta principal
              router.refresh(); 
    }
    return (

<Table className="border-collapse border border-gray-300 shadow-lg rounded-lg w-full" 
>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-sky-300 to-blue-400 text-white">
              <TableHead className="px-4 py-2 text-center text-black">ID</TableHead>
              <TableHead className="px-4 py-2 text-center text-black">Título</TableHead>
              <TableHead className="px-4 py-2 text-center text-black">Descripción</TableHead>
              <TableHead className="px-4 py-2 text-center text-black">Fecha</TableHead>
              <TableHead className="px-4 py-2 text-center text-black">Prioridad</TableHead>
              <TableHead className="px-4 py-2 text-center text-black">Estado</TableHead>
              <TableHead className="px-4 py-2 text-center text-black">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tareas.map((tarea: any, index: number) => (
              <TableRow
                key={tarea.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } hover:bg-gray-200 transition-all duration-200`}
              >
                <TableCell className="px-4 py-2">{tarea.id}</TableCell>
                <TableCell className="px-4 py-2">{tarea.titulo}</TableCell>
                <TableCell className="px-4 py-2">{tarea.descripcion}</TableCell>
                <TableCell className="px-4 py-2">{tarea.fecha}</TableCell>
                <TableCell className="px-4 py-2">{tarea.prioridad}</TableCell>
                <TableCell className="px-4 py-2">{tarea.estado}</TableCell>
                <TableCell className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                   onClick={() => handleEdit(tarea.id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Editar
                    </button>
                    <Button
                        onClick={() => handleDelete(tarea.id)}
                      className="px-3" variant="destructive"
                    >
                      Eliminar
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    )
}