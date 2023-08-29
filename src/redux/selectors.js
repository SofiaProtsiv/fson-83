

export const cart = (state) => state.products

export const getVisibleProducts = (state) => {
  const { searchQuery } = state.filters
  const { products } = state.products;

  const normalizedFilter = searchQuery.toLowerCase();

  return products.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
