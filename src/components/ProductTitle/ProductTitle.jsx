import { useContext } from "react";

import { ProductContext } from "@context/ProductContext";
import Icon from "@components/Icon/Icon";
import "./style.scss";

function ProductTitle() {
    const {
        state: { targetProduct: productInfo },
    } = useContext(ProductContext);

    function formatNumber(number = 0) {
        const integerPart = number.toString();
        const formattedInteger = [];
        let count = 0;

        for (let i = integerPart.length - 1; i >= 0; i--) {
            formattedInteger.unshift(integerPart[i]);
            count++;
            if (count % 3 === 0 && i !== 0) {
                formattedInteger.unshift(",");
            }
        }

        return formattedInteger.join("");
    }

    return (
        <>
            <h1 className="product__title">{productInfo?.title}</h1>
            <p className="product__author">
                By&nbsp;
                <a href="#" className="product__link link">
                    {productInfo?.creator?.at(0)?.name}
                </a>
            </p>
            <div className="rating">
                <div className="rating__rate">
                    <span className="rating__number">
                        {productInfo?.rating}
                    </span>
                    <div className="rating__iconsWrapper">
                        {[...Array(Math.floor(productInfo?.rating) || 5)].map(
                            (_, index) => (
                                <Icon key={index} type="star" color="#de7921" />
                            )
                        )}

                        {productInfo?.rating -
                        Math.floor(productInfo?.rating) ? (
                            <Icon type="halfStar" color="#de7921" />
                        ) : null}
                    </div>
                </div>

                <a href="#" className="rating__count product__link link">
                    {formatNumber(productInfo?.rateCounts)} ratings
                </a>
            </div>
        </>
    );
}

export default ProductTitle;
