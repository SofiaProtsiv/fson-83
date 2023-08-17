import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const ProcductCharacteristic = lazy(() =>
  import("./components/ProcductCharacteristic")
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />;
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="products/:productId" element={<ProductDetailsPage />}>
          <Route path="characteristic" element={<ProcductCharacteristic />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
