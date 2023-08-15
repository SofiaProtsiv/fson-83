import { Route, Routes } from "react-router-dom";

import Layout from "./layout";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />;
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="products/:productId" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
