const BASE_URL = "https://dummyjson.com";

export const getProducts = async ({ searchQuery = "", skip, limit } = {}) => {
  const params = new URLSearchParams({
    q: searchQuery,
    limit,
    skip,
  });

  const response = await fetch(`${BASE_URL}/products/search?${params}`);

  if (!response.ok) {
    throw new Error("smth went wrong");
  }

  return response.json();
};
