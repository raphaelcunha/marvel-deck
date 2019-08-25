/* eslint-disable no-param-reassign */
import axios from "axios";
import md5 from "md5";

// TODO: Send to .env
// hash key - marvel api
const privateKey = process.env.REACT_APP_SERVER_PRIVATE_KEY;
const apikey = process.env.REACT_APP_SERVER_PUBLIC_KEY;
const ts = String(Date.now());
const hash = md5(ts + privateKey + apikey);

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_MARVEL_URL
});

api.interceptors.request.use(async config => {
  config.params = {
    apikey,
    hash,
    ts
  };
  return config;
});

export default api;
