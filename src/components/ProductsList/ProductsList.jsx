import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../../app.styled";
import ProductCard from "../ProductCard";
import { addProduct, removeProduct } from "../../redux/actions";
import { getVisibleProducts } from "../../redux/selectors";

export default function ProductsList() {
  const { cart } = useSelector((state) => state.products);
  const products = useSelector(getVisibleProducts);

  const dispatch = useDispatch();
  return (
    <ProductList>
      {products.map(({ id, image }) => {
        const isProductInCart = cart.find((item) => item.id === id);
        return (
          <ProductCard
            key={id}
            id={id}
            image={image}
            handleAddProduct={(id) => dispatch(addProduct(id))}
            handleRemoveProduct={(id) => dispatch(removeProduct(id))}
            isProductInCart={isProductInCart}
          />
        );
      })}
    </ProductList>
  );
}
