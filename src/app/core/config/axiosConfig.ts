import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: 'https://shoppingify-back-production.up.railway.app/api',
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Language': 'es',
    'Content-Type': 'application/json',
    'WEB-Accept-Charset': 'utf-8'
  },
})