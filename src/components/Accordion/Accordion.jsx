import { useState } from "react";
import { Children, isValidElement } from "react";

function Accordion({ children, defaultOpenId }) {
    const childArray = Children.toArray(children);
    const firstId = childArray[0]?.props.id;
    const [openId, setOpenId] = useState(defaultOpenId || firstId);

    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id)); // повторний клік закриває
    };

    return (
        <div className="accordion">
            {childArray.map((child) => {
                if (!isValidElement(child)) return null;

                const { id, label } = child.props;
                const isOpen = id === openId;

                return (
                    <div className={`accordion__item ${isOpen ? "open" : ""}`}
                        key={id}
                    >
                        <div className="accordion__header"
                            onClick={() => handleToggle(id)}
                        >
                            {label}
                        </div>

                        {isOpen && (
                            <div className="accordion__content">
                                {child.props.children}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function AccordionItem({ children }) {
    // Контейнер-заглушка: все робить Accordion
    return <>{children}</>;
}

export { Accordion, AccordionItem };
export default Accordion;