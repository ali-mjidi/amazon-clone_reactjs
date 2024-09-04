import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import Products_API from "@api";

const ProductContext = createContext({
    state: {
        products: [],
        categories: [],
        cart: [],
        targetProduct: {},
        userLocation: "",
    },
    actions: {
        setProducts: () => {},
        setCategories: () => {},
        setCart: () => {},
        setTargetProduct: () => {},
        getSingleProduct: () => {},
    },
});

function productReducer(state, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "SET_CATEGORIES":
            return { ...state, categories: action.payload };
        case "SET_CART":
            return { ...state, cart: action.payload };
        case "SET_TARGET_PRODUCT":
            return { ...state, targetProduct: action.payload };
        case "SET_LOCATION":
            return { ...state, userLocation: action.payload };
        default:
            return state;
    }
}

function ProductProvider({ children }) {
    const initialState = {
        products: [],
        categories: [],
        cart: [],
        targetProduct: {},
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    async function getAllData() {
        const products = await Products_API("products");
        const categories = await Products_API("categories");
        const cart = await Products_API("cart");

        dispatch({ type: "SET_PRODUCTS", payload: products.data });
        dispatch({ type: "SET_CATEGORIES", payload: categories.data.name });
        dispatch({ type: "SET_CART", payload: cart.data });
        dispatch({ type: "SET_LOCATION", payload: location.data });
    }

    async function getSingleProduct(id) {
        const {
            data: { productInfo },
        } = await Products_API(`products/${id}`);

        dispatch({ type: "SET_TARGET_PRODUCT", payload: productInfo });
    }

    async function getUserLocation() {
        const { data } = await axios.get(
            "https://get.geojs.io//v1/ip/country/full"
        );

        dispatch({ type: "SET_LOCATION", payload: data });
    }

    useEffect(() => {
        getAllData();
        getUserLocation();
    }, []);

    const actions = {
        setProducts: products =>
            dispatch({ type: "SET_PRODUCTS", payload: products }),
        setCategories: categories =>
            dispatch({ type: "SET_CATEGORIES", payload: categories }),
        setCart: cart => dispatch({ type: "SET_CART", payload: cart }),
        setTargetProduct: targetProduct =>
            dispatch({ type: "SET_TARGET_PRODUCT", payload: targetProduct }),
        getSingleProduct,
    };

    return (
        <ProductContext.Provider value={{ state, actions }}>
            {children}
        </ProductContext.Provider>
    );
}

export { ProductContext };
export default ProductProvider;
