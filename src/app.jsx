import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout";
import PageProducts from "./components/PageProducts/PageProducts";
import PageAccesories from "./components/PageAccesories/PageAccesories";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Layout />} />

                <Route path="/products" element={<PageProducts />} />
                
                <Route path="/accesories" element={<PageAccesories />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
