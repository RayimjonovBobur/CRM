import axios from "./axios";

export const POST = (url, data) => {
  const method = data.id ? "PUT" : "POST";
  const path = data.id ? url + "/" + data.id : url;
  return axios(path, method, data);
};
export const GET = (url) => {
  return axios(url, "GET");
};
export const DELETE = (url, data) => {
  return axios(url, "DELETE", data);
};
