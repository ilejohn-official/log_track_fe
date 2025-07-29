import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/', // Change to Render URL when deployed
});

export const planTrip = (data) => API.post('plan-trip/', data);
