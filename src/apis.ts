import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./config.ts";

const fetchData = async (path:string) => {
  try {
    const response:AxiosResponse = await axios.get(`${BASE_URL}/${path}`);
    return response.data;

  }catch(err) {

    console.log(err);
  }
}


const getUserData =  async() => {
  return await fetchData("/api");
}

export { getUserData }

