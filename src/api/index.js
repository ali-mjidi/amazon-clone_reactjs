import axios from "axios";
import { toast } from "react-toastify";

const Products_API = axios.create({
    baseURL: `http://localhost:3000/`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

Products_API.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        console.error(error);
        toast.error("Request: " + error.message);
    }
);

Products_API.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.error(error);
        toast.error("Response: " + error.message);
    }
);

export default Products_API;
