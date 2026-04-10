import axios from 'axios';

// Kết nối với server Django
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 5000,
});

// Tự động đính kèm Token (JWT) vào mọi yêu cầu nộp lên server
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
