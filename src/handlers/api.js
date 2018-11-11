import axios from "axios";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dlxsuuger/upload";
const CLOUDINARY_PRESET = "qrdkcegk";

export const sendImageToCloudinary = image => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", CLOUDINARY_PRESET);

  return new Promise((resolve, reject) => {
    return axios
      .post(CLOUDINARY_URL, formData, {
        "Content-Type": "application/x-www-urlencoded"
      })
      .then(data => {
        return resolve(data);
      })
      .catch(error => {
        return reject(error);
      });
  });
};

console.log(typeof sendImageToCloudinary);

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
