import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Products_API from "@api";
import "./style.scss";

function Product() {
    const [productInfo, setProductInfo] = useState({});
    const [activeImage, setActiveImage] = useState(0);
    const { category, productID } = useParams();

    async function getProduct() {
        const {
            data: { productInfo },
        } = await Products_API(`products/${productID}`);

        setProductInfo(productInfo);
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="product">
            <div className="product__visualInformation">
                <div className="product__imagesWrapper">
                    <img
                        className="product__thumbnail"
                        src={productInfo?.imageLink?.at(activeImage)}
                        alt={productInfo.title}
                    />

                    <div className="product__otherImagesWrapper">
                        {productInfo?.imageLink?.map((link, index) => (
                            <img
                                className={`product__otherImage ${
                                    activeImage === index &&
                                    "product__otherImage--active"
                                }`}
                                src={link}
                                alt={productInfo.title}
                                onPointerEnter={() => setActiveImage(index)}
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
            <div className="product__info"></div>
            <div className="product__buy"></div>
        </div>
    );
}

export default Product;
