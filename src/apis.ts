import axios, { AxiosResponse } from "axios";

const BASE_URL:string  = process.env.BASE_URL || "https://randomuser.me";

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

