import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Icon from "@components/Icon/Icon";
import "swiper/scss";
import "./style.scss";

function ProductsWrapper() {
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
            {[...Array(20)].map((_, index) => (
                <SwiperSlide className="slide">Slide {index + 1}</SwiperSlide>
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
