import axios from "axios";

const baseURL = "http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/api";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
