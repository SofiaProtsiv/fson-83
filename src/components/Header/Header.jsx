import { useMemo } from "react";
import {
  HeaderWrapper,
  Logo,
  NavigationContainer,
  NavigationWrapper,
  NavigationItem,
} from "./header.styled";
import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useStateContext } from "../../context/StateContext";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { cart, setIsCartModalOpen } = useStateContext();

  const totalItems = useMemo(
    () => cart.reduce((total, { quantity }) => total + quantity, 0),
    [cart]
  );

  const handleCartModal = () => {
    setIsCartModalOpen((prevState) => ({
      isCartModalOpen: !prevState.isCartModalOpen,
    }));
  };

  const location = useLocation();

  return (
    <HeaderWrapper>
      <NavLink to="/" state={{ from: location.pathname }}>
        <Logo>E-commerse</Logo>
      </NavLink>

      <NavigationContainer>
        <NavigationWrapper>
          <NavLink to="/favorites" state={{ from: location.pathname }}>
            <NavigationItem>
              <BsHeartFill />
            </NavigationItem>
          </NavLink>

          <NavigationItem onClick={handleCartModal}>
            <FaShoppingCart />
            {totalItems}
          </NavigationItem>

          <NavigationItem>
            <FaUserCircle />
          </NavigationItem>
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
