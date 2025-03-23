import axios from 'axios';
import { TProject } from '../types/project.type';

const updateProject = async (id: string, project: TProject): Promise<TProject> => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_APP_API_URL}/projects/${id}`,
      project
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default updateProject;