import axios from "axios";
import { getToken } from "../auth";

// export const BASE_URL="http://rideezy-env.eba-ipiwpram.ap-south-1.elasticbeanstalk.com";
// export const BASE_URL="http://localhost:5000";
export const BASE_URL = "http://192.168.29.130:5000";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});
privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
      // console.log(config);
    }
    return config;
  },
  (error) => Promise.reject(error)
);
