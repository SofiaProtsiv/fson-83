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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProductToCart, getCart, deleteProductFromCart } from "../../api";

export default function ProductCard({ uid, images, title, price }) {
  const queryClient = useQueryClient();

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const addProduct = useMutation((product) => addProductToCart(product), {
    onSuccess: () => queryClient.invalidateQueries(["cart"]),
  });

  const deleteProduct = useMutation((id) => deleteProductFromCart(id), {
    onSuccess: () => queryClient.invalidateQueries(["cart"]),
  });

  const isProductInCart = cart?.find((item) => item.uid === uid);

  const handleProduct = () => {
    isProductInCart
      ? deleteProduct.mutate(isProductInCart.id)
      : addProduct.mutate({ uid, images, title, price });
  };

  return (
    <ProductItem key={uid}>
      <ProductImage image={images[0]}></ProductImage>
      <ContentWrapper>
        <ProductName>{title}</ProductName>
        <Wrapper>
          <ProductPrice>${price}</ProductPrice>
          <Button isProductInCart={isProductInCart} onClick={handleProduct}>
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
