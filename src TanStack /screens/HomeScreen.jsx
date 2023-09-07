import { TopBlock, Title, MainSection } from "../app.styled";
import ProductsList from "../components/ProductsList";

export default function HomeScreen() {
  return (
    <MainSection>
      <TopBlock>
        <Title>Products</Title>
      </TopBlock>

      <ProductsList />
    </MainSection>
  );
}
