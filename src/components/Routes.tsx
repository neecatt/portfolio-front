import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import Projects from "../pages/Projects/Projects";
import Experience from "../pages/Experience";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};

export default AppRoutes;
