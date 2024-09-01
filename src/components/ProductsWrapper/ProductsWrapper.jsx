import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Icon from "@components/Icon/Icon";
import "swiper/scss";
import "./style.scss";

function ProductsWrapper({ products }) {
    return (
        <Swiper
            className="productsWrapper"
            modules={[Navigation]}
            slidesPerView={5}
            slidesPerGroup={5}
            navigation={{
                nextEl: ".productsWrapper__btn--next",
                prevEl: ".productsWrapper__btn--prev",
            }}>
            {products.map(({ productInfo: { id, imageLink, title } }) => (
                <SwiperSlide className="slide" key={id}>
                    <div className="product">
                        <img
                            src={imageLink}
                            alt={title}
                            className="productImage"
                        />
						<h3><span>{title}</span></h3>
                    </div>
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
