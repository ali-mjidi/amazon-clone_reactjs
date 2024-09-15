import { useState, useContext } from "react";

import { ProductContext } from "@context/ProductContext";
import Skeleton from "@components/Skeleton/Skeleton";
import "./style.scss";

function ProductImages({ setIsLoad }) {
    const {
        state: { targetProduct: productInfo },
    } = useContext(ProductContext);
    const [activeImage, setActiveImage] = useState(0);
    const [isImageLoad, setIsImageLoad] = useState(false);

    function handleChangeImage(index) {
        setActiveImage(index);
    }

    if (productInfo) {
        return (
            <div className="product__imagesWrapper">
                <div className="product__thumbnailWrapper">
                {!isImageLoad && (
                    <Skeleton type="square" width="100%" height="400px" />
                )}
                    <div className="product__otherImagesWrapper">
                        {productInfo?.imageLink?.map((link, index) => (
                            <img
                                key={index}
                                className={`product__otherImage ${
                                    activeImage === index &&
                                    "product__otherImage--active"
                                }`}
                                src={link}
                                alt={productInfo?.title}
                                onPointerEnter={() => handleChangeImage(index)}
                            />
                        ))}
                    </div>
					
                    <img
                        className={`product__thumbnail ${
                            !isImageLoad && "product__thumbnail--loading"
                        }`}
                        src={productInfo?.imageLink?.at(activeImage)}
                        alt={productInfo?.title}
                        onLoad={() => setIsImageLoad(true)}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div className="product">
                <div className="product__imagesWrapper">
                    <div className="product__thumbnail">
                        <Skeleton type="square" />
                    </div>
                    <div className="product__otherImagesWrapper">
                        <Skeleton
                            type="square"
                            count={5}
                            parent="product__otherImage"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductImages;
