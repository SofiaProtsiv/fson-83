import Filter from "./components/Filter";
import ErrorMessage from "./components/ErrorMessage";
import ProductList from "./components/ProductsList";
import { useSelector } from "react-redux";
import { getVisibleProducts } from "./redux/selectors";

export default function App() {
  const products = useSelector(getVisibleProducts);

  return (
    <>
      <Filter />
      {products.length > 0 ? (
        <ProductList />
      ) : (
        <ErrorMessage>No matches found.</ErrorMessage>
      )}
    </>
  );
}
