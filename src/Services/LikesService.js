
import axios from "axios";
const API_BASE = "https://tuiter-node-server-app-rishi.herokuapp.com/api";
const LIKES_API = `${API_BASE}/likes`;
export const LikesService = async () => {
  const response = await axios.get(LIKES_API);
  return response.data;
};

