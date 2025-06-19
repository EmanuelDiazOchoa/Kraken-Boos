import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-violet-900 text-white dark:bg-gray-800 dark:text-gray-200 p-6 space-y-6">
      <h2 className="text-2xl font-extrabold tracking-wide">Kraken</h2>
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block rounded p-2 transition-colors ${
                isActive
                  ? "bg-violet-700 dark:bg-violet-600"
                  : "hover:bg-violet-800 dark:hover:bg-violet-700"
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/usuarios"
            className={({ isActive }) =>
              `block rounded p-2 transition-colors ${
                isActive
                  ? "bg-violet-700 dark:bg-violet-600"
                  : "hover:bg-violet-800 dark:hover:bg-violet-700"
              }`
            }
          >
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/proveedores"
            className={({ isActive }) =>
              `block rounded p-2 transition-colors ${
                isActive
                  ? "bg-violet-700 dark:bg-violet-600"
                  : "hover:bg-violet-800 dark:hover:bg-violet-700"
              }`
            }
          >
            Proveedores
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ventas"
            className={({ isActive }) =>
              `block rounded p-2 transition-colors ${
                isActive
                  ? "bg-violet-700 dark:bg-violet-600"
                  : "hover:bg-violet-800 dark:hover:bg-violet-700"
              }`
            }
          >
            Ventas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/configuracion"
            className={({ isActive }) =>
              `block rounded p-2 transition-colors ${
                isActive
                  ? "bg-violet-700 dark:bg-violet-600"
                  : "hover:bg-violet-800 dark:hover:bg-violet-700"
              }`
            }
          >
            Configuración
          </NavLink>
        </li>
      </ul>
    </div>
  );
}