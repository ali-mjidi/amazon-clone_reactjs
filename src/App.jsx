import { Routes, Route } from "react-router-dom";

import Layout from "@components/Layout/Layout";
import Home from "@pages/Home/Home";
import Cart from "@pages/Cart/Cart";
import Product from "@pages/Product/Product";
import NotFound from "@pages/NotFound/NotFound";
import "./App.scss";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route element={<Home />} index />
                <Route path="/cart" element={<Cart />} />
                <Route
                    path="/product/:category/:productID"
                    element={<Product />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
