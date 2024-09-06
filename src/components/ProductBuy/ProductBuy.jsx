import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import "./style.scss";

function ProductBuy() {
    const {
        state: {
            targetProduct: { buyOptions, discountPercent, selectedBuyOption },
        },
        actions: { setBuyOption },
    } = useContext(ProductContext);
    const { category } = useParams();

    function discount(price = buyOptions[selectedBuyOption]) {
        const result = price - price * (discountPercent / 100);
        return result.toFixed(2);
    }

    return (
        <section className="buySection">
            <div className="productBuyOptions">
                {Object.entries(buyOptions || {}).map(([option, price]) => (
                    <div
                        key={option}
                        onClick={() => setBuyOption(option)}
                        className={`buyOption ${
                            selectedBuyOption === option && "buyOption--active"
                        }`}>
                        <span className="buyOption__option">{option}</span>
                        <span className="buyOption__price">
                            {discount(price)}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductBuy;
