import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout";

const HomePage = lazy(() => import('./pages/HomePage'))
const UserDetailPage = lazy(() => import('./pages/UserDetailPage'))
const UsersPage = lazy(() => import('./pages/UsersPage'))


const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Route>
    </Routes>
  </>
}

export default App;
