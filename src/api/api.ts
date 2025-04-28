import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API } from "config";

export const api = axios.create({
  baseURL: API,
  withCredentials: false,
});

// ** Maybe add refresh token logic but not now bruhhh..

const getAccessToken = async () => await AsyncStorage.getItem("token");

api.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
