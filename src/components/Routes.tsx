// @ts-nocheck
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Spinner, Flex } from "@chakra-ui/react";
const Home = lazy(() => import("../pages/Home/Home"));
const Projects = lazy(() => import("../pages/Projects/Projects"));
const ProjectDetail = lazy(() => import("../pages/Projects/ProjectDetail"));
const Experience = lazy(() => import("../pages/Experience/Experience"));
const Error = lazy(() => import("../pages/Error"));
import Admin from "../pages/Admin/Admin";
import Login from "../pages/Admin/Login";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (<Suspense fallback={<Flex minH="60vh" align="center" justify="center"><Spinner color="#64ffda" size="xl" /></Flex>}>
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
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Suspense>);
};

export default AppRoutes;
