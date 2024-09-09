import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Zoom, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductProvider from "@context/ProductContext.jsx";
import App from "./App.jsx";
import "./index.scss";

// const customTransition = cssTransition({
//     enter: "animate__animated animate__zoomIn",
//     exit: "animate__animated animate__zoomOut",

// });

const customTransition = cssTransition({
    enter: "scale-in-top",
    exit: "scale-out-top",
	collapseDuration: "300"
});

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ProductProvider>
            <App />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover={false}
                theme="light"
                // transition={Zoom}
                transition={customTransition}
            />
        </ProductProvider>
    </BrowserRouter>
);
