import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardPage from "./pages/DashboardPage";
import ProvidersPage from "./pages/ProvidersPage";
import SalesPage from "./pages/SalesPage";
import SettingsPage from "./pages/SettingsPage";
import EmployeesPage from "./pages/EmployeesPage";

function App() {
  return (
    <Router>
      {/* Este contenedor tiene min-h-screen y colores para dark mode */}
      <div className="flex bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="flex-1 p-6">

            
            {/* <div className="p-4 mb-4 rounded bg-gray-200 dark:bg-gray-700">
              Este bloque cambia con el modo 🌗
            </div> */}

            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/empleados" element={<EmployeesPage />} />
              <Route path="/proveedores" element={<ProvidersPage />} />
              <Route path="/ventas" element={<SalesPage />} />
              <Route path="/configuracion" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

