import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.14:80php/main.php?action=',
});

export default api;
