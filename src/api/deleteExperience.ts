import axios from 'axios';

const deleteExperience = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${import.meta.env.VITE_APP_API_URL}/experience/${id}`);
  } catch (error) {
    throw error;
  }
};

export default deleteExperience;