import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import "./style.scss";

function ProductBuyOptions() {
    const {
        state: {
            targetProduct: { buyOptions, selectedBuyOption },
        },
        actions: { setBuyOption, discount },
    } = useContext(ProductContext);
    const { category } = useParams();

    return (
        <div
            className={`productBuyOptions ${
                category === "book" && "productBuyOptions--book"
            }`}>
            {/* 
				This checks that if buyOptions is not undefined at first then show data
			*/}
            {buyOptions &&
                Object.entries(buyOptions).map(([option, price]) => (
                    <div
                        key={option}
                        onClick={() => setBuyOption(option)}
                        className={`buyOption ${
                            selectedBuyOption === option && "buyOption--active"
                        }`}>
                        <span className="buyOption__option">{option}</span>
                        {category === "book" && (
                            <span className="buyOption__price">
                                ${discount(price)}
                            </span>
                        )}
                    </div>
                ))}
        </div>
    );
}

export default ProductBuyOptions;
