import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import CartItem from "@components/CartItem/CartItem";
import Button from "@components/Button/Button";
import "./style.scss";

function Cart() {
    const {
        state: { cart },
    } = useContext(ProductContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        // --------------------- just for development
        setTotalPrice(0);
        setTotalQuantity(0);
        // --------------------- just for development

        cart.map(item => {
            setTotalPrice(total => total + item.price * item.quantity);
            setTotalQuantity(total => total + item.quantity);

            return item;
        });
    }, [cart]);

    const emptyCartElement = (
        <div className="emptyCart">
            <h2 className="emptyCart__heading">Your Amazon Basket is empty</h2>
            <p className="emptyCart__text">
                Check products page for shopping.&nbsp;
                <Link to="/" className="emptyCart__link link">
                    continue shopping
                </Link>
            </p>
        </div>
    );

    const subtotal = (
        <h3 className="subtotal">
            Subtotal ({totalQuantity} item{totalQuantity > 1 && "s"}
            ): <span className="subtotal__cost">${totalPrice.toFixed(2)}</span>
        </h3>
    );

    return (
        <main className="cart">
            {!!cart.length && (
                <>
                    <section className="cart__proceed">
                        {subtotal}
                        <Button
                            className="cart__proceedBtn"
                            onClick={() => null}>
                            Proceed to checkout
                        </Button>
                    </section>

                    <section className="cart__items">
                        <div className="cartHeader">
                            <h2 className="cartHeader__title">Shopping cart</h2>
                            <span className="cartHeader__priceTag">Price</span>
                        </div>

                        <div className="cartProducts">
                            {cart.map(item => (
                                <CartItem key={item.id} itemData={item} />
                            ))}
                        </div>

                        <div className="cart__footer">{subtotal}</div>
                    </section>
                </>
            )}

            {!cart.length && emptyCartElement}
        </main>
    );
}

export default Cart;
