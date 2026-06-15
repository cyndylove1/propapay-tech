import axios from "axios";
// import { baseURL, REQUEST_API_KEY } from "../apiConstants";
import { toast } from "react-toastify";
import { getFromLocalStorage } from "@/types/utils/storageUtils";

// Keep track of interceptors to remove them before adding new ones
let requestInterceptorId: number | null = null;
let responseInterceptorId: number | null = null;

export function configureAxios() {
  // First, remove any existing interceptors
  if (requestInterceptorId !== null) {
    axios.interceptors.request.eject(requestInterceptorId);
  }

  if (responseInterceptorId !== null) {
    axios.interceptors.response.eject(responseInterceptorId);
  }

  const baseURL = import.meta.env.VITE_BASE_URL;
  // const REQUEST_API_KEY = process.env.REACT_APP_API_KEY;

  axios.defaults.baseURL = baseURL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  // axios.defaults.headers.common["api-key"] = REQUEST_API_KEY;

  requestInterceptorId = axios.interceptors.request.use(
    (config) => {
      const token = getFromLocalStorage("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // Set default toast behavior
      config.headers["x-show-toast"] = config.headers["x-show-toast"] || "true";

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  responseInterceptorId = axios.interceptors.response.use(
    (response) => {
      const showToast = response.config.headers["x-show-toast"] === "true";
      if (showToast && response.data.message) {
        toast.dismiss(); // Dismiss any existing toasts
        toast.success(response.data.message);
      }
      return response;
    },
    (error) => {
      const showToast = error.config?.headers?.["x-show-toast"] === "true";
      if (showToast && error.response?.data?.message) {
        toast.dismiss(); // Dismiss any existing toasts
        toast.error(error.response.data.message);
      }
      return Promise.reject(error);
    },
  );
}
