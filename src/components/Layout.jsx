import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-800 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
