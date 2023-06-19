import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { About, Home } from "../pages";

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
    </Route>
  </Routes>
);
