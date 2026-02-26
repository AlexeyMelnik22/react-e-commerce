import React, {Children} from 'react';

const Button = (props) => {
    const {
        className = "",
        type = "button",
        children,
    } = props
    return (
        <button type={type} className={`btn ${className}`}>
            {children}
        </button>
    );
};

export default Button;