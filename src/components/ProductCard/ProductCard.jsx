import { ProductItem, ProductImage, Button, Wrapper } from "../../app.styled";

export default function ProductCard({
  id,
  image,
  handleAddProduct,
  handleRemoveProduct,
  isProductInCart,
}) {
  return (
    <ProductItem id={id}>
      <ProductImage>{image}</ProductImage>
      <Wrapper>
        {isProductInCart ? (
          <Button action="delete" onClick={() => handleRemoveProduct(id)}>
            Remove from cart
          </Button>
        ) : (
          <Button action="add" onClick={() => handleAddProduct(id)}>
            Add to cart
          </Button>
        )}
      </Wrapper>
    </ProductItem>
  );
}
