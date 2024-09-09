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
        console.log(error);
        toast.error("Request: " + error.message);
    }
);

Products_API.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        // console.log(error.message);
        toast.error("Response: " + error.message);
    }
);

export default Products_API;
