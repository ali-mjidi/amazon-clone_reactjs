import { useContext } from "react";

import { ProductContext } from "@context/ProductContext";
import "./style.scss";

function BookProductBuyOptions({ discount }) {
    const {
        state: {
            targetProduct: { buyOptions, selectedBuyOption },
        },
        actions: { setBuyOption },
    } = useContext(ProductContext);

    return (
        <div className="productBuyOptions">
            {Object.entries(buyOptions || {}).map(([option, price]) => (
                <div
                    key={option}
                    onClick={() => setBuyOption(option)}
                    className={`buyOption ${
                        selectedBuyOption === option && "buyOption--active"
                    }`}>
                    <span className="buyOption__option">{option}</span>
                    <span className="buyOption__price">${discount(price)}</span>
                </div>
            ))}
        </div>
    );
}

export default BookProductBuyOptions;
