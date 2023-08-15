import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ProductCard from "../../components/ProductCard/ProductsCard";
import { useStateContext } from "../../context/StateContext";

export default function FavoritesPage() {
  const { favorites } = useStateContext();

  if (!favorites.length) {
    return <ErrorMessage>Your favorites is empty</ErrorMessage>;
  }

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      {favorites.map(({ id, images, title, price }) => (
        <ProductCard
          key={id}
          id={id}
          title={title}
          price={price}
          images={images}
        />
      ))}
    </ul>
  );
}
