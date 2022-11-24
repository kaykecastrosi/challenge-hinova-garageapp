import axios from "axios";

const baseURL =
  process.env.NODE_ENV == "development"
    ? "https://637ff55c8efcfcedacfa8bb5.mockapi.io/api"
    : "http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/api";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
