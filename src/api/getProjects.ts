import axios from "axios";

async function getProjects() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/projects`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching projects");
  }
}

export default getProjects;
