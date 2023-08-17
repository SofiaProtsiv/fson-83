import { Suspense, useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Skeleton from "../../components/Skeleton";
import ErrorMessage from "../../components/ErrorMessage";
import {
  ProductDetailsWrapper,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./productDetails.styled";
import { getProductById } from "../../api";
import { Button } from "../../components/Cart/cart.styled";

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

  const location = useLocation();

  if (status === STATUS.PENDING) {
    return <Skeleton />;
  }

  if (status === STATUS.RESOLVED) {
    const { id, title, images, price } = product;

    return (
      <>
        <NavLink to={location.state?.from ? location.state.from : "/"}>
          Go back
        </NavLink>

        <ProductDetailsWrapper id={id}>
          <ProductImage src={images[0]} alt={title} />
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>Price: ${price}</ProductPrice>
          <NavLink to="characteristic">More characterictc</NavLink>

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </ProductDetailsWrapper>
      </>
    );
  }
  if (status === STATUS.REJECTED) {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }
}
