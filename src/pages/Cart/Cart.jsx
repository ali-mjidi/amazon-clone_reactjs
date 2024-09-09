import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import "./style.scss";

function Cart() {
    const {
        state: { cart },
    } = useContext(ProductContext);

    console.log(cart);

    const emptyCartElement = (
        <div className="emptyCart">
            <h2 className="emptyCart__heading">Your Amazon Basket is empty</h2>
            <p className="emptyCart__text">
                Check products page for shopping.&nbsp;
                <Link to="/" className="link emptyCart__link">
                    continue shopping
                </Link>
            </p>
        </div>
    );

    return <main className="cart">{!cart.length && emptyCartElement}</main>;
}

export default Cart;
