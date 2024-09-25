import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Language': 'es',
    'Content-Type': 'application/json',
    'WEB-Accept-Charset': 'utf-8'
  },
})