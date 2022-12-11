import axios from "axios";

const API_URL = "https://tuiter-node-server-app-rishi.herokuapp.com/api";

const SIGNUP_URL = `${API_URL}/users`;

export const SignUpService = async (signup) => {
  const info = await axios.post(SIGNUP_URL, signup);
  return info.data;
};
