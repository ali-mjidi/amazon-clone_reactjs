import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import ProductImages from "@components/ProductImages/ProductImages";
import ProductTitle from "@components/ProductTitle/ProductTitle";
import ProductDescription from "@components/ProductDescription/ProductDescription";
import BookProductDetails from "@components/BookProductDetails/BookProductDetails";
import BookAuthor from "@components/BookAuthor/BookAuthor";
import ProductBuy from "@components/ProductBuy/ProductBuy";
import ProductBuyOptions from "@components/ProductBuyOptions/ProductBuyOptions";
import ProductSkeleton from "@components/ProductSkeleton/ProductSkeleton";
import "./style.scss";

function Product() {
    const {
        state: { targetProduct: productInfo },
        actions: { setTargetProduct, getSingleProduct },
    } = useContext(ProductContext);
    const { category, productID } = useParams();
    const [isProductEmpty, setIsProductEmpty] = useState(false);

    useEffect(() => {
        getSingleProduct(productID);

        return () => {
            setTargetProduct(null);
        };
    }, []);

    useEffect(() => {
        if (productInfo !== null) {
            setIsProductEmpty(!Boolean(Object.keys(productInfo).length));
        }
    }, [productInfo]);

    if (!productInfo || Object.keys(productInfo).length === 1) {
        return <ProductSkeleton />;
    } else {
        return (
            <div className={`product ${category}`}>
                <div className="product__visualInformation">
                    <ProductImages />

                    {category === "book" && <BookAuthor />}
                </div>
                <div className="product__info">
                    <ProductTitle />

                    {category !== "book" && <ProductBuyOptions />}

                    <ProductDescription />

                    {category === "book" && <BookProductDetails />}
                </div>
                <ProductBuy />

                {isProductEmpty && <Navigate to="/notFound" />}
            </div>
        );
    }
}

export default Product;
