// utils/api.js
import axios from 'axios';

const backendUrl = 'https://ratenowpractisebackend-production.up.railway.app';

// Read token from localStorage (set by React Native WebView)
const token = localStorage.getItem('token');

export const api = axios.create({
  baseURL: backendUrl,
  headers: token ? { Authorization: `Bearer ${token}` } : {},
  withCredentials: true, // still works if cookies exist
});
