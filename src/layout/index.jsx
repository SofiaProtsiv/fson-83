import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>FIRST LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
