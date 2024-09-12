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
                        {/* 
							Shows the full stars
						*/}
                        {[...Array(Math.floor(productInfo?.rating) || 0)].map(
                            (_, index) => (
                                <Icon
                                    key={index}
                                    type="star"
                                    className="fullStar"
                                />
                            )
                        )}

                        {/* 
							Check that if the rate is float, 
							then show the half star for decimal part of rate
						*/}
                        {!!(
                            productInfo?.rating -
                            Math.floor(productInfo?.rating)
                        ) && <Icon type="halfStar" className="halfStar" />}

                        {/* 
							Show emptyStars for rates less than 4
						*/}
                        {productInfo?.rating < 4 &&
                            [
                                ...Array(
                                    Math.ceil(4 - productInfo?.rating) || 0
                                ),
                            ].map((_, index) => (
                                <Icon
                                    key={index}
                                    type="emptyStar"
                                    className="emptyStar"
                                />
                            ))}

                        {/* 
							Checks that if the rate is integer and lte than 4 then show a emptyStar Icon
						*/}
                        {productInfo?.rating % 1 === 0 &&
                            productInfo?.rating <= 4 && (
                                <Icon type="emptyStar" className="emptyStar" />
                            )}
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
