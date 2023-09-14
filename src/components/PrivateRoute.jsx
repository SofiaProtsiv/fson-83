import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectTo }) => {
  const { token } = useSelector((state) => state.auth);

  //------------  V6 REACT-ROUTER-DOM  ------------ //
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

//------------  V5 REACT-ROUTER-DOM  ------------ //
// import { useSelector } from "react-redux";
// import { Route, Redirect } from "react-router-dom";

// export default function PrivateRoute({
//   children,
//   redirectTo = "/",
//   path
// }) {
//   const { token } = useSelector((state) => state.auth);

//   return (
//     <Route path={path}>
//       {token ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// }
