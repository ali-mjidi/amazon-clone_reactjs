import axios from "axios";

const BOOK_API = axios.create({
    baseURL: `https://books.googleapis.com/books/v1/volumes`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    params: {
        maxResults: 10,
        langRestrict: "en",
        key: import.meta.env.VITE_API_KEY,
    },
});

BOOK_API.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        console.log(error);
    }
);

BOOK_API.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        console.log(error.message);
    }
);

export default BOOK_API;
