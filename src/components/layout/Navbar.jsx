import { Search, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-2 p-4">

     
      <div className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
        Admin &gt; Admin
      </div>

      
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm w-[350px]">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search Here..."
          className="outline-none text-sm w-full"
        />
      </div>

   
      <div className="flex items-center gap-2">

        
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer">
          <Bell size={18} />
        </div>

        
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />

      
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-sm font-semibold cursor-pointer">
          A
        </div>

      </div>

    </div>
  );
}
