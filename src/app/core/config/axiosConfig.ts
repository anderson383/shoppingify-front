import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 6000,
  headers: { 'X-Custom-Header': 'foobar' },
})