import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const favoritesLS = JSON.parse(localStorage.getItem("favorites")) || [];

    setCart(cartLS);
    setFavorites(favoritesLS);
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        searchParams, setSearchParams,
        favorites,
        setFavorites,
        isCartModalOpen,
        setIsCartModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
