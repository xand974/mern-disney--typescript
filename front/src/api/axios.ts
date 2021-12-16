import axios from "axios";

const userToken = localStorage.getItem("user");
const TOKEN = userToken ? JSON.parse(userToken)?.accessToken : {};

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const privateRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});
