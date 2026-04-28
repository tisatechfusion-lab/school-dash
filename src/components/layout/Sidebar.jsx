import { NavLink } from "react-router-dom";
import { LayoutDashboard, Menu, GraduationCap } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-[250px] h-full bg-sidebar rounded-xl p-4 flex flex-col">

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
            <GraduationCap size={32}/>
          </div>

          <h1 className="text-lg font-semibold">
            <span className="text-primary-600">Scholer</span>{" "}
            <span className="text-primary-700">Pro</span>
          </h1>
        </div>

        <button className="p-2 rounded-md hover:bg-gray-100">
          <Menu size={20} />
        </button>
      </div>

      <div className="border-b border-gray-200 mb-4"></div>

      <nav className="flex flex-col gap-2">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <LayoutDashboard size={18} />
          <span className="text-[14px] font-medium">Dashboard</span>
        </NavLink>

      </nav>

    </div>
  );
}