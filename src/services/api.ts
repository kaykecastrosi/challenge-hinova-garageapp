import axios from "axios";

const api = axios.create({
  baseURL: "http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/api",
});

export default api;
