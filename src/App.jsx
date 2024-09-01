import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@components/Layout/Layout";
import Home from "@pages/Home/Home";
import Cart from "@pages/Cart/Cart";
import Product from "@pages/Product/Product";
import NotFound from "@pages/NotFound/NotFound";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route element={<Home />} index />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:productID" element={<Product />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
