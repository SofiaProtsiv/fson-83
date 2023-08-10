import React, { useEffect } from "react";
import Container from "./components/ui/Container";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import Search from "./components/Search";
import { TopBlock, Title, MainSection } from "./app.styled";
import { Context } from "./contex/stateContext";
import { useContext } from "react";

const App = () => {
  const { isCartModalOpen } = useContext(Context);

  return (
    <Container>
      <Header />

      <MainSection>
        <TopBlock>
          <Title>Products</Title>
          <Search />
        </TopBlock>

        <ProductsList />
      </MainSection>

      {isCartModalOpen && <Cart />}

      {/* {isAuthModalOpen && <AuthForm onSubmit={onSubmit} />} */}
    </Container>
  );
};

export default App;
