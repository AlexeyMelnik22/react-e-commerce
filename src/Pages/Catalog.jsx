import React, {useEffect, useState} from 'react';
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Card from "../components/Card.jsx";
import Accordion from "../components/Accordion.jsx";
import Colors from "../components/Colors.jsx";
import Sizes from "../components/Sizes.jsx";
import {Outlet} from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const MIN_PRICE = 0;
const MAX_PRICE = 500;
const ITEMS_PER_PAGE = 8; // qnt cards per page


const categories = ["all", "t-shirt", "shorts", "shirts", "jeans" ]
const colors = ["green","red","yellow","orange","blue-light","blue","purple","rose","white", "black"]
const sizes = ["small", "medium", "large", "x-large"]
const styles = ["all","casual", "formal", "party", "gym"]

const Catalog = () => {

    const { data: cards, loading: cardsLoading, error: cardsError } = useFetch('data/products.json');

    const [activeCategory, setActiveCategory] = useState("all");
    const [activeColor, setActiveColor] = useState("all");
    const [activeSize, setActiveSize] = useState("all");
    const [activeStyle, setActiveStyle] = useState("all");
    const [minPrice, setMinPrice] = useState(MIN_PRICE);
    const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
    const [currentPage, setCurrentPage] = useState(1);
    const filteredCards = cards?.filter(card => {
        const price = Number(card.price);
        const matchesCategory = activeCategory === "all" || card.category === activeCategory;
        const matchesColor = activeColor === "all" || card.color === activeColor; //color to cards
        const matchesSize = activeSize === "all" || card.size === activeSize;
        const matchesStyle = activeStyle === "all" || card.style === activeStyle;
        const matchesPrice = price >= minPrice && price <= maxPrice;
        return matchesCategory && matchesColor && matchesSize && matchesStyle && matchesPrice;
    });

    const totalItems = filteredCards?.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedCards = filteredCards && filteredCards.slice(startIndex, endIndex);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, activeColor, activeSize, minPrice, maxPrice]);


    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePrev = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };
    const handleColorClick = (color) => {
        // toggle: if  toggle reset to "all"
        setActiveColor(prev => (prev === color ? "all" : color));
    };
    const handleSizeClick = (size) => {
        // toggle: if  toggle reset to "all"
        setActiveSize(prev => (prev === size ? "all" : size));
    };
    return (
        <>
            <Breadcrumbs/>
            <section className="catalog">
                <div className="catalog__inner container">
                    <nav className="filters" data-filter="">
                        <ul className="filters__blocks">
                            <li className="filters__block">
                                <div className="filters__main">
                                    <div className="filters__header">
                                        <h6 className="filters__title h6">
                                            Filters
                                        </h6>
                                        <svg className="icon" width="24" height="25" viewBox="0 0 24 25" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.125 12.125V20.75C13.125 21.0484 13.0065 21.3345 12.7955 21.5455C12.5845 21.7565 12.2984 21.875 12 21.875C11.7016 21.875 11.4155 21.7565 11.2045 21.5455C10.9935 21.3345 10.875 21.0484 10.875 20.75V12.125C10.875 11.8266 10.9935 11.5405 11.2045 11.3295C11.4155 11.1185 11.7016 11 12 11C12.2984 11 12.5845 11.1185 12.7955 11.3295C13.0065 11.5405 13.125 11.8266 13.125 12.125ZM18.75 18.5C18.4516 18.5 18.1655 18.6185 17.9545 18.8295C17.7435 19.0405 17.625 19.3266 17.625 19.625V20.75C17.625 21.0484 17.7435 21.3345 17.9545 21.5455C18.1655 21.7565 18.4516 21.875 18.75 21.875C19.0484 21.875 19.3345 21.7565 19.5455 21.5455C19.7565 21.3345 19.875 21.0484 19.875 20.75V19.625C19.875 19.3266 19.7565 19.0405 19.5455 18.8295C19.3345 18.6185 19.0484 18.5 18.75 18.5ZM21 14.75H19.875V4.25C19.875 3.95163 19.7565 3.66548 19.5455 3.4545C19.3345 3.24353 19.0484 3.125 18.75 3.125C18.4516 3.125 18.1655 3.24353 17.9545 3.4545C17.7435 3.66548 17.625 3.95163 17.625 4.25V14.75H16.5C16.2016 14.75 15.9155 14.8685 15.7045 15.0795C15.4935 15.2905 15.375 15.5766 15.375 15.875C15.375 16.1734 15.4935 16.4595 15.7045 16.6705C15.9155 16.8815 16.2016 17 16.5 17H21C21.2984 17 21.5845 16.8815 21.7955 16.6705C22.0065 16.4595 22.125 16.1734 22.125 15.875C22.125 15.5766 22.0065 15.2905 21.7955 15.0795C21.5845 14.8685 21.2984 14.75 21 14.75ZM5.25 15.5C4.95163 15.5 4.66548 15.6185 4.4545 15.8295C4.24353 16.0405 4.125 16.3266 4.125 16.625V20.75C4.125 21.0484 4.24353 21.3345 4.4545 21.5455C4.66548 21.7565 4.95163 21.875 5.25 21.875C5.54837 21.875 5.83452 21.7565 6.0455 21.5455C6.25647 21.3345 6.375 21.0484 6.375 20.75V16.625C6.375 16.3266 6.25647 16.0405 6.0455 15.8295C5.83452 15.6185 5.54837 15.5 5.25 15.5ZM7.5 11.75H6.375V4.25C6.375 3.95163 6.25647 3.66548 6.0455 3.4545C5.83452 3.24353 5.54837 3.125 5.25 3.125C4.95163 3.125 4.66548 3.24353 4.4545 3.4545C4.24353 3.66548 4.125 3.95163 4.125 4.25V11.75H3C2.70163 11.75 2.41548 11.8685 2.2045 12.0795C1.99353 12.2905 1.875 12.5766 1.875 12.875C1.875 13.1734 1.99353 13.4595 2.2045 13.6705C2.41548 13.8815 2.70163 14 3 14H7.5C7.79837 14 8.08452 13.8815 8.2955 13.6705C8.50647 13.4595 8.625 13.1734 8.625 12.875C8.625 12.5766 8.50647 12.2905 8.2955 12.0795C8.08452 11.8685 7.79837 11.75 7.5 11.75ZM14.25 7.25H13.125V4.25C13.125 3.95163 13.0065 3.66548 12.7955 3.4545C12.5845 3.24353 12.2984 3.125 12 3.125C11.7016 3.125 11.4155 3.24353 11.2045 3.4545C10.9935 3.66548 10.875 3.95163 10.875 4.25V7.25H9.75C9.45163 7.25 9.16548 7.36853 8.9545 7.5795C8.74353 7.79048 8.625 8.07663 8.625 8.375C8.625 8.67337 8.74353 8.95952 8.9545 9.1705C9.16548 9.38147 9.45163 9.5 9.75 9.5H14.25C14.5484 9.5 14.8345 9.38147 15.0455 9.1705C15.2565 8.95952 15.375 8.67337 15.375 8.375C15.375 8.07663 15.2565 7.79048 15.0455 7.5795C14.8345 7.36853 14.5484 7.25 14.25 7.25Z"
                                                fill="black" fillOpacity="0.4"/>
                                        </svg>
                                    </div>
                                    <div className="filters__list">
                                        {categories.map(cat => (
                                            <div className="filters__item">
                                                <button
                                                    title={cat}
                                                    className={`filters__link ${activeCategory === cat ? "is-active" : ""}`}
                                                    key={cat}
                                                    onClick={() => setActiveCategory(cat)}
                                                >
                                                    {cat}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li className="filters__block">
                                <Accordion className="accordion__filter" title="Price">
                                    <div className="price-input">
                                        <div className="field">
                                            <span>Min</span>
                                            <input type="number" className="input-min" value={minPrice} min={MIN_PRICE}
                                                   max={maxPrice}
                                                   onChange={e => setMinPrice(Number(e.target.value) || MIN_PRICE)}
                                            />
                                        </div>
                                        <div className="separator">-</div>
                                        <div className="field">
                                            <span>Max</span>
                                            <input type="number" className="input-max" value={maxPrice}
                                                   min={minPrice}
                                                   max={MAX_PRICE}
                                                   onChange={e => setMaxPrice(Number(e.target.value) || MAX_PRICE)}
                                            />
                                        </div>
                                    </div>
                                </Accordion>
                            </li>
                            <li className="filters__block">
                                <Accordion className="accordion__filter" title="Colors">
                                    <Colors colors={colors} activeColor={activeColor} imgPath="images" handleColorClick={handleColorClick}/>
                                </Accordion>
                            </li>
                            <li className="filters__block">
                                <Accordion className="accordion__filter" title="Size">
                                    <Sizes sizes={sizes} activeSize={activeSize} handleSizeClick={handleSizeClick}/>
                                </Accordion>
                            </li>
                            <li className="filters__block">
                                <Accordion className="accordion__filter" title="Dress Style">
                                    <div className="filters__list">
                                        {styles.map(cat => (
                                            <div className="filters__item">
                                                <button
                                                    title={cat}
                                                    className={`filters__link ${activeStyle === cat ? "is-active" : ""}`}
                                                    key={cat}
                                                    onClick={() => setActiveStyle(cat)}
                                                >
                                                    {cat}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </Accordion>
                            </li>
                        </ul>
                    </nav>
                    <div className="catalog__side">
                        <div className="catalog__side-header">
                            <h4 className="catalog__side-title h4">Casual</h4>
                            <div className="sort">
                                <span className="hidden-mobile">Showing 1-10 of 100 Products</span>
                                <div className="sort-by">
                                    Sort by:
                                    <button className="link link-dark link__select">Most Popular</button>
                                </div>
                            </div>
                        </div>
                        <div className="catalog__side-list">

                            {paginatedCards?.map(card => (
                                <Card loading={cardsLoading} error={cardsError} data={card} imgPath="images"/>
                            ))}

                            {paginatedCards?.length === 0 && (
                                <p>Нічого не знайдено за вибраними фільтрами.</p>
                            )}
                        </div>
                        <div className="catalog__side-footer">

                        </div>
                        {/* пагінація */}
                        {totalPages > 1 && (
                            <nav className="pagination">
                                <div className="pagination__inner">
                                    <button type="button" className="pagination__btn pagination__left"
                                            onClick={handlePrev}
                                            disabled={currentPage === 1}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.8332 9.99996H4.1665M4.1665 9.99996L9.99984 15.8333M4.1665 9.99996L9.99984 4.16663"
                                                stroke="black" strokeWidth="1.67" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                        <span className="hidden-mobile">Previous</span>
                                    </button>
                                    <ul className="pagination__list">
                                        {[...Array(totalPages)].map((_, index) => {
                                            const page = index + 1;
                                            return (
                                                <li className={`pagination__item ${page === currentPage ? " active" : ""}`}>
                                                    <button
                                                        key={page}
                                                        onClick={() => handlePageChange(page)}
                                                        className="pagination__link"
                                                    >
                                                        {page}
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <button type="button" className="pagination__btn pagination__right"
                                            onClick={handleNext}
                                            disabled={currentPage === totalPages}>
                                        <span className="hidden-mobile">Next</span>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.1665 9.99996H15.8332M15.8332 9.99996L9.99984 4.16663M15.8332 9.99996L9.99984 15.8333"
                                                stroke="black" strokeWidth="1.67" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </nav>
                        )}
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    );
};

export default Catalog;