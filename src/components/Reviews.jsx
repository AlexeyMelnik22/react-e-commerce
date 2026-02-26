import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import ReviewBlock from "./ReviewBlock.jsx";


const Reviews = (props) => {
    const {
        dataReviews
    } = props
    return (
        <section className="reviews" aria-labelledby="review-title">
            <div className="reviews__header">
                <div className="reviews__header-inner container">
                    <h2 className="reviews__header-headline h2" id="review-title">
                        OUR HAPPY CUSTOMERS
                    </h2>
                </div>
            </div>
            <div className="reviews__body">
                <div className="reviews__body-inner">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="reviews__swiper"
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        loop
                        breakpoints={{
                            // when window width is >= 640px
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1023.98: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1440.98: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {dataReviews.map((item, index) => (
                            <SwiperSlide className="reviews__swipe" key={index}>
                                <ReviewBlock dataReview={item}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>

    );
};

export default Reviews;