import axios from 'axios';

export const coreApi = axios.create({
  baseURL: 'https://todo-test.digitaltolk.com/api/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK`,
  },
});
