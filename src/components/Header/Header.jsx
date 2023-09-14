import { useMemo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
import { useGetCartQuery } from "../../redux/products";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/slice";
import { useGetCurrentUserQuery } from "../../redux/auth";

export default function Header() {
  const location = useLocation();

  const { data: cart } = useGetCartQuery();
  const { data: isUserAuthorized } = useGetCurrentUserQuery();

  const { setIsCartModalOpen, setIsAuthModalOpen } = useStateContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = useMemo(
    () => cart?.reduce((total, { quantity }) => total + quantity, 0),
    [cart]
  );

  const handleCartModal = () => {
    setIsCartModalOpen((prevState) => ({
      isCartModalOpen: !prevState.isCartModalOpen,
    }));
  };

  const handleAuthForm = () => {
    setIsAuthModalOpen((prevState) => ({
      isAuthModalOpen: !prevState.isAuthModalOpen,
    }));
  };

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <HeaderWrapper>
      <NavLink to="/">
        <Logo>E-commerse</Logo>
      </NavLink>

      <NavigationContainer>
        <NavigationWrapper>
          <NavLink to="/favorites" state={{ from: location }}>
            <NavigationItem>
              <BsHeartFill />
            </NavigationItem>
          </NavLink>

          <NavLink>
            <NavigationItem onClick={handleCartModal}>
              <FaShoppingCart />
              {totalItems}
            </NavigationItem>
          </NavLink>
          {isUserAuthorized ? (
            <>
              <p>{isUserAuthorized.name}</p>
              <NavigationItem onClick={handleLogOut}>Log Out</NavigationItem>
            </>
          ) : (
            <NavLink to="/login">
              <NavigationItem onClick={handleAuthForm}>
                <FaUserCircle />
              </NavigationItem>
            </NavLink>
          )}
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
