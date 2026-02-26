import React from 'react';
import { Link, useLocation } from "react-router-dom";

const routeNameMap = {
    "": "Home",
    products: "Products",
    electronics: "Electronics",
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(item => Boolean(item));

    return (
        <nav aria-label="breadcrumbs" className="breadcrumbs">
            <div className="breadcrumbs__inner container">
                <ul className="breadcrumbs__list">
                    <li className="breadcrumbs__item">
                        <Link className="breadcrumbs__link" to="/">Home</Link>
                    </li>
                    {pathnames.map((segment, index) => {
                        const to = "/" + pathnames.slice(0, index + 1).join("/");
                        const isLast = index === pathnames.length - 1;
                        const label = routeNameMap[segment] ?? segment;

                        return (
                            <li key={to} className="breadcrumbs__item">
                                {isLast ? (
                                    <span className="breadcrumbs__last">{label}</span>
                                ) : (
                                    <Link to={to}>
                                        <span className="breadcrumbs__link">{label}</span>
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Breadcrumbs;