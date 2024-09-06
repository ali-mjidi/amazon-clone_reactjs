import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import ProductTitle from "@components/ProductTitle/ProductTitle";
import ProductDescription from "@components/ProductDescription/ProductDescription";
import BookProductDetails from "@components/BookProductDetails/BookProductDetails";
import BookAuthor from "@components/BookAuthor/BookAuthor";
import ProductBuy from "@components/ProductBuy/ProductBuy";
import "./style.scss";

function Product() {
    const {
        state: { targetProduct: productInfo },
        actions: { setTargetProduct, getSingleProduct },
    } = useContext(ProductContext);
    const [activeImage, setActiveImage] = useState(0);
    const { category, productID } = useParams();

    function handleChangeImage(index) {
        setActiveImage(index);
    }

    useEffect(() => {
        getSingleProduct(productID);

        return () => {
            setTargetProduct({});
        };
    }, []);

    if (productInfo) {
        return (
            <div className="product">
                <div className="product__visualInformation">
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
                                        onPointerEnter={() =>
                                            handleChangeImage(index)
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {category === "book" && <BookAuthor />}
                </div>
                <div className="product__info">
                    <ProductTitle />

                    <ProductDescription />

                    {category === "book" && <BookProductDetails />}
                </div>
                <ProductBuy />
            </div>
        );
    } else {
        return <p>not found</p>;
    }
}

export default Product;
