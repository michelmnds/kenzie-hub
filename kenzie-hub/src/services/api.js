import axios from "axios";
import { token } from "../pages/Dashboard";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
