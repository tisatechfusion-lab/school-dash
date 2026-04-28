import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">

      <div className="pt-6 pl-6 pr-8 pb-6">
        <div>
          <Sidebar />
        </div>
      </div>

      <div className="flex-1 flex flex-col pt-6 pr-6 pb-6">

        <div>
          <Navbar />
        </div>

        <div className="space-y-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}