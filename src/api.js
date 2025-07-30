import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const planTrip = (data) => API.post('/api/plan-trip/', data).then(res => res.data);
