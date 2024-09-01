import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Products_API from "@api";
import "./style.scss";

function Product() {
    const { productID } = useParams();

    async function getProduct() {
        const { data } = await Products_API(`products/${productID}`);

		console.log(data)
    }

	useEffect(() => {
		getProduct();
	}, []);

    return (
        <div className="productPage">
            <p>Product Page {productID} </p>
        </div>
    );
}

export default Product;
