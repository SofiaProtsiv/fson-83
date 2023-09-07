import axios from "axios";
const BASE_URL = "https://64f9fd9a4098a7f2fc15422a.mockapi.io/api/v1";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Smth went wrong");
  }
  return response.json();
};

export const getCart = async () => {
  const { data } = await axios.get(`${BASE_URL}/cart`);
  return data;
};

export const addProductToCart = async (product) => {
  const { data } = await axios.post(`${BASE_URL}/cart`, product);
  return data;
};

export const deleteProductFromCart = async (productId) => {
  const { data } = await axios.delete(`${BASE_URL}/cart/${productId}`);
  return data;
};
