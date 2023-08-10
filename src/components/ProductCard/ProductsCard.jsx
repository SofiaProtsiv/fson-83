import { useContext } from "react";
import {
  ProductItem,
  ProductPrice,
  ProductName,
  Button,
  ContentWrapper,
  Wrapper,
  ProductImage,
} from "./productCard.styled";
import { Context } from "../../contex/stateContext";

export default function ProductCard({ id, images, title, price }) {
  const { cart, products, setCart } = useContext(Context);

  const isProductInCart = cart.find((product) => product.id === id);

  const addToCart = (productId) => {
    const isProductInCart = cart.find((product) => product.id === productId);
    if (!isProductInCart) {
      const product = products.find((product) => product.id === productId);
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <ProductItem key={id}>
      <ProductImage image={images[0]}></ProductImage>
      <ContentWrapper>
        <ProductName>{title}</ProductName>
        <Wrapper>
          <ProductPrice>${price}</ProductPrice>
          <Button
            isProductInCart={isProductInCart}
            onClick={() => addToCart(id)}
          >
            Add to Cart
          </Button>
        </Wrapper>
      </ContentWrapper>
    </ProductItem>
  );
}
