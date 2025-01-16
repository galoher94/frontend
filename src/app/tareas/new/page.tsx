import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TareasForm from "./tareas-form"; // Importa TareasForm
import {obtenerTarea } from "./tareas.api";
 
interface Props {
  params: {
    id: string;
  };
}

async function TareasNewPage({params}:Props) {
  const tarea = await obtenerTarea(params.id);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-300 via-blue-400 to-orange-300 p-4">
      <Card className="w-[350px] shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            { params.id? "Actualizar Tarea" : "Crear Tarea" } 
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Aquí paso la tarea al formulario TareasForm */}
          <TareasForm tarea={tarea}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default TareasNewPage;