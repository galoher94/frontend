import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getTareas } from "./tareas/new/tareas.api";
import { TareasTable } from "./tareas/tareas.table";

async function HomePage() {
  const tareas = await getTareas();

  return (
    <>
      <div className="sticky top-0 bg-gradient-to-r from-sky-300 via-blue-400 to-orange-300 z-50 p-4 w-full h-16 ">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold">Mis Tareas</h1>
          <div className="flex gap-2">
            <Link href="/tareas/new" legacyBehavior>
              <a className={buttonVariants()}>Crear Tarea</a>
            </Link>
            <Link href="/login" legacyBehavior>
              <a className={`${buttonVariants()} bg-red-500`}>Salir</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-auto">
        <div className="mb-4 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Listado de Tareas</h2>
        </div>
        {/* Pasa todas las tareas al componente TareasTable */}
        <TareasTable tareas={tareas} />
      </div>
    </>
  );
}

export default HomePage;