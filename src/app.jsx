import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout";
import PageProducts from "./components/PageProducts/PageProducts";
import PageAccesories from "./components/PageAccesories/PageAccesories";
import PageWe from "./components/PageWe/PageWe";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Layout />} />

                <Route path="/products" element={<PageProducts />} />

                <Route path="/accesories" element={<PageAccesories />} />

                <Route path="/we" element={<PageWe />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    );
}
