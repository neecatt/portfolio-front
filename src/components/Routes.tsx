import { Routes, Route } from "react-router-dom";
import { Home, Projects, Experience, Error} from "../pages";
import Admin from "../pages/Admin/Admin";
import Login from "../pages/Admin/Login";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      } />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
