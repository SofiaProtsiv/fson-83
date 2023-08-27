import { createContext } from "react";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

const GlobalContext = createContext();

export const RootContext = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <GlobalContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useStateContext = () => useContext(GlobalContext);
