import { useState, useEffect, useRef, useContext } from "react";
import parse from "html-react-parser";

import { ProductContext } from "@context/ProductContext";
import Icon from "@components/Icon/Icon";
import "./style.scss";

function ProductDescription() {
    const {
        state: { targetProduct: productInfo },
    } = useContext(ProductContext);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [isDescriptionLong, setIsDescriptionLong] = useState(null);
    const descriptionElement = useRef();

    function handleShowMore() {
        setShowFullDescription(show => !show);
    }

    useEffect(() => {
        if (
            isDescriptionLong === null &&
            descriptionElement.current?.offsetHeight > 0
        ) {
            setIsDescriptionLong(
                descriptionElement.current?.offsetHeight > 260
            );
        }
    }, [descriptionElement.current?.offsetHeight]);

    return (
        <>
            <section
                ref={descriptionElement}
                className={`product__description  ${
                    isDescriptionLong && "product__description--short"
                } ${showFullDescription && "product__description--full"}`}>
                {parse(productInfo?.description || "")}
            </section>

            {isDescriptionLong && (
                <button
                    className="product__readMoreBtn"
                    onClick={handleShowMore}>
                    <Icon
                        type={`angle${showFullDescription ? "Up" : "Down"}`}
                        size={12}
                    />
                    <span className="product__link link">
                        Read&nbsp; {showFullDescription ? "Less" : "More"}
                    </span>
                </button>
            )}

            <a className="product__report product__link link">
                <Icon type="report" size={20} className="reportIcon" />
                Report an issue with this product or seller
            </a>
        </>
    );
}

export default ProductDescription;
