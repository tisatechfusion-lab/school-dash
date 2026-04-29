import { NavLink } from "react-router-dom";
import dashboard from '../../assets/icons/sidebar/Dashboard.svg'
import student from '../../assets/icons/sidebar/Student.svg'
import staff from '../../assets/icons/sidebar/Staffs.svg'
import academic from '../../assets/icons/sidebar/Academic.svg'
import attendance from '../../assets/icons/sidebar/Attendance.svg'
import facilities from '../../assets/icons/sidebar/Facilities.svg'
import leave from '../../assets/icons/sidebar/Leaveapplication.svg'
import management from '../../assets/icons/sidebar/Management.svg'
import finance from '../../assets/icons/sidebar/Finance.svg'
import inventory from '../../assets/icons/sidebar/Inventory.svg'
import records from '../../assets/icons/sidebar/Records.svg'
import aboutshcool from '../../assets/icons/sidebar/AboutSchool.svg'
import setting from '../../assets/icons/sidebar/Setting.svg'
import helpcenter from '../../assets/icons/sidebar/HelpCenter.svg'
import logout from '../../assets/icons/sidebar/LogOut.svg'
import '../../styles/sidebar.css';
import SVG from "react-inlinesvg";

export default function Sidebar() {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3.5 px-3 py-2 rounded-lg
     ${isActive ? "bg-active-bg text-primary-500" : "hover:bg-gray-200"}`;

  return (
    <div className="sidebar w-[330px] h-full bg-sidebar rounded-xl p-4 flex flex-col">


      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white">
            <img src={academic} alt="sidemenu" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-primary-500 pb-0">
             E - Tara
            </h1>
            <p className="text-md text-primary-500 pt-0">School Management</p>
          </div>
        </div>

        {/* <button className="p-2 hover:bg-gray-100 rounded-md">
          <Menu size={20} />
        </button> */}
      </div>

      <div className="border-b mb-4"></div>

      <nav className="nav-link flex flex-col gap-2 ">

        <NavLink to="/" className={navLinkClass}>
        <SVG src={dashboard} alt="link"/>
          Dashboard
        </NavLink>

        <NavLink to="/students" className={navLinkClass}>
          <img src={student} alt="" className="text" />
           Students
        </NavLink>

        <NavLink to="/staffs" className={navLinkClass}>
          <img src={staff} alt="" />
          Staffs
        </NavLink>

        <NavLink to="/academic" className={navLinkClass}>
          <img src={academic} alt="" />
           Academic
        </NavLink>

        <NavLink to="/attendance" className={navLinkClass}>
          <img src={attendance} alt="" />
          Attendance
        </NavLink>

        <NavLink to="/facilities" className={navLinkClass}>
          <img src={facilities} alt="" />
           Facilities
        </NavLink>


        <NavLink to="/leave-application" className={navLinkClass}>
          <img src={leave} alt="" />
           Leave Application
        </NavLink>

        <NavLink to="/management" className={navLinkClass}>
          <img src={management} alt="" />
           Management
        </NavLink>

        <NavLink to="/finance" className={navLinkClass}>
          <img src={finance} alt="" />
           Finance
        </NavLink>

        <NavLink to="/inventory" className={navLinkClass}>
          <img src={inventory} alt="" />
          Inventory
        </NavLink>

        <NavLink to="/records" className={navLinkClass}>
          <img src={records} alt="" />
          Records
        </NavLink>

        <NavLink to="/about-school" className={navLinkClass}>
          <img src={aboutshcool} alt="" />
           About School
        </NavLink>

        <NavLink to="/setting" className={navLinkClass}>
          <img src={setting} alt="" />
           Setting
        </NavLink>


        <div className="mt-auto pt-4">
          <div className="bg-white rounded-xl py-3 shadow-md">

            <NavLink to="/help-center" className={navLinkClass}>
               <img src={helpcenter} alt="" />
               Help Center
            </NavLink>

            <NavLink to="/logout" className={navLinkClass}>
              <span className="text-red-500">
                <img src={logout} alt="" />
                Logout
                </span>
            </NavLink>

          </div>
        </div>

      </nav>
    </div>
  );
}