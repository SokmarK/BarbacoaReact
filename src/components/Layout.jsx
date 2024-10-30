import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Products from "../pages/Products"
import First from "./First/First";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Products />
      <First />
      <Footer />
    </>
  );
}
