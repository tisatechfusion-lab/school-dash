import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
export default function DashboardLayout() {
  return (
    <div className="flex h-screen  overflow-hidden">
      <div className="p-6 pr-0 h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col p-6 gap-6 min-w-0">
        <Navbar />

        <div className="flex-1 min-w-0">
          <Outlet />
        </div>
      </div>

    </div>
  );
}