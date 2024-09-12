import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Products_API from "@api";

const ProductContext = createContext({
    state: {
        products: [],
        categories: [],
        cart: [],
        targetProduct: null,
        userLocation: "",
    },
    actions: {
        setTargetProduct: () => {},
        getSingleProduct: () => {},
        addToCart: () => {},
        deleteCartItem: () => {},
        updateCartQuantity: () => {},
        setBuyOption: () => {},
    },
});

function productReducer(state, action) {
    switch (action.type) {
        case "SET_ALL_DATA":
            return { ...state, ...action.payload };
        case "SET_TARGET_PRODUCT":
            return { ...state, targetProduct: action.payload };
        case "SET_BUY_OPTION":
            return {
                ...state,
                targetProduct: {
                    ...state.targetProduct,
                    selectedBuyOption: action.payload,
                },
            };
        case "ADD_TO_CART":
            return { ...state, cart: [action.payload, ...state.cart] };
        case "DELETE_FROM_CART":
            const newCart = state.cart;
            newCart.splice(
                newCart.findIndex(({ id }) => id === action.payload),
                1
            );

            return { ...state, cart: newCart };
        case "UPDATE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload.productID) {
                        return {
                            ...item,
                            quantity: action.payload.newQuantity,
                        };
                    } else {
                        return item;
                    }
                }),
            };
        default:
            return state;
    }
}

function ProductProvider({ children }) {
    const initialState = {
        products: [],
        categories: [],
        cart: [],
        targetProduct: null,
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    async function getAllData() {
        const products = await Products_API("products");
        const categories = await Products_API("categories");
        const cart = await Products_API("cart");
        const location = await axios.get(
            "https://get.geojs.io//v1/ip/country/full"
        );

        dispatch({
            type: "SET_ALL_DATA",
            payload: {
                products: products.data,
                categories: categories.data.name,
                cart: cart.data,
                userLocation: location.data,
            },
        });
    }

    async function getSingleProduct(id) {
        dispatch({
            type: "SET_TARGET_PRODUCT",
            payload: { status: "connecting" },
        });

        const request = await Products_API(`products/${id}`);

        if (request.status <= 299 && request.status >= 200) {
            const {
                data: { productInfo },
            } = request;

            dispatch({
                type: "SET_TARGET_PRODUCT",
                payload: {
                    ...productInfo,
                    selectedBuyOption: Object.keys(productInfo.buyOptions).at(
                        0
                    ),
                },
            });
        } else {
            dispatch({
                type: "SET_TARGET_PRODUCT",
                payload: {},
            });
        }
    }

    async function addToCart(product) {
        const sameProductInCart = state.cart.find(
            item => item.productID === product.productID
        );

        if (
            !sameProductInCart ||
            sameProductInCart.selectedBuyOption !== product.selectedBuyOption
        ) {
            const request = await Products_API.post("cart", product);
            const successText = "Product successfully added to Cart";
            const dispatchObj = {
                type: "ADD_TO_CART",
                payload: product,
            };

            checkStatus(request?.status, successText, dispatchObj);
        } else {
            toast.info("This product is already in Cart");
        }
    }

    async function deleteCartItem(id) {
        const request = await Products_API.delete(`cart/${id}`);
        const successText = "Successfully deleted";
        const dispatchObj = {
            type: "DELETE_FROM_CART",
            payload: id,
        };

        checkStatus(request?.status, successText, dispatchObj);
    }

    async function updateCartQuantity(id, newQuantity) {
        if (newQuantity === 0) {
            deleteCartItem(id);
        } else {
            const request = await Products_API.patch(`cart/${id}`, {
                quantity: newQuantity,
            });
            const successText = "Quantity successfully updated";
            const dispatchObj = {
                type: "UPDATE_QUANTITY",
                payload: {
                    id,
                    newQuantity,
                },
            };

            checkStatus(request?.status, successText, dispatchObj);
        }
    }

    function checkStatus(status, successText, dispatchObj) {
        if (status >= 200 && status <= 299) {
            toast.success(successText);
            dispatch(dispatchObj);
        } else {
            toast.error("Something happened Wrong, try again");
        }
    }

    function setBuyOption(option) {
        dispatch({ type: "SET_BUY_OPTION", payload: option });
    }

    useEffect(() => {
        getAllData();
    }, []);

    const actions = {
        setTargetProduct: targetProduct =>
            dispatch({ type: "SET_TARGET_PRODUCT", payload: targetProduct }),
        getSingleProduct,
        addToCart,
        deleteCartItem,
        updateCartQuantity,
        setBuyOption,
    };

    return (
        <ProductContext.Provider value={{ state, actions }}>
            {children}
        </ProductContext.Provider>
    );
}

export { ProductContext };
export default ProductProvider;
