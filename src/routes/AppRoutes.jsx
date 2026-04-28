import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Students from "../pages/students/Students";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          {/* <Route index element={<Dashboard />} /> */}
          {/* <Route path="students" element={<Students />} /> */}
          <Route path='/students' element={<Students />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}