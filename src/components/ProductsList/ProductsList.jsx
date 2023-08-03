import React from "react";
import ProductCard from "../ProductCard";
import { Button, ProductList } from "./productsList.styled";
import { getProducts } from "../../api/products";
import Skeleton from "../Skeleton/Skeleton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default class ProductsList extends React.Component {
  state = {
    products: [],
    totalPages: 0,
    skip: 0,
    limit: 30,
    currentPage: 1,
    errorMessage: null,
    status: STATUS.IDLE,
  };

  async componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState(
        {
          skip: 0,
          products: [],
        },
        () => {
          this.fetchProducts();
        }
      );
    }

    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchProducts();
    }
  }

  handleLoadMore = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
      skip: prevState.skip + this.state.limit,
    }));
  };

  fetchProducts = async () => {
    const { skip, limit } = this.state;
    const { searchQuery } = this.props;

    try {
      await this.setState({ status: STATUS.PENDING });

      const { total, products } = await getProducts({
        searchQuery,
        skip,
        limit,
      });

      if (!products.length) {
        throw new Error("No matches found!");
      }

      this.setState((prevState) => ({
        products: [...prevState.products, ...products],
        totalPages: Math.ceil(total / limit),
        errorMessage: null,
        status: STATUS.RESOLVED,
      }));
    } catch (error) {
      this.setState({ status: STATUS.REJECTED, errorMessage: error.message });
    }
  };

  render() {
    const { currentPage, totalPages, status, errorMessage, products } =
      this.state;

    const isLoadMoreButtonShow = products.length && currentPage < totalPages;

    if (status === STATUS.PENDING) {
      return <Skeleton />;
    }

    if (status === STATUS.RESOLVED) {
      return (
        <ProductList>
          {products.map(({ id, images, title, price }) => {
            return (
              <ProductCard
                key={id}
                title={title}
                price={price}
                images={images}
              />
            );
          })}
          {isLoadMoreButtonShow ? (
            <Button onClick={this.handleLoadMore}>Load More</Button>
          ) : null}
        </ProductList>
      );
    }

    if (status === STATUS.REJECTED) {
      return <ErrorMessage>{errorMessage}</ErrorMessage>;
    }
  }
}
