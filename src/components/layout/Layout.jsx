import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Topbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 shrink-0">
          <Sidebar />
        </div>

        <main className="flex-1 min-w-0 overflow-auto p-6 max-w-screen-2xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
