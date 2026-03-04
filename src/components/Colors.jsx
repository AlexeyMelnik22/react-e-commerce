import React from 'react';
import getImageUrl from "../hooks/imageUtil.jsx";

const Colors = (props) => {
    const {
        colors,
        activeColor,
        handleColorClick,
        imageColors,
    }= props

    return (
        <div className="colors">
            <ul className="colors__list">
                {colors?.map(color => (
                    <div key={color} className="colors__item">
                        <button
                            title={color}
                            className={`color ${activeColor === color ? "is-active" : ""} ${imageColors && (imageColors[`${color}`] ? "" : "inactive") }`}
                            key={color}
                            onClick={() => handleColorClick(color)}
                        >
                            <img src={getImageUrl("colors", `${color}.png`)} alt={color}
                                 title={color}/>
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Colors;