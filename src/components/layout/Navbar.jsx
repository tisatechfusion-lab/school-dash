import { Search, Bell,ChevronRight, Languages } from "lucide-react";
import Profile from '../../assets/images/profile.png'
export default function Navbar() {
  return (
    <div className="flex items-center justify-between">

     
      <div className="bg-white px-8 py-3 rounded-full text-sm shadow-sm flex gap-2">
       <span className="text-xs text-gray-800">Admin</span><ChevronRight size={16} className="items-center justify-center text-gray-800"/><span className="text-xs text-primary-700">Admin</span>
      </div>

      <div className="flex items-center gap-2">

        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm w-[260px]">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search Here..."
          className="outline-none text-sm w-full text-gray-800"
        />
      </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer">
          <Bell size={16} className="text-primary-500"/>
        </div>

        
        <img
          src={Profile}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />

      
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-sm font-semibold cursor-pointer">
          <Languages size={18} className="text-primary-500 "/>
        </div>

      </div>

    </div>
  );
}