import React from 'react';

const Sizes = (props) => {
    const {
        sizes,
        activeSize,
        handleSizeClick
    }=props
    return (
        <div className="size">
            <ul className="size__list">
                {sizes.map(size => (
                    <li key={size}
                        className={`size__item ${activeSize === size ? "active" : ""}`}
                        title={size}
                        onClick={() => handleSizeClick(size)}>
                        {size}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sizes;