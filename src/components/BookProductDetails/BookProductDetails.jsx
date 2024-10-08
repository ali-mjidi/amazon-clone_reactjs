import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ProductContext } from "@context/ProductContext";
import Icon from "@components/Icon/Icon";
import "./style.scss";

/*
	This is the book detail information that placed under the product's description.
	This component shows only when the product is book
*/

function BookProductDetails() {
    const {
        state: {
            targetProduct: { details },
        },
    } = useContext(ProductContext);

    return (
        <Swiper
            className="detail"
            modules={[Navigation]}
            spaceBetween={28}
            breakpoints={{
                1256: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                1028: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            }}
            navigation={{
                nextEl: ".detail__btn--next",
                prevEl: ".detail__btn--prev",
                disabledClass: "detail__btn--disabled",
            }}>
            <Icon type="prev" className="detail__btn detail__btn--prev" />

            {details?.map(({ title, icon, content }, index) => (
                <SwiperSlide className="detail__slide" key={index}>
                    <h3 className="detail__title">{title}</h3>
                    <Icon type={icon} size={20} className="detail__icon" />
                    <span className="detail__content">{content}</span>
                </SwiperSlide>
            ))}

            <Icon type="next" className="detail__btn detail__btn--next" />
        </Swiper>
    );
}

export default BookProductDetails;
