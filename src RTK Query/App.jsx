import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

export default function App() {
  const HomeScreen = lazy(() => import("./screens/HomeScreen"));
  const FavoritesScreen = lazy(() => import("./screens/FavoritesScreen"));
  const NotFoundScreen = lazy(() => import("./screens/NotFoundScreen"));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="favorites" element={<FavoritesScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
}
