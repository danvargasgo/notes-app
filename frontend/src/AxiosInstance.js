import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://notes-app-production-631e.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
