import axios from "axios";

export const BaseURL = "http://localhost:5000";

export const instance = axios.create({
  baseURL: BaseURL,
});

const JwtToken_KEY = "jwtToken_key";

let jwtToken = "";

const setToken = (token) => {
  jwtToken = token;
  window.localStorage.setItem(JwtToken_KEY, token);
};

const cleanToken = () => {
  jwtToken = "";
  window.localStorage.removeItem(JwtToken_KEY);
};

const getToken = () => {
  return jwtToken || window.localStorage.getItem(JwtToken_KEY);
};

instance.interceptors.response.use((response) => {
  if (
    response.headers["content-type"]?.includes?.("application/octet-stream")
  ) {
    return {
      success: true,
      blob: new Blob([response?.data]),
      headers: response.headers,
    };
  } else {
    return response?.data;
  }
});
instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token?.length) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
