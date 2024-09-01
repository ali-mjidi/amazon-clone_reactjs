import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "./style.scss";

function ProductsWrapper() {
    return (
        <Swiper
            className="productsWrapper"
            modules={[Navigation]}
            slidesPerView={5}
            slidesPerGroup={5}
            navigation={{
                nextEl: ".productsWrapper__Btn--next",
                prevEl: ".productsWrapper__Btn--prev",
            }}>
            <SwiperSlide className="slide">Slide 1</SwiperSlide>
            <SwiperSlide className="slide">Slide 2</SwiperSlide>
            <SwiperSlide className="slide">Slide 3</SwiperSlide>
            <SwiperSlide className="slide">Slide 4</SwiperSlide>
            <SwiperSlide className="slide">Slide 5</SwiperSlide>
            <SwiperSlide className="slide">Slide 6</SwiperSlide>
            <SwiperSlide className="slide">Slide 7</SwiperSlide>
            <SwiperSlide className="slide">Slide 8</SwiperSlide>
            <SwiperSlide className="slide">Slide 9</SwiperSlide>
            <SwiperSlide className="slide">Slide 10</SwiperSlide>
            <SwiperSlide className="slide">Slide 11</SwiperSlide>
            <SwiperSlide className="slide">Slide 12</SwiperSlide>
            <SwiperSlide className="slide">Slide 13</SwiperSlide>
            <SwiperSlide className="slide">Slide 14</SwiperSlide>
            <SwiperSlide className="slide">Slide 15</SwiperSlide>
            <SwiperSlide className="slide">Slide 16</SwiperSlide>
            <SwiperSlide className="slide">Slide 17</SwiperSlide>
            <SwiperSlide className="slide">Slide 18</SwiperSlide>
            <SwiperSlide className="slide">Slide 19</SwiperSlide>
            <SwiperSlide className="slide">Slide 20</SwiperSlide>

            <div className="productsWrapper__Btn productsWrapper__Btn--prev">
                prev
            </div>
            <div className="productsWrapper__Btn productsWrapper__Btn--next">
                next
            </div>
        </Swiper>
    );
}

export default ProductsWrapper;
