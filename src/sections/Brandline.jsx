import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay } from 'swiper/modules';
import pradaImg from "../assets/images/brands/prada.svg"
import gucciImg from "../assets/images/brands/gucci.svg"
import calvinKleinImg from "../assets/images/brands/calvin-klein.svg"
import zaraImg from "../assets/images/brands/zara.svg"
import versaceImg from "../assets/images/brands/versace.svg"

const BrandLine = (props) => {
    const {id} = props;
    const slides = [
        <img className="brand__img" src={versaceImg} alt="Versace" width="166"
             height="33"/>,
        <img className="brand__img" src={zaraImg} alt="Zara" width="91" height="38"/>,
        <img className="brand__img" src={gucciImg} alt="Gucci" width="156" height="36"/>,
        <img className="brand__img" src={pradaImg} alt="Prada" width="194" height="31"/>,
        <img className="brand__img" src={calvinKleinImg} alt="Calvin Klein" width="207"
             height="33"/>,
        <img className="brand__img" src={versaceImg} alt="Versace" width="166"
             height="33"/>,
        <img className="brand__img" src={zaraImg} alt="Zara" width="91" height="38"/>,
        <img className="brand__img" src={gucciImg} alt="Gucci" width="156" height="36"/>,];
    return (
        <div className="brand__line" id={id}>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={25}
                slidesPerView={2}
                className="brand__swiper"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                loop
                breakpoints={{
                // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1600: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                    },
            }}
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide className="brand__swipe" key={index}>
                        {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BrandLine;