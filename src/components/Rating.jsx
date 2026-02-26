import React from "react";

function Rating({value }) {
    return (
        <div className='block-rating' title={`Rating ${value} star`} aria-label={`Rating ${value} star`}>
            <div className="block-rating__view">
                {Array.from({length: value}, (_, index) => {
                    return (
                        <span className="block-rating__star is-active"
                              key={index}>
                        </span>
                    );
                })}
            </div>
            <div className="block-rating__value">
                {value}/<span>5</span>
            </div>
        </div>
    );
}

export default Rating