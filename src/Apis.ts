import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./config.ts";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  // headers: {}
});

axiosInstance.interceptors.response.use(
  response => { return response.data},
  error => { return Promise.reject(error);}
);



const getUserData =  async() => { return await axiosInstance.get('/api'); }

export { getUserData }

