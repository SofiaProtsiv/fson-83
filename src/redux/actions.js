import ACTIONS from "./constans";

// PRODUCTS
export const addProduct = (id) => {
  return {
    type: ACTIONS.ADD_PRODUCT,
    payload: id
  }
}

export const removeProduct = (id) => {
  return {
    type: ACTIONS.REMOVE_PRODUCT,
    payload: id
  }
}

// FILTETS
export const changeSearchQuery = (searchQuery) => {
  return {
    type: ACTIONS.CHANGE_SEARCH_QUERY,
    payload: searchQuery
  }
}