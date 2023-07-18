import products from "../../assets/products";
import ProductCard from "../ProductCard";

const ProductList = () => {
  return (
    <ul>
      {
      products.length >0 ?
      products.map(({ id, title, price, thumbnail }) => {
        return (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            image={thumbnail}
          />
        );
      })
    
    : <p>No Matches found</p>
    }
    </ul>
  );
};

export default ProductList;
