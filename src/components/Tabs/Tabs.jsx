import React, {useState} from 'react';
import { Children, cloneElement, isValidElement } from "react";

export function Tabs({ children, defaultActive }) {
    const childArray = Children.toArray(children);
    const firstId = childArray[0]?.props.id;
    const [activeId, setActiveId] = useState(defaultActive || firstId);

    return (
        <>
            {/* Заголовки вкладок */}
            <div className="tabs" data-tabs="tabs-product">
                <div className="tabs__nav">
                    {childArray.map((child) => {
                        if (!isValidElement(child)) return null;
                        const {id, label} = child.props;
                        const isActive = id === activeId;

                        return (
                            <button key={id} onClick={() => setActiveId(id)}
                                    className={`tabs__trigger ${isActive ? "active" : ""}`} type="button"
                                    id="Details"> {label}</button>
                        );
                    })}
                </div>
            </div>
            {/* Контент активної вкладки */}
            <div className="tabs__content">
                {childArray.map((child) => {
                    if (!isValidElement(child)) return null;
                    if (child.props.id !== activeId) return null;
                    // Повертаємо саме той Tab, але тільки його children
                    return cloneElement(child, {key: child.props.id});
                })}
            </div>
        </>
    );
}

export default Tabs;