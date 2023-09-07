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
import {
  useAddProductToCartMutation,
  useDeleteProductFromCartMutation,
  useGetCartQuery,
} from "../../redux/productsRTK/productsRTK";

export default function ProductCard({ uid, images, title, price }) {
  const { data: cart } = useGetCartQuery();

  const [addProduct, { isLoading: isAdding }] = useAddProductToCartMutation();
  const [deleteProduct, { isLoading: isDeleting }] =
    useDeleteProductFromCartMutation();

  const isProductInCart = cart?.find((item) => item.uid === uid);

  const handleProduct = () => {
    isProductInCart
      ? deleteProduct(isProductInCart.id)
      : addProduct({ uid, images, title, price });
  };

  return (
    <ProductItem key={uid}>
      <ProductImage image={images[0]}></ProductImage>
      <ContentWrapper>
        <ProductName>{title}</ProductName>
        <Wrapper>
          <ProductPrice>${price}</ProductPrice>
          <Button
            onClick={handleProduct}
            isProductInCart={isProductInCart}
            disabled={isAdding || isDeleting}
          >
            {isProductInCart ? "In Cart" : "Add to Cart"}
          </Button>
        </Wrapper>
      </ContentWrapper>
      <Icon>
        <AiFillHeart />
      </Icon>
    </ProductItem>
  );
}
