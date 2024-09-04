import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ProductContext } from "@context/ProductContext";
import Icon from "@components/Icon/Icon";
import "./style.scss";

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
            slidesPerView="auto"
            spaceBetween={28}
            breakpoints={{
                1028: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
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
