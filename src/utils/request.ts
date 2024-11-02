import axios, { InternalAxiosRequestConfig } from 'axios';

import { useRouter } from '../hooks';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

apiClient.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  return request;
});

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const router = useRouter();
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('Authentication error. Redirecting to login.');
          router.push('401') // preferred redirect login
          break;
        case 403:
          console.error('Access denied. You do not have permission.');
          router.push('403')
          break;
        case 404:
          console.error('Resource not found.');
          router.push('404')
          break;
        case 500:
          console.error('Server error. Please try again later.');
          router.push('500')
          break;
        default:
          console.error('An error occurred.');
      }
    } else if (error.message === 'Network Error' && !window.navigator.onLine) {
      console.error('Network error. Please check your connection.');
    }

    return Promise.reject(error);
  }
);

export default apiClient;
