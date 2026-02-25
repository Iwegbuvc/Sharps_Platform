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
  config.withCredentials = true; // Always send cookies (for refresh token)
  return config;
});

// Response interceptor for handling token refresh
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        // Queue requests while refreshing
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return API(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;
      try {
        const res = await axios.post(
          `${backendBase}/api/refresh-token`,
          {},
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // <-- Add this line
            },
          },
        );
        const { accessToken } = res.data;
        if (accessToken) {
          localStorage.setItem("token", accessToken);
          API.defaults.headers.common["Authorization"] =
            `Bearer ${accessToken}`;
          processQueue(null, accessToken);
          return API(originalRequest);
        }
      } catch (refreshError) {
        processQueue(refreshError, null);
        // Optionally: clear tokens and redirect to login
        localStorage.removeItem("token");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  },
);

export default API;
