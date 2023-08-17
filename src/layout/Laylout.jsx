import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Container from "../components/ui/Container";
import { useStateContext } from "../context/StateContext";
import { Suspense } from "react";

export default function Layout() {
  const { isCartModalOpen } = useStateContext();

  return (
    <Container>
      <Header />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>

      {isCartModalOpen && <Cart />}
    </Container>
  );
}
