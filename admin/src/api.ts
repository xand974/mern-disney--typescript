import axios from "axios";

const token = localStorage.getItem("user");
const persistedToken = token ? JSON.parse(token)?.accessToken : null;

export const publicRequest = axios.create({
  baseURL: "http://localhost:5050/api/v1",
});
export const privateRequest = axios.create({
  baseURL: "http://localhost:5050/api/v1",
  headers: { authorization: `Bearer ${persistedToken}` },
});
