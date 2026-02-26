import React from 'react';
import Rating from "./Rating.jsx";

const ReviewBlock = (props) => {
    const {
        dataReview
    } = props
    return (
        <div className="review-block">
            <div className="review-block__inner">
                <div className="review-block__rating">
                    <Rating value={dataReview.rating}/>
                </div>
                <h6 className="review-block__name h6">
                    {dataReview.name}
                    <span className="review-block__name-check">
                        <svg className="icon" width="24" height="24">
                            <use href="images/sprite.svg#circle-check-green"></use>
                        </svg>
                    </span>
                </h6>
                <p className="review-block__desc">
                    {dataReview.text}
                </p>
                {dataReview.date ?
                    <div className="review-block__date">
                    {dataReview.date}
                </div> :
                ""}

            </div>
        </div>
    );
};

export default ReviewBlock;