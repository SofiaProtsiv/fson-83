import { useState } from "react";
import {
  ProductItem,
  ProductPrice,
  ProductName,
  Button,
  ContentWrapper,
  Wrapper,
  ProductImage,
  Icon,
} from "./productCard.styled";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice";
import { addToCart } from "../../redux/cart/slice";
import { useStateContext } from "../../context/StateContext";

export default function ProductCard({ id, images, title, price }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { products } = useStateContext();

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { favorites } = useSelector((state) => state.favorites);

  const isProductInCart = cart.find((product) => product.id === id);
  const isProductInFavorites = favorites.find((product) => product.id === id);

  const handleAddToCart = (productId) => {
    let product;
    if (!isProductInCart) {
      if (products.length) {
        product = products.find((product) => product.id === productId);
      } else {
        product = favorites.find((product) => product.id === productId);
      }
      dispatch(addToCart(product));
    }
  };

  const handleToggleFavorite = (productId) => {
    if (!isProductInFavorites) {
      const product = products.find((product) => product.id === id);
      dispatch(addToFavorites(product));
    } else {
      dispatch(removeFromFavorites(productId));
    }

    setIsFavorite(!isFavorite);
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
            onClick={() => handleAddToCart(id)}
          >
            {isProductInCart ? "In Cart" : "Add to Cart"}
          </Button>
        </Wrapper>
      </ContentWrapper>
      <Icon
        isProductInFavorites={isProductInFavorites}
        onClick={() => handleToggleFavorite(id)}
      >
        <AiFillHeart />
      </Icon>
    </ProductItem>
  );
}
