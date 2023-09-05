import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import Skeleton from "../Skeleton";
import ErrorMessage from "../ErrorMessage";
import { Button, ProductList } from "./productsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setCurrentPage } from "../../redux/products/slice";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function ProductsList() {
  const { products, currentPage, totalPages, status, error, limit } =
    useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchProducts({ skip: (currentPage - 1) * limit, limit, searchQuery: "" })
    );
  }, [currentPage, dispatch]);

  const handleLoadMore = () => {
    dispatch(setCurrentPage());
  };

  const showLoadMoreButton = products.length !== 0 && currentPage < totalPages;

  if (status === STATUS.PENDING) {
    return <Skeleton />;
  }

  if (status === STATUS.RESOLVED) {
    return (
      <ProductList>
        {products.map(({ id, images, title, price }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            images={images}
          />
        ))}

        {showLoadMoreButton && (
          <Button onClick={handleLoadMore} disabled={status === STATUS.PENDING}>
            {status === STATUS.PENDING ? "Loading..." : "Load More"}
          </Button>
        )}
      </ProductList>
    );
  }

  if (status === STATUS.REJECTED) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
}
