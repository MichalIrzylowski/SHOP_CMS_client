import axios from "axios";

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
