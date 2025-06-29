// src/pages/EmployeesPage.jsx
import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import AttendanceSheet from "../components/AttendanceSheet";
// import EmployeeStats from "../components/EmployeeStats"; ← Lo activamos más adelante

export default function EmployeesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold border-b pb-2">Gestión de Empleados</h1>

      {/* Estadísticas de asistencia - próximamente */}
      {/* <EmployeeStats /> */}

      {/* Tabla con empleados */}
      <EmployeeTable />

      {/* Planilla mensual de asistencia */}
      <AttendanceSheet />
    </div>
  );
}
