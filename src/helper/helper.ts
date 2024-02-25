import { toast } from "react-toastify";
import  * as CryptoJS from "crypto-js";

export const setDataToLocalStorage = (key:string, data:any) =>  {
  // localStorage.setItem('key',JSON.stringify(data));
  const jsonStr = JSON.stringify(data);
  const encryptedData:string = CryptoJS.AES.encrypt(jsonStr, key).toString();
  localStorage.setItem(key, encryptedData);
}

export const  getDataFromLocalStorage = (key: string) =>  {
  const encryptedData: string | null = localStorage.getItem(key);
  if (encryptedData) {
    const bytes:any = CryptoJS.AES.decrypt(encryptedData, key);
    const decryptedData:any = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
  return null;
}
 
export const errorHandling = (err:string) => {
  toast.error(err, {
    position: "top-left",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    });
}
