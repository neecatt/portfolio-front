import { Routes, Route } from "react-router-dom";
import { Home, Projects, Experience, Error } from "../pages";
import Admin from "../pages/Admin/Admin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
