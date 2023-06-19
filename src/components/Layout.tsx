import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const Layout = () => (
  <section className="bg-white dark:bg-gray-900  flex-1">
    <Header />
    <Outlet />
  </section>
);
