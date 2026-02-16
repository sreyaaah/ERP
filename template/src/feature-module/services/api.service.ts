import axios, { type AxiosInstance, AxiosError, type InternalAxiosRequestConfig, type AxiosResponse } from "axios";

// Base API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create axios instance
const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

// Request interceptor - Add auth token to requests
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Authentication is disabled on backend for testing
        // Token injection is commented out
        /*
        const token = localStorage.getItem("authToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        */
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

// Response interceptor - Handle errors globally
apiClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        // Log detailed error information
        console.error("API Error:", {
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
            url: error.config?.url,
            method: error.config?.method,
        });

        if (error.response?.status === 401) {
            // Unauthorized - clear token and redirect to login
            console.warn("Unauthorized request - authentication required");
            localStorage.removeItem("authToken");
            // Commented out redirect for debugging - uncomment when auth is implemented
            // window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default apiClient;
