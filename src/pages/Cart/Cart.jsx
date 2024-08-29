import { useState } from "react";

import "./style.scss";
import { Link } from "react-router-dom";

function Cart() {
    const [products, setProducts] = useState([]);

    const emptyCartElement = (
        <div className="emptyCart">
            <h2 className="emptyCart__heading">Your Amazon Basket is empty</h2>
            <p className="emptyCart__text">
                Check products page for shopping.{" "}
                <Link to="/" className="link emptyCart__link">
                    continue shopping
                </Link>
            </p>
        </div>
    );

    return <div className="cart">{!products.length && emptyCartElement}</div>;
}

export default Cart;
