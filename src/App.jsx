import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@components/Layout/Layout";
import Home from "@pages/Home/Home";
import NotFound from "@pages/NotFound/NotFound";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
					<Route element={<Home />} index />
					<Route path="*" element={<NotFound />} />
				</Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
