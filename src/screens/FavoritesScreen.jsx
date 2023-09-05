import ProductCard from "../components/ProductCard";
import { ProductList } from "../components/ProductsList/productsList.styled";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  const { favorites } = useSelector((state) => state.favorites);

  return (
    <>
      <ProductList>
        {favorites.length ? (
          favorites.map(({ id, images, title, price }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              images={images}
            />
          ))
        ) : (
          <p>Your favorites is empty</p>
        )}
      </ProductList>
    </>
  );
}
