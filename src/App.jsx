import React from "react";
import { TopBlock, Title, MainSection } from "./app.styled";
import Container from "./components/ui/Container";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList";
import Search from "./components/Search";
import AuthForm from "./components/Form/AuthForm";
import products from "./assets/products";

export default class App extends React.Component {
  state = {
    products,
    cart: [],
    isCartModalOpen: false,
    isAuthModalOpen: false,
    searchQuery: "",
  };

  addToCart = (productId) => {
    const isProductInCart = this.state.cart.find(
      (product) => product.id === productId
    );

    if (!isProductInCart) {
      const product = this.state.products.find(
        (product) => product.id === productId
      );

      this.setState((prevState) => ({
        cart: [...prevState.cart, { ...product, quantity: 1 }],
      }));
    }
  };

  handleIncrementProduct = (productId) => {
    const product = this.state.cart.find((product) => product.id === productId);

    const updatedCart = this.state.cart.map((item) => {
      if (product.id === item.id) {
        return { ...item, quantity: (item.quantity += 1) };
      }
      return item;
    });

    this.setState({ cart: updatedCart });
  };

  handleDecrementProduct = (productId) => {
    const product = this.state.cart.find((product) => product.id === productId);

    if (product.quantity <= 1) {
      this.removeFromCart(productId);
      return;
    }

    const updatedCart = this.state.cart.map((item) => {
      if (product.id === item.id) {
        return { ...item, quantity: (item.quantity -= 1) };
      }
      return item;
    });

    this.setState({ cart: updatedCart });
  };

  removeFromCart = (productId) => {
    const updatedCart = this.state.cart.filter(
      (product) => product.id !== productId
    );

    this.setState({ cart: updatedCart });
  };

  handleCartModal = () => {
    this.setState((prevState) => ({
      isCartModalOpen: !prevState.isCartModalOpen,
    }));
  };

  handleAuthModal = () => {
    this.setState((prevState) => ({
      isAuthModalOpen: !prevState.isAuthModalOpen,
    }));
  };

  handleChange = ({ target }) => {
    const normalizedValue = target.value.trim().toLowerCase();

    this.setState({ searchQuery: normalizedValue });
  };

  getFilteredProducts = () => {
    return this.state.products.filter(({ name }) =>
      name.toLowerCase().includes(this.state.searchQuery)
    );
  };

  render() {
    return (
      <Container>
        <Header
          cart={this.state.cart}
          handleCartModal={this.handleCartModal}
          handleAuthModal={this.handleAuthModal}
        />

        <MainSection>
          <TopBlock>
            <Title>Products</Title>
            <Search
              searchQuery={this.state.searchQuery}
              handleChange={this.debouncedOnChange}
            />
          </TopBlock>
          {this.getFilteredProducts().length ? (
            <ProductsList
              products={this.getFilteredProducts()}
              cart={this.state.cart}
              addToCart={this.addToCart}
            />
          ) : (
            <p>No matches found!</p>
          )}
        </MainSection>

        {this.state.isCartModalOpen ? (
          <Cart
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            handleCartModal={this.handleCartModal}
            handleDecrementProduct={this.handleDecrementProduct}
            handleIncrementProduct={this.handleIncrementProduct}
          />
        ) : null}

        {this.state.isAuthModalOpen && (
          <AuthForm handleAuthModal={this.handleAuthModal} />
        )}
      </Container>
    );
  }
}
