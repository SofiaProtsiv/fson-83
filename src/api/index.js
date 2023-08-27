import axios from "axios";
axios.defaults.baseURL = "https://practices-api.vercel.app";

export const getUsers = async ({ name, limit, page }) => {
  const { data } = await axios.get(`/users?name=${name}&limit=${limit}&page=${page}`);
  return data;
};


export const getUserById = async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};
