import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      
      {/* Topbar arriba del todo, ocupando el ancho completo */}
      <Topbar />

      {/* Contenedor lateral + contenido */}
      <div className="flex">
        {/* Sidebar bajado porque el Topbar ya está fuera */}
        <Sidebar />

        {/* Contenido principal */}
        <main className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-800 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
