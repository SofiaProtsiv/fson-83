import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import Skeleton from "../Skeleton";
import ErrorMessage from "../ErrorMessage";
import { ProductList } from "./productsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/slice";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../api";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function ProductsList() {
  const queryClient = useQueryClient();

  const {
    data: products,
    isFetching,
    isError,
    isSuccess,
    error,
  } = useQuery(
    {
      queryKey: ["products"],
      queryFn: getProducts,
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  if (isFetching) {
    return <Skeleton />;
  }

  if (isSuccess) {
    return (
      <ProductList>
        {products?.map(({ uid, images, title, price }) => (
          <ProductCard
            key={uid}
            uid={uid}
            title={title}
            price={price}
            images={images}
          />
        ))}
      </ProductList>
    );
  }

  if (isError) {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  }
}
