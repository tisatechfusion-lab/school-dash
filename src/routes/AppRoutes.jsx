import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Dashboard from "../pages/dashboard/Dashboard";
import Students from "../pages/student/Students";
import Staffs from "../pages/staffs/Staffs";
import Academic from "../pages/academic/Academic";
import Attendance from "../pages/attendance/Attendance";
import Facilities from "../pages/facilities/Facilities";
import LeaveApplication from "../pages/leave-application/LeaveApplication";
import Management from "../pages/management/Management";
import Finance from "../pages/finance/Finance";
import Inventory from "../pages/inventory/Inventory";
import Records from "../pages/records/Records";
import AboutSchool from "../pages/about-school/AboutSchool";
import Setting from "../pages/setting/Setting";
import HelpCenter from "../pages/help-center/HelpCenter"; 
import LogOut from "../pages/logout/LogOut";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route path="students" element={<Students />} />
          <Route path="staffs" element={<Staffs />} />
          <Route path="academic" element={<Academic />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="leave-application" element={<LeaveApplication />} />
          <Route path="management" element={<Management />} />
          <Route path="finance" element={<Finance />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="records" element={<Records />} />
          <Route path="about-school" element={<AboutSchool />} />
          <Route path="setting" element={<Setting />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="logout" element={<LogOut />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}