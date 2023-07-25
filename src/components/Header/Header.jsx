import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import {
  HeaderWrapper,
  Logo,
  NavigationContainer,
  NavigationWrapper,
  NavigationItem,
} from "./header.styled";

export default function Header({ handleToggleModal, cart }) {
  const totalQuantity = cart.reduce(
    (total, { quantity }) => (total += quantity),
    0
  );
  return (
    <HeaderWrapper>
      <Logo>E-commerse</Logo>

      <NavigationContainer>
        <NavigationWrapper>
          <NavigationItem>
            <BsHeartFill />
          </NavigationItem>

          <NavigationItem onClick={handleToggleModal}>
            {totalQuantity}
            <FaShoppingCart />
          </NavigationItem>
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
