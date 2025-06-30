import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const weeklySalesData = [
  { day: "Lun", ventas: 200 },
  { day: "Mar", ventas: 400 },
  { day: "Mié", ventas: 300 },
  { day: "Jue", ventas: 500 },
  { day: "Vie", ventas: 250 },
  { day: "Sáb", ventas: 600 },
  { day: "Dom", ventas: 100 },
];

const monthlyComparisonData = [
  { mes: "Ene", actual: 12000, pasado: 9000 },
  { mes: "Feb", actual: 15000, pasado: 11000 },
  { mes: "Mar", actual: 18000, pasado: 16000 },
  { mes: "Abr", actual: 14000, pasado: 13000 },
];

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Ventas semanales */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Ventas Últimos 7 Días</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={weeklySalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="day" stroke="#8884d8" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "#f9f9f9" }} />
            <Line type="monotone" dataKey="ventas" stroke="#8b5cf6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Comparación mensual */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Comparativa Mensual</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlyComparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" stroke="#8884d8" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "#f9f9f9" }} />
            <Bar dataKey="actual" fill="#8b5cf6" />
            <Bar dataKey="pasado" fill="#a78bfa" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
