import React, {Children} from 'react';

const Button = (props) => {
    const {
        className = "",
        type = "button",
        children,
        onClick
    } = props
    return (
        <button type={type} className={`${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;