import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const sendChat = (data) => API.post("/chat", data);
export const logInteraction = (data) => API.post("/log", data);