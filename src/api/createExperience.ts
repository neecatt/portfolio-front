import axios from "axios";
import { TJob } from "../types/job.type";

async function createExperience(experience: TJob) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/experience/create`,
      experience
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating experience");
  }
}

export default createExperience;