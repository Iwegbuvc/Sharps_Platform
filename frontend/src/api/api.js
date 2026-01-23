import axios from "axios";

const backendBase =
  import.meta.env.VITE_BACKEND_URL ||
  "https://sharps-platform-backend.onrender.com";

const API = axios.create({
  baseURL: `${backendBase}/api`,
});

// Add JWT token automatically if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
