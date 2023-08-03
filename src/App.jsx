import React from "react";
import { TopBlock, Title, MainSection } from "./app.styled";
import Container from "./components/ui/Container";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Search from "./components/Search";
import products from "./assets/products";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import debounce from "lodash.debounce";

export default class App extends React.Component {
  state = {
    searchQuery: "",
  };

  handleChangeSearchQuery = debounce((searchQuery) => {
    this.setState({
      searchQuery,
    });
  }, 1000);

  render() {
    return (
      <Container>
        <Header />

        <MainSection>
          <TopBlock>
            <Title>Products</Title>
            <Search onChange={this.handleChangeSearchQuery} />
          </TopBlock>

          <ProductsList searchQuery={this.state.searchQuery} />
        </MainSection>
      </Container>
    );
  }
}
