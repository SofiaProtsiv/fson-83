import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import {
  HeaderWrapper,
  Logo,
  NavigationContainer,
  NavigationWrapper,
  NavigationItem,
} from "./header.styled";
import { useContext, useMemo } from "react";
import { Context } from "../../contex/stateContext";

export default function Header() {
  const { cart, handleCartModal, handleAuthModal } = useContext(Context);

  const totalItems = useMemo(
    () => cart.reduce((total, { quantity }) => total + quantity, 0),
    [cart]
  );

  return (
    <HeaderWrapper>
      <Logo>E-commerse</Logo>

      <NavigationContainer>
        <NavigationWrapper>
          <NavigationItem>
            <BsHeartFill />
          </NavigationItem>

          <NavigationItem onClick={handleCartModal}>
            <FaShoppingCart />
            {totalItems}
          </NavigationItem>

          <NavigationItem onClick={handleAuthModal}>
            <FaUserCircle />
          </NavigationItem>
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
