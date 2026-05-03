import axios from "axios";

const api = axios.create({ baseURL: "/src/assets" });

api.interceptors.response.use((response) => response.data);

export default api;
