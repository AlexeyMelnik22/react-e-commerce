import React from 'react';

export function TabPanel({ children }) {
    // Тут нічого не робимо, Accordion використовує тільки props і children
    return (
        <div className="tabs__panel active">
            {children}
        </div>
    )
}

export default TabPanel;