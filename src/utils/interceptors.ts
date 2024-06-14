import axios from 'axios';

// Создание экземпляра Axios
const $api = axios.create({
    baseURL: 'https://api.example.com', // базовый URL для API
    timeout: 10000, // таймаут для запросов
});

// Добавление интерцептора для запросов
$api.interceptors.request.use(
  (config) => {
      // Получение токена из localStorage (или любого другого хранилища)
      const token = localStorage.getItem('token');
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
  },
  (error) => {
      // Обработка ошибки запроса
      return Promise.reject(error);
  }
);

// Добавление интерцептора для ответов
$api.interceptors.response.use(
  (response) => {
      // Обработка успешного ответа
      return response;
  },
  (error) => {
      // Обработка ошибок ответа
      if (error.response.status === 401) {
          // Например, можно перенаправить на страницу входа при получении 401 ошибки
          window.location.href = '/login';
      }
      return Promise.reject(error);
  }
);

export default $api;
