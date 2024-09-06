import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import BookProductBuyOptions from "@components/BookProductBuyOptions/BookProductBuyOptions";
import "./style.scss";

function ProductBuy() {
    const {
        state: {
            targetProduct: { buyOptions, discountPercent, selectedBuyOption },
        },
    } = useContext(ProductContext);
    const [finalPrice, setFinalPrice] = useState();
    const { category } = useParams();

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
            </div>
        </section>
    );
}

export default ProductBuy;
