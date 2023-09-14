import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import NotFoundScreen from "./screens/NotFoundScreen";

export default function App() {
  const HomeScreen = lazy(() => import("./screens/HomeScreen"));
  const FavoritesScreen = lazy(() => import("./screens/FavoritesScreen"));
  const ProductDetailsScreen = lazy(() =>
    import("./screens/ProductDetailsScreen")
  );
  const LoginScreen = lazy(() => import("./screens/LoginScreen"));
  const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));

  //------------  V6 REACT-ROUTER-DOM  ------------ //
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Route>

      <Route element={<PrivateRoute redirectTo="/login" />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="product/:productId" element={<ProductDetailsScreen />} />
          <Route path="favorites" element={<FavoritesScreen />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

//------------  V5 REACT-ROUTER-DOM  ------------ //
//  <Switch>
//   <Route path="/" element={<Layout />}>
//     <PrivateRoute path="/" redirectTo="/login">
//       <HomeScreen />
//     </PrivateRoute>

//     <PrivateRoute path="product/:productId" redirectTo="/login">
//       <ProductDetailsScreen />
//     </PrivateRoute>

//     <PrivateRoute path="favorite" redirectTo="/login">
//       <FavoritesScreen />
//     </PrivateRoute>

//     <Route path="*" element={<NotFoundScreen />} />
//   </Route>
//   <PublicRoute path="/login">
//     <LoginScreen />
//   </PublicRoute>

//   <PublicRoute path="/register">
//     <RegisterScreen />
//   </PublicRoute>
// </Switch>
