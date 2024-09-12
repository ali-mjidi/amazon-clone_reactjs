import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import { ProductContext } from "@context/ProductContext";
import Icon from "@components/Icon/Icon";
import "swiper/scss";
import "./style.scss";

function ProductsWrapper({ category }) {
    let {
        state: { products },
    } = useContext(ProductContext);
    products = products.filter(
        ({ category: productCategory }) => productCategory === category
    );

    return (
        <Swiper
            className="productsWrapper"
            modules={[Navigation]}
            slidesPerView={5}
            slidesPerGroup={5}
            navigation={{
                nextEl: ".productsWrapper__btn--next",
                prevEl: ".productsWrapper__btn--prev",
                disabledClass: "productsWrapper__btn--disabled",
            }}>
            {products
                .slice(0, 10)
                .map(({ id, category, productInfo: { imageLink, title } }) => (
                    <SwiperSlide className="slide" key={id}>
                        <Link
                            to={`/product/${category}/${id}`}
                            className="productCard">
                            <img
                                src={imageLink}
                                alt={title}
                                className="productCard__image"
                            />
                            <h3 className="productCard__title">{title}</h3>
                        </Link>
                    </SwiperSlide>
                ))}

            <Icon
                type="prev"
                className="productsWrapper__btn productsWrapper__btn--prev"
            />
            <Icon
                type="next"
                className="productsWrapper__btn productsWrapper__btn--next"
            />
        </Swiper>
    );
}

export default ProductsWrapper;
