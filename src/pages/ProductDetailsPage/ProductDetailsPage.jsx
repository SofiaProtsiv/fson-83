import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../../components/Skeleton";
import ErrorMessage from "../../components/ErrorMessage";
import {
  ProductDetailsWrapper,
  ProductImage,
  ProductPrice,
  ProductCategory,
  ProductRating,
  ProductStock,
  ProductBrand,
  ProductDescription,
  ProductTitle,
} from "./productDetails.styled";
import { getProductById } from "../../api";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    fetchProductById();
  }, [productId]);

  const fetchProductById = async () => {
    setStatus(STATUS.PENDING);
    try {
      const product = await getProductById(productId);
      if (!product) {
        throw new Error("no such product");
      }
      setStatus(STATUS.RESOLVED);
      setProduct(product);
      setErrorMessage(null);
    } catch (error) {
      setStatus(STATUS.REJECTED);
      setErrorMessage(error.message);
    }
  };

  if (status === STATUS.PENDING) {
    return <Skeleton />;
  }
  if (status === STATUS.RESOLVED) {
    const {
      id,
      title,
      images,
      price,
      category,
      rating,
      stock,
      brand,
      description,
    } = product;
    return (
      <ProductDetailsWrapper id={id}>
        <ProductImage src={images[0]} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>Price: ${price}</ProductPrice>
        <ProductCategory>Category: {category}</ProductCategory>
        <ProductRating>Rating: {rating}</ProductRating>
        <ProductStock>Stock: {stock}</ProductStock>
        <ProductBrand>Brand: {brand}</ProductBrand>
        <ProductDescription>Description: {description}</ProductDescription>
      </ProductDetailsWrapper>
    );
  }
  if (status === STATUS.REJECTED) {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }
}
