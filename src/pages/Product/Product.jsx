import { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import ProductTitle from "@components/ProductTitle/ProductTitle";
import ProductDescription from "@components/ProductDescription/ProductDescription";
import "./style.scss";

function Product() {
    const {
        state: { targetProduct: productInfo },
        actions: { setTargetProduct, getSingleProduct },
    } = useContext(ProductContext);
    const [additionalInfo, setAdditionalInfo] = useState({
        activeImage: 0,
    });
    const { category, productID } = useParams();

    function handleChangeImage(index) {
        setAdditionalInfo(state => ({ ...state, activeImage: index }));
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
                <ProductTitle />

                <ProductDescription />
            </div>
            <div className="product__buy"></div>
        </div>
    );
}

export default Product;
