import axios from "axios";

const api = axios.create({ baseURL: "/src/assets" });

api.interceptors.request.use(
  (request) => request,
  (request) => {
    console.log(request);
    return Promise.reject(request);
  },
);

api.interceptors.response.use(
  (response) => response.data,
  (response) => {
    console.log(response);
    return Promise.reject(response);
  },
);

export default api;
