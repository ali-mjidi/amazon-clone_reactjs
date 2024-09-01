import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Icon from "@components/Icon/Icon";
import "swiper/scss";
import "./style.scss";

const sliderImageLink = [
    "https://ali-amazon.netlify.app/_next/image?url=%2Fimages%2Fproducts%2Fslide1.jpg&w=3840&q=75",
    "https://ali-amazon.netlify.app/_next/image?url=%2Fimages%2Fproducts%2Fslide2.jpg&w=3840&q=75",
    "https://ali-amazon.netlify.app/_next/image?url=%2Fimages%2Fproducts%2Fslide3.jpg&w=3840&q=75",
    "https://ali-amazon.netlify.app/_next/image?url=%2Fimages%2Fproducts%2Fslide4.jpg&w=3840&q=75",
];

function Slider() {
    const swiperInstance = useRef();

    return (
        <>
            <Swiper
                className="slider"
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                }}
                spaceBetween={20}
                slidesPerView={1}
                loop
                onSwiper={swiper => (swiperInstance.current = swiper)}>
                {sliderImageLink.map((image, index) => (
                    <SwiperSlide key={index} className="slider__slide">
                        <img
                            src={image}
                            alt={`slide ${index}`}
                            className="slider__image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="sliderButtons">
                <button
                    className="sliderButtons__btn sliderButtons__btn--prev"
                    onClick={() => swiperInstance.current.slidePrev()}>
                    <Icon type="prev" size={50} color="black" />
                </button>
                <button
                    className="sliderButtons__btn sliderButtons__btn--next"
                    onClick={() => swiperInstance.current.slideNext()}>
                    <Icon type="next" size={50} color="black" />
                </button>
            </div>
        </>
    );
}

export default Slider;
