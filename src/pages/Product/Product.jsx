import { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import { ProductContext } from "@context/ProductContext";
import Icon from "@components/Icon/Icon";
import "./style.scss";

function Product() {
    const {
        state: { targetProduct: productInfo },
        actions: { setTargetProduct, getSingleProduct },
    } = useContext(ProductContext);
    const [additionalInfo, setAdditionalInfo] = useState({
        activeImage: 0,
        showFullDescription: false,
    });
    const { category, productID } = useParams();
    // const descriptionElement = useRef();

    function handleChangeImage(index) {
        setAdditionalInfo(state => ({ ...state, activeImage: index }));
    }

    function handleShowMore() {
        setAdditionalInfo(state => ({
            ...state,
            showFullDescription: !state.showFullDescription,
        }));
    }

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

    useEffect(() => {
        getSingleProduct(productID);

        return () => {
            setTargetProduct({});
        };
    }, []);

    return (
        <div className="product">
            <div className="product__visualInformation">
                <div className="product__imagesWrapper">
                    <img
                        className="product__thumbnail"
                        src={productInfo?.imageLink?.at(
                            additionalInfo.activeImage
                        )}
                        alt={productInfo?.title}
                    />

                    <div className="product__otherImagesWrapper">
                        {productInfo?.imageLink?.map((link, index) => (
                            <img
                                key={index}
                                className={`product__otherImage ${
                                    additionalInfo.activeImage === index &&
                                    "product__otherImage--active"
                                }`}
                                src={link}
                                alt={productInfo?.title}
                                onPointerEnter={() => handleChangeImage(index)}
                            />
                        ))}
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem saepe voluptatum quas cum debitis rerum, ad
                    iusto fugiat illo maiores molestiae sequi cumque,
                    repellendus sit expedita adipisci pariatur hic ducimus.
                </p>
            </div>
            <div className="product__info">
                <h1 className="product__title">{productInfo?.title}</h1>
                <p className="product__author">
                    By&nbsp;
                    <a href="#" className="product__link link">
                        {productInfo?.author}
                    </a>
                </p>
                <div className="rating">
                    <div className="rating__rate">
                        <span className="rating__number">
                            {productInfo?.rating}
                        </span>
                        <div className="rating__iconsWrapper">
                            {[
                                ...Array(Math.floor(productInfo?.rating) || 5),
                            ].map((_, index) => (
                                <Icon key={index} type="star" color="#de7921" />
                            ))}

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
                <section
                    // ref={descriptionElement}
                    className={`product__description product__description${
                        additionalInfo.showFullDescription && "--full"
                    }`}>
                    {parse(productInfo?.description || "")}
                </section>
                <button
                    className="product__readMoreBtn"
                    onClick={handleShowMore}>
                    <Icon
                        type={`angle${
                            additionalInfo.showFullDescription ? "Up" : "Down"
                        }`}
                        size={12}
                    />
                    <span className="product__link link">
                        Read&nbsp;
                        {additionalInfo.showFullDescription ? "Less" : "More"}
                    </span>
                </button>

                <a className="product__report product__link link">
                    <Icon type="report" size={20} className="reportIcon" />
                    Report an issue with this product or seller
                </a>
            </div>
            <div className="product__buy"></div>
        </div>
    );
}

export default Product;
