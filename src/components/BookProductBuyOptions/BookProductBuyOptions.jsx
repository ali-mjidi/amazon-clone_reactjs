import { useContext } from "react";

import { ProductContext } from "@context/ProductContext";
import "./style.scss";

/*
	This is the book buy options information that placed above the product's price.
	This component shows only when the product is book
*/

function BookProductBuyOptions({ discount }) {
    const {
        state: {
            targetProduct: { buyOptions, selectedBuyOption },
        },
        actions: { setBuyOption },
    } = useContext(ProductContext);

    return (
        <div className="productBuyOptions">
			{/* 
				This checks that if buyOptions is not undefined at first then show data
			*/}
            {buyOptions && Object.entries(buyOptions).map(([option, price]) => (
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
