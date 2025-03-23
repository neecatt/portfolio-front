import axios from 'axios';
import { TJob } from '../types/job.type';

const updateExperience = async (id: string, experience: TJob): Promise<TJob> => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_APP_API_URL}/experience/${id}`,
      experience
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default updateExperience;