import axios from "axios";
import { TProject } from "../types/project.type";

async function createProject(project: TProject) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/projects`,
      project
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating project");
  }
}

export default createProject;