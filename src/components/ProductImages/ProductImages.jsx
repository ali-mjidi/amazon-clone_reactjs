import { useState, useContext } from "react";

import { ProductContext } from "@context/ProductContext";
import Skeleton from "@components/Skeleton/Skeleton";
import "./style.scss";

function ProductImages() {
    const {
        state: { targetProduct: productInfo },
    } = useContext(ProductContext);
    const [activeImage, setActiveImage] = useState(0);

    function handleChangeImage(index) {
        setActiveImage(index);
    }

    if (productInfo) {
        return (
            <div className="product__imagesWrapper">
                <div className="product__thumbnailWrapper">
                    <img
                        className="product__thumbnail"
                        src={productInfo?.imageLink?.at(activeImage)}
                        alt={productInfo?.title}
                    />
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
