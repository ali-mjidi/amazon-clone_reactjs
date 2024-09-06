import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import { useClickOutside } from "@hooks/useClickOutside";
import Icon from "@components/Icon/Icon";
import BookProductBuyOptions from "@components/BookProductBuyOptions/BookProductBuyOptions";
import "./style.scss";

const deliveryCost = (Math.random() * 10 + 5).toFixed(2);

function ProductBuy() {
    const {
        state: {
            targetProduct: { buyOptions, discountPercent, selectedBuyOption },
            userLocation,
        },
    } = useContext(ProductContext);
    const [finalPrice, setFinalPrice] = useState(0);
    const [showReturnInfo, setShowReturnInfo] = useState(false);
    const [showHowReturn, setShowHowReturn] = useState(false);
    const [showDeliveryDetail, setShowDeliveryDetail] = useState(false);
    const { category } = useParams();
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
                    <div className="deliverInfo__cost">
                        No Import Charges & ${deliveryCost} Shipping to &nbsp;
                        {userLocation || "Unknown"}&nbsp;
                        <span
                            className="product__link link deliveryInfo__detail"
                            onClick={() => setShowDeliveryDetail(true)}>
                            <Icon
                                type={`angle${
                                    showDeliveryDetail ? "Up" : "Down"
                                }`}
                            />
                            Details
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
                </div>
            </div>
        </section>
    );
}

export default ProductBuy;
