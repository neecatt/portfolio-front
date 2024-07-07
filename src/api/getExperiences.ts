import axios from "axios";

async function getExperiences() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/experience`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching experiences");
  }
}

export default getExperiences;
