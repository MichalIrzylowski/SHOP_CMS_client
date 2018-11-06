import axios from "axios";

export const setAuthorizationHeader = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const api = (method, path, data, config) => {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data, config)
      .then(data => {
        return resolve(data);
      })
      .catch(error => {
        return reject(error);
      });
  });
};
