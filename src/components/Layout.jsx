import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Products from "../pages/Products";
import Ourclients from "./Ourclients/Ourclients";
import GridProducts from "./GridProducts/GridProducts";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Products />
            <GridProducts />
            <Ourclients />
            <Footer />
        </>
    );
}
