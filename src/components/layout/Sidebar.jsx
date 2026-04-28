import { NavLink } from "react-router-dom";
import { LayoutDashboard, Menu, GraduationCap,User,UserStar,CalendarCheck,LayoutList,NotepadText,UserCog 
  ,BadgeIndianRupee,
  } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-[330px] h-full bg-sidebar rounded-xl p-4 flex flex-col">

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
            <GraduationCap size={32}/>
          </div>

          <div className="font-semibold">
            <span className="text-lg text-primary-600">ScholerPro</span>{" "}
            <p className="text-xs text-primary-700">Adminpanel</p>
          </div>
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
          <span className="text-[16px] font-medium">Dashboard</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <User  size={18}/>
          <span className="text-[16px] font-medium">Student</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <UserStar size={18} />
          <span className="text-[16px] font-medium">Staffs</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <GraduationCap size={18} />
          <span className="text-[16px] font-medium">Academic</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <CalendarCheck size={18} />
          <span className="text-[16px] font-medium">Attendance</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <LayoutList  size={18} />
          <span className="text-[16px] font-medium">Facilities</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <NotepadText  size={18} />
          <span className="text-[16px] font-medium">Leave Application</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <UserCog size={18} />
          <span className="text-[16px] font-medium">Management</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <BadgeIndianRupee size={18} />
          <span className="text-[16px] font-medium">Finance</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <LayoutDashboard size={18} />
          <span className="text-[16px] font-medium">Inventory</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <LayoutDashboard size={18} />
          <span className="text-[16px] font-medium">Records</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <LayoutDashboard size={18} />
          <span className="text-[16px] font-medium">About School</span>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <LayoutDashboard size={18} />
          <span className="text-[16px] font-medium">Setting</span>
        </NavLink>
        
      <div className="mt-auto">
        <div className="bg-white rounded-xl shadow-sm">
          <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <LayoutDashboard size={18} />
          <span className="text-[16px] font-medium">Setting</span>
        </NavLink>
          <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center gap-3.5 px-3 py-2 rounded-lg text-text-main
            ${isActive ? "bg-active-bg" : "hover:bg-gray-100"}`
          }
        >
          <LayoutDashboard size={18} />
          <span className="text-[16px] font-medium">Setting</span>
        </NavLink>
        </div>
       </div>

      </nav>

    </div>
  );
}