import axios from 'axios';

const deleteProject = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${import.meta.env.VITE_APP_API_URL}/projects/${id}`);
  } catch (error) {
    throw error;
  }
};

export default deleteProject;