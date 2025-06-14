import axios from 'axios';

export const api = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
    headers : {
        "Content-type" : "application/json",
    }
});

export const registerUser = async () => {
  const res = await api.post("/register");
  return res.data;
};