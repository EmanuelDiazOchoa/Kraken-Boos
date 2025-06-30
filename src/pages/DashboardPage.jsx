// src/pages/DashboardPage.jsx
import React from "react";
import DashboardCharts from "@/components/dashboard/DashboardCharts";
import Card from "@/components/dashboard/Card";
import {
  FaUser,
  FaTruck,
  FaDollarSign,
  FaCog,
} from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      
      <div className="bg-violet-100 dark:bg-violet-900 p-4 rounded-lg shadow text-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          ¡Bienvenido, Admin Kraken!
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Este es tu resumen general 📊 Recuerda revisar cada detalle 
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card title="Empleados" value="10" icon={<FaUser />} />
        <Card title="Proveedores" value="24" icon={<FaTruck />} />
        <Card title="Ventas" value="$12.300" icon={<FaDollarSign />} />
        <Card title="Configuración" value="✔️ Activa" icon={<FaCog />} />
      </div>
      
      <DashboardCharts />
    </div>
  );
}
