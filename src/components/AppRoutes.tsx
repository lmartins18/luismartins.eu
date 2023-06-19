import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { About, Experience, Home, Uses } from "../pages";

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route element={<Home />} path="/" />
      <Route element={<Experience />} path="/experience" />
      <Route element={<About />} path="/about" />
      <Route element={<Uses />} path="/uses" />
    </Route>
  </Routes>
);
