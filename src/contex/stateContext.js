import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function GlobalContext({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleCartModal = () => {
    setIsCartModalOpen((prevState) => !prevState);
  };

  const handleAuthModal = () => {
    setIsAuthModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart"));
    if (cartLS) {
      setCart(cartLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        products,
        setProducts,
        searchQuery,
        setSearchQuery,
        isCartModalOpen,
        setIsCartModalOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        handleCartModal,
        handleAuthModal,
      }}
    >
      {children}
    </Context.Provider>
  );
}
