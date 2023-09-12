import { NavLink, useLocation, useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import {
  ProductDetailsWrapper,
  ProductImage,
  ProductPrice,
  DetailsWrapper,
  ProductTitle,
} from "./productDetailsScreen.styled";
import { useGetProductByIdQuery } from "../../redux/products";

export default function ProductDetailsScreen() {
  const { productId } = useParams();
  const location = useLocation();
  const {
    data: productDetails,
    isFetching,
    isError,
    isSuccess,
    error,
  } = useGetProductByIdQuery(productId);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (isSuccess) {
    const { id, images, price, title } = productDetails;
    return (
      <>
        <NavLink to={location.state?.from || "/"}>Go Back</NavLink>
        <ProductDetailsWrapper id={id}>
          <ProductImage src={images[0]} alt={title} />
          <DetailsWrapper>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>Price: ${price}</ProductPrice>
          </DetailsWrapper>
        </ProductDetailsWrapper>
      </>
    );
  }

  if (isError) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
}
