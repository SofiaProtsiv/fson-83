import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ redirectTo = "/", resticted = "false" }) => {
  const { token } = useSelector((state) => state.auth);

  const shouldRedirect = token && resticted;

  //------------  V6 REACT-ROUTER-DOM  ------------ //
  return shouldRedirect ? (
    <Navigate to={redirectTo} />
  ) : (
    <Suspense fallback={<div>loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;

//------------  V5 REACT-ROUTER-DOM  ------------ //
// import { useSelector } from "react-redux";
// import { Route, Redirect } from "react-router-dom";

// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = "/",
//   path
// }) {
//   const { token } = useSelector((state) => state.auth);

//   const shouldRedirect = token && restricted;

//   return (
//     <Route path={path}>
//       {shouldRedirect ? <Redirect to={redirectTo} /> : children}
//     </Route>
//   );
// }
