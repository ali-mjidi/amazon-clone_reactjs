import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";

import { ProductContext } from "@context/ProductContext";
import { useClickOutside } from "@hooks/useClickOutside";
import Icon from "@components/Icon/Icon";
import BookProductBuyOptions from "@components/BookProductBuyOptions/BookProductBuyOptions";
import Button from "@components/Button/Button";
import "./style.scss";

const deliveryCost = (Math.random() * 10 + 5).toFixed(2);

function ProductBuy() {
    const {
        state: {
            targetProduct: { buyOptions, discountPercent, selectedBuyOption },
            userLocation,
        },
        actions: { addToCart },
    } = useContext(ProductContext);
    const quantityValues = [
        ...[...Array(30)].map((_, index) => ({
            value: index + 1,
            label: `Quantity: ${index + 1}`,
        })),
    ];
    const [finalPrice, setFinalPrice] = useState(0);
    const [quantity, setQuantity] = useState(quantityValues[0].value);
    const [showReturnInfo, setShowReturnInfo] = useState(false);
    const [showHowReturn, setShowHowReturn] = useState(false);
    const [showDeliveryDetail, setShowDeliveryDetail] = useState(false);
    const { category, productID } = useParams();
    const returnInfoRef = useClickOutside(hidReturnInfoHandler);
    const deliverDetailRef = useClickOutside(hideDeliveryDetailHandler);

    function discount(price = buyOptions[selectedBuyOption] || 0) {
        const result = price - price * (discountPercent / 100);
        return result.toFixed(2);
    }

    function getDecimal(floatNumber) {
        const floatString = floatNumber.toFixed(2);
        const decimalIndex = floatString.indexOf(".");
        const decimalPart = floatString.substring(decimalIndex + 1);

        return decimalPart;
    }

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

    function hidReturnInfoHandler() {
        setShowReturnInfo(false);
        setShowHowReturn(false);
    }

    function hideDeliveryDetailHandler() {
        setShowDeliveryDetail(false);
    }

    function toggleReturnHandler() {
        setShowHowReturn(show => !show);
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
            {category === "book" && (
                <BookProductBuyOptions discount={discount} />
            )}

            <div className="buyInfo">
                <h3 className="buyInfo__heading">Buy new:</h3>

                <div className="buyInfo__priceWrapper">
                    {discountPercent > 0 && (
                        <span className="buyInfo__discountPercent">
                            -{discountPercent}%
                        </span>
                    )}
                    <span
                        className="buyInfo__price"
                        data-decimal={getDecimal(+finalPrice)}>
                        {parseInt(finalPrice)}
                    </span>
                    {discountPercent > 0 && (
                        <span className="buyInfo__originalPriceWrapper">
                            List Price:&nbsp;
                            <span className="buyInfo__originalPrice">
                                ${buyOptions && buyOptions[selectedBuyOption]}
                            </span>
                        </span>
                    )}
                </div>

                <section
                    className="buyInfo__returnInfo"
                    onClick={() => setShowReturnInfo(true)}
                    ref={returnInfoRef}>
                    <p className="product__link link">
                        FREE International Returns
                    </p>
                    <Icon type="angleDown" />

                    <div
                        className={`returnInfo ${
                            showReturnInfo && "returnInfo--show"
                        }`}>
                        <h3 className="returnInfo__heading">
                            Return this item for free
                        </h3>

                        <p className="returnInfo__content">
                            Free returns are available for the shipping address
                            you chose. You can return the item for any reason in
                            new and unused condition: no return shipping
                            charges.
                        </p>

                        <a href="#" className="product__link link">
                            Learn more about free returns
                        </a>

                        <p
                            className="returnInfo__howBtn product__link link"
                            onClick={toggleReturnHandler}>
                            <Icon
                                type={`angle${showHowReturn ? "Up" : "Down"}`}
                                color="black"
                            />{" "}
                            How to return the item?
                        </p>

                        <div
                            className={`returnInfo__howWrapper ${
                                showHowReturn && "returnInfo__howWrapper--show"
                            }`}>
                            <ol className="returnInfo__howList">
                                <li className="returnInfo__howItem">
                                    Go to your orders and start the return
                                </li>
                                <li className="returnInfo__howItem">
                                    Select your preferred free shipping option
                                </li>
                                <li className="returnInfo__howItem">
                                    Drop off and leave!
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>

                <div className="deliveryInfo">
                    <div className="deliveryInfo__cost">
                        No Import Charges & ${deliveryCost} Shipping to&nbsp;
                        {userLocation || "your location"}&nbsp;
                        <span
                            className="product__link link deliveryInfo__detail"
                            onClick={() => setShowDeliveryDetail(true)}>
                            Details
                            <Icon
                                type={`angle${
                                    showDeliveryDetail ? "Up" : "Down"
                                }`}
                                className="icon"
                            />
                        </span>
                        <div
                            ref={deliverDetailRef}
                            className={`deliverShippingInfo ${
                                showDeliveryDetail &&
                                "deliverShippingInfo--show"
                            }`}>
                            <h3 className="deliverShippingInfo__heading">
                                Shipping &amp; Fee Details
                            </h3>
                            <ul className="deliverShippingInfo__detailList">
                                <li className="deliverShippingInfo__detailItem">
                                    Price
                                    <span className="cost">{finalPrice}</span>
                                </li>
                                <li className="deliverShippingInfo__detailItem">
                                    AmazonGlobal Shipping
                                    <span className="cost">{deliveryCost}</span>
                                </li>
                                <li className="deliverShippingInfo__detailItem">
                                    Estimated Import Charges
                                    <span className="cost">
                                        {(0).toFixed(2)}
                                    </span>
                                </li>
                            </ul>

                            <p className="deliverShippingInfo__totalCost">
                                Total
                                <span className="cost">
                                    {+deliveryCost + +finalPrice}
                                </span>
                            </p>
                        </div>
                    </div>

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
