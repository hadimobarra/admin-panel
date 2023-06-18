import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const instance = axios.create({
  baseURL: 'https://reqres.in',
  headers: {
    common: {
      'Content-Type': 'application/json'
    }
  },
});

instance.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

export const get = async (url, config = {}) => {
  try {
    const response = await instance.get(url, config);
    return response;
  } catch (error) {
    toast.error('An error occurred while making a GET request: ' + error.message);
    throw error;
  }
};

export const post = async (url, data, config = {}) => {
  try {
    const response = await instance.post(url, data, config);
    return response;
  } catch (error) {
    toast.error('An error occurred while making a POST request: ' + error.message);
    throw error;
  }
};

