import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Container from "../components/ui/Container";
import { useStateContext } from "../context/StateContext";

export default function Layout() {
  const { isCartModalOpen } = useStateContext();

  return (
    <Container>
      <Header />
      <Outlet />

      {isCartModalOpen && <Cart />}
    </Container>
  );
}
