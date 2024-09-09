import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductProvider from "@context/ProductContext.jsx";
import App from "./App.jsx";
import "./index.scss";

const customTransition = cssTransition({
    enter: "scale-in-top",
    exit: "scale-out-top",
});

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ProductProvider>
            <App />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                newestOnTop={false}
                pauseOnHover={false}
                closeOnClick
                hideProgressBar
                theme="light"
                transition={customTransition}
            />
        </ProductProvider>
    </BrowserRouter>
);
