import React, {useState} from 'react';

const Accordion = (props) => {
    const {
        title,
        className,
        children
    } = props
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`accordion ${className}`}>
            <div className={`accordion__item ${isActive ? "open" : ""}`}>
                <div className="accordion__header" onClick={() => setIsActive(!isActive)}>
                    <h6 className="h6">{title}</h6>
                </div>
                <div className="accordion__content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;