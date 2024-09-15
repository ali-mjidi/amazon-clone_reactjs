import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";

import { ProductContext } from "@context/ProductContext";
import Icon from "@components/Icon/Icon";
import ProductBuyOptions from "@components/ProductBuyOptions/ProductBuyOptions";
import ProductPriceInfo from "@components/ProductPriceInfo/ProductPriceInfo";
import Button from "@components/Button/Button";
import "./style.scss";

function ProductBuy() {
    const {
        state: {
            targetProduct: { buyOptions, selectedBuyOption },
            userLocation,
        },
        actions: { addToCart, discount },
    } = useContext(ProductContext);
    const quantityValues = [
        ...[...Array(30)].map((_, index) => ({
            value: index + 1,
            label: `Quantity: ${index + 1}`,
        })),
    ];
    const [finalPrice, setFinalPrice] = useState(0);
    const [quantity, setQuantity] = useState(quantityValues[0].value);
    const { category, productID } = useParams();

    function daysAfterToday(dayNumber) {
        let today = new Date();
        let newDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + dayNumber
        );
        return newDate.toLocaleDateString("en-US", {
            weekday: "long",
            day: "2-digit",
            month: "long",
        });
    }

    function changeQuantityHandler(option) {
        setQuantity(option.value);
    }

    function addToCartHandler() {
        const product = {
            id: crypto.randomUUID(),
            productID,
            quantity,
            selectedBuyOption,
            price: finalPrice,
        };
        addToCart(product);
    }

    useEffect(() => {
        if (buyOptions) {
            setFinalPrice(discount());
        }
    }, [selectedBuyOption]);

    return (
        <section className="buySection">
            {category === "book" && <ProductBuyOptions />}

            <div className="buyInfo">
                <h3 className="buyInfo__heading">Buy new:</h3>

                <ProductPriceInfo finalPrice={finalPrice} />

                <div className="deliveryInfo">
                    <div className="deliveryInfo__normalDelivery">
                        Delivery&nbsp;
                        <span className="deliveryDate">
                            {daysAfterToday(7)}
                        </span>
                    </div>

                    <div className="deliveryInfo__fastDelivery">
                        Or fastest delivery&nbsp;
                        <span className="deliveryDate">
                            {daysAfterToday(5)}
                        </span>
                    </div>

                    <p className="deliveryInfo__location product__link">
                        <Icon type="location" className="icon" />
                        Deliver to {userLocation}
                    </p>
                </div>
            </div>

            <form className="orderSection" onSubmit={e => e.preventDefault()}>
                <p className="orderSection__availability">In Stock</p>

                <Select
                    className="quantitySelector"
                    classNamePrefix="quantitySelector"
                    defaultValue={quantityValues[0]}
                    options={quantityValues}
                    onChange={changeQuantityHandler}
                    isSearchable={false}
                />

                <Button
                    className="orderSection__addBtn"
                    onClick={addToCartHandler}>
                    Add to Cart
                </Button>
            </form>

            <ul className="overallInfo">
                <li className="overallInfo__item">
                    <span className="overallInfo__title">Ships from</span>
                    <span className="overallInfo__content">Amazon.com</span>
                </li>
                <li className="overallInfo__item">
                    <span className="overallInfo__title">Sold by</span>
                    <span className="overallInfo__content">Amazon.com</span>
                </li>
                <li className="overallInfo__item">
                    <span className="overallInfo__title">Returns</span>
                    <span className="overallInfo__content">
                        <p className="product__link link">
                            30-day refund/replacement
                        </p>

                        <div className="refundInfo">
                            <h3 className="refundInfo__heading">
                                30-day refund/replacement
                            </h3>

                            <p className="refundInfo__content">
                                This item can be returned in its original
                                condition for a full refund or replacement
                                within 30 days of receipt.
                            </p>

                            <a href="#" className="product__link link">
                                Read full return policy
                            </a>
                        </div>
                    </span>
                </li>
                <li className="overallInfo__item">
                    <span className="overallInfo__title">Payment</span>
                    <span className="overallInfo__content">
                        <p className="product__link link">Secure transaction</p>

                        <div className="paymentInfo">
                            <h3 className="paymentInfo__heading">
                                Your transaction is secure
                            </h3>

                            <p className="paymentInfo__content">
                                We work hard to protect your security and
                                privacy. Our payment security system encrypts
                                your information during transmission. We don’t
                                share your credit card details with third-party
                                sellers, and we don’t sell your information to
                                others. Learn more
                            </p>
                        </div>
                    </span>
                </li>
            </ul>
        </section>
    );
}

export default ProductBuy;
