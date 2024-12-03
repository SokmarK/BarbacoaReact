import { Outlet } from "react-router-dom";
import Products from "../pages/Products";
import Ourclients from "./Ourclients/Ourclients";
import GridProducts from "./GridProducts/GridProducts";
import Home from "../pages/Home";

export default function Layout() {
    return (
        <>
            <Home />
            <Products />
            <Outlet />
            <GridProducts />
            <Ourclients />
        </>
    );
}
