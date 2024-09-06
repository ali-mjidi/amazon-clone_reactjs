import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import { useClickOutside } from "@hooks/useClickOutside";
import Icon from "@components/Icon/Icon";
import BookProductBuyOptions from "@components/BookProductBuyOptions/BookProductBuyOptions";
import "./style.scss";

function ProductBuy() {
    const {
        state: {
            targetProduct: { buyOptions, discountPercent, selectedBuyOption },
        },
    } = useContext(ProductContext);
    const [finalPrice, setFinalPrice] = useState();
    const [showReturnInfo, setShowReturnInfo] = useState(false);
    const [showHowReturn, setShowHowReturn] = useState(false);
    const { category } = useParams();
    const menuRef = useClickOutside(hidReturnInfoHandler);

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

    function hidReturnInfoHandler() {
        setShowReturnInfo(false);
        setShowHowReturn(false);
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
                    ref={menuRef}>
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
            </div>
        </section>
    );
}

export default ProductBuy;
