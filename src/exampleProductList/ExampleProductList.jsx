import React from "react";
import {
  ProductList,
  ProductItem,
  ProductImage,
  ProductPrice,
  Button,
  Wrapper,
  CounterWrapper,
  ProductQuantity,
} from "./exampleProductList.styled";

export default function ExampleProductList() {
  return (
    <ProductList>
      <ExampleProductCard id="1" price="12" image="🍔" name="Burger" />
      {/* {new ExampleProductCard({id: "1", price: "12"})} */}
    </ProductList>
  );
}

class ExampleProductCard extends React.Component {
  state = {
    count: 0,
    message: "hello",
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: (prevState.count += 1),
    }));
  };

  handleDecrement = () => {
    if (!this.state.count) return;

    this.setState((prevState) => ({
      count: (prevState.count -= 1),
    }));
  };

  render() {
    const { count } = this.state;
    const { id, price, image } = this.props;

    return (
      <ProductItem id={id}>
        <ProductImage>{image}</ProductImage>
        <Wrapper>
          <ProductPrice>${price}</ProductPrice>
          <CounterWrapper>
            <Button onClick={this.handleDecrement}>-</Button>
            <ProductQuantity>{count}</ProductQuantity>
            <Button onClick={this.handleIncrement}>+</Button>
          </CounterWrapper>
        </Wrapper>
      </ProductItem>
    );
  }
}
