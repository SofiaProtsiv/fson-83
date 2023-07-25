import React, { Component } from "react";
import Container from "./components/ui/Container";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import ProductsList from "./components/ProductsList/ProductsList";
import products from "./assets/products";

export default class App extends Component {
  state = {
    isCartModalOpen: false,
    cart: [],
  };

  handleToggleModal = () => {
    // this.setState({ isCartModalOpen: !this.state.isCartModalOpen });

    this.setState((prevState) => ({
      isCartModalOpen: !prevState.isCartModalOpen,
    }));
  };

  addProductToCart = (product) => {
    const isProductInCart = this.state.cart.find(({ id }) => id === product.id);

    if (isProductInCart) {
      const updateCart = this.state.cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: (item.quantity += 1) };
        }
        return item;
      });

      this.setState({ cart: updateCart });
    } else {
      this.setState((prevState) => ({
        cart: [...prevState.cart, { ...product, quantity: 1 }],
      }));
    }
  };

  render() {
    const { isCartModalOpen, cart } = this.state;

    return (
      <Container>
        <Header cart={cart} handleToggleModal={this.handleToggleModal} />
        <ProductsList
          products={products}
          addProductToCart={this.addProductToCart}
        />
        {isCartModalOpen && (
          <Cart cart={cart} handleToggleModal={this.handleToggleModal} />
        )}
      </Container>
    );
  }
}
