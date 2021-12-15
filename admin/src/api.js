import axios from "axios";

const TOKEN = JSON.parse(localStorage.getItem("user"))?.accessToken;

export const publicRequest = axios.create({
  baseURL: "http://localhost:5050/api/v1",
});
export const privateRequest = axios.create({
  baseURL: "http://localhost:5050/api/v1",
  headers: { authorization: `Bearer ${TOKEN}` },
});
