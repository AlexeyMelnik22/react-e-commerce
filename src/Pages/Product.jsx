import React, {useEffect, useRef, useState} from 'react';
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Rating from "../components/Rating.jsx";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import Colors from "../components/Colors.jsx";
import Sizes from "../components/Sizes.jsx";
import Tabs from "../components/Tabs/Tabs.jsx";
import TabPanel from "../components/Tabs/TabPanel.jsx";
import ReviewBlock from "../components/ReviewBlock.jsx";
import Accordion from "../components/Accordion/Accordion.jsx";
import AccordionItem from "../components/Accordion/Accordion.jsx";
import SectionSell from "../sections/SectionSell.jsx";
import useFetch from "../hooks/useFetch.js";
import getImageUrl from "../hooks/imageUtil.jsx";

const Product = () => {

    const defUrl = "/react-clothes-project/src/assets/";

    const { data: cards, loading, error } = useFetch('data/products.json');
    const { data: reviews, loading: reviewsLoading, error: reviewsError } = useFetch('data/reviews.json');
    const filterTypeNew = 'new';

    const { item } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [thumb, setThumb] = useState(0);
    const [thumbSrc, setThumbSrc] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id'); // "id"
    const activeSize = searchParams.get('size'); // "size"
    const activeColor = searchParams.get('color'); // "color"
    const qnt = searchParams.get('qnt'); // "quantity"

    const selectedProductData = cards?.find(product => product.id === id); //active product params

    const PRODUCT = {
        id: id,
        name: item.replace(/\s*-\s*/g, ' ').toUpperCase(),
        price: selectedProductData?.price,
        oldPrice: selectedProductData?.oldPrice,
        activeColor: activeColor || selectedProductData?.color,
        discount: selectedProductData?.discount,
        activeSize: activeSize || selectedProductData?.size,
        description: "Comfortable cotton T-shirt with multiple color options.",
        colors : selectedProductData?.colors,
        sizes: selectedProductData?.sizes,
        images: {
            red: [`${item}-red.png`, `${item}-red-1.png`, `${item}-red-3.png`],
            black: [`${item}-black.png`, `${item}-black-2.png`, `${item}-black-3.png`],
            green: [`${item}-green.png`, `${item}-green-2.png`, `${item}-green-3.png`],
            yellow: [`${item}-yellow.png`, `${item}yellow-2.png`, `${item}-yellow-3.png`],
            orange: [`${item}-orange.png`, `${item}-orange-2.png`, `${item}-orange-3.png`],
        },
    };

    //filter cards for section like cards
    const filteredProductsNew = cards?.filter(product => {
        return product.type === filterTypeNew;
    });


    const onClickIncreaseHandle = ()=> {
        setQuantity(prevState => prevState + 1)

    }
    const onClickDecreaseHandle = ()=> {
        setQuantity(prevState => prevState - 1)
        quantity === 1 && setQuantity(1)
    }

    useEffect(() => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            if (quantity) params.set("qnt", quantity);
            else params.delete("qnt");
            return params;
        });
    }, [quantity]);


    const [selectedColor, setSelectedColor] = useState(PRODUCT.activeColor);
    const [selectedSize, setSelectedSize] = useState(PRODUCT.activeSize);


    const handleColorClick = (color) => {
        setSelectedColor(color);

        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            if (color) params.set("color", color);
            else params.delete("color");
            return params;
        });

        setThumbSrc("")
        setThumb(0)
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);

        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            if (size) params.set("size", size);
            else params.delete("size");
            return params;
        });
    };

    const OnThumbnailClick = (index, event) => {
        setThumb(index)
        setThumbSrc(event.target.getAttribute("src"))
    }
    return (
        <>
            <Breadcrumbs/>
            <section className="product">
                <div className="product__inner container">
                    <div className="product__thumbnail">
                        <div className="thumbnail">
                            <div className="thumbnail__gallery">
                                <ul className="thumbnail__list">
                                    {PRODUCT.images[selectedColor].map((item, index) => (
                                        selectedColor && (
                                            <li className={`thumbnail__item ${index === thumb ? "active" : ""} `}
                                                onClick={() => OnThumbnailClick(index, event)}>
                                                <img src={getImageUrl("products", PRODUCT.images[selectedColor][index])} alt=""
                                                     className="thumbnail__image"/>
                                            </li>
                                        )

                                    ))}
                                </ul>
                            </div>
                            <div className="thumbnail__main">
                                <img src={thumbSrc ? thumbSrc : getImageUrl("products", PRODUCT.images[selectedColor][0])} alt=""
                                     className="thumbnail__main-image"
                                     id="mainThumbnail"/>
                            </div>
                        </div>
                    </div>
                    <div className="product__info">
                        <h2 className="product__title h2">
                            {PRODUCT.name}
                        </h2>
                        <div className="product__rating">
                            <Rating value={selectedProductData?.rating}/>
                        </div>
                        <div className="product__price">
                            <div className="price">
                                {`${PRODUCT.price ? "$" + PRODUCT.price : ""}`}
                            </div>
                            <div className="price-old">
                                {`${PRODUCT.oldPrice ? "$" + PRODUCT.oldPrice : ""}`}
                            </div>
                            <div className="discount">
                                {PRODUCT.discount}
                            </div>
                        </div>
                        <div className="product__desc">
                            <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
                                breathable fabric, it offers superior comfort and style.</p>
                        </div>
                        <div className="product__colors product__row">
                            <p className="product__row-title">Select Colors</p>
                            <Colors imageColors={PRODUCT.images} imgPath="../images" colors={PRODUCT.colors} activeColor={PRODUCT.activeColor}
                                    handleColorClick={handleColorClick}/>
                        </div>
                        <div className="product__size product__row">
                            <p className="product__row-title">Choose Size</p>
                            <Sizes sizes={PRODUCT.sizes} activeSize={selectedSize} handleSizeClick={handleSizeClick}/>
                        </div>
                        <div className="product__cart">
                            <div className="quantity__selector">
                                <label className="input__field">
                                    <button className="quantity__button minus" onClick={onClickDecreaseHandle}>
                                        <svg className="icon">
                                            <use xlinkHref="/react-clothes-project/images/icons/minus.svg"
                                                 href="/react-clothes-project/icons/minus.svg"></use>
                                        </svg>
                                    </button>
                                    <input type="number" className="quantity__input input__control" value={qnt}
                                           min="1"/>
                                    <button className="quantity__button plus" onClick={onClickIncreaseHandle}>
                                        <svg className="icon">
                                            <use xlinkHref="/react-clothes-project/images/icons/plus.svg"
                                                 href="/react-clothes-project/images/icons/plus.svg"></use>
                                        </svg>
                                    </button>
                                </label>
                            </div>
                            <button className="btn btn__primary btn__max">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tabs-product">
                <div className="tabs-product__inner container">
                    <Tabs defaultActive="details">
                        <TabPanel id="details" label="Details">
                            <p>
                                Meet your new wardrobe essential — a perfect blend of style, comfort, and
                                versatility. Crafted from soft, breathable fabric, this garment ensures all-day
                                comfort while keeping you effortlessly stylish. The modern silhouette pairs
                                seamlessly with both casual and dressy looks, making it a timeless addition to your
                                collection.

                                Made from high-quality cotton and stretchable fabric

                                Lightweight and breathable for everyday wear

                                Tailored fit that flatters every body shape

                                Easy to mix and match for multiple outfit styles

                                Durable stitching for long-lasting use

                                Perfect for: casual outings, daily wear, or layering under jackets and sweaters.

                                Available in multiple colors and sizes to suit your personal style.</p>
                        </TabPanel>

                        <TabPanel id="reviews" label="Reviews">
                            <div className="panel__header">
                                <div className="panel__controls">
                                    <div className="panel__headline">
                                        <h5 className="panel__headline-title h5">All Reviews</h5>
                                        <div className="panel__headline-qnt">
                                            (451)
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button className="btn btn__grey btn__icon">
                                            <svg className="icon" width="24" height="24" viewBox="0 0 24 24"
                                                 fill="black" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.125 11.625V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V11.625C10.875 11.3266 10.9935 11.0405 11.2045 10.8295C11.4155 10.6185 11.7016 10.5 12 10.5C12.2984 10.5 12.5845 10.6185 12.7955 10.8295C13.0065 11.0405 13.125 11.3266 13.125 11.625ZM18.75 18C18.4516 18 18.1655 18.1185 17.9545 18.3295C17.7435 18.5405 17.625 18.8266 17.625 19.125V20.25C17.625 20.5484 17.7435 20.8345 17.9545 21.0455C18.1655 21.2565 18.4516 21.375 18.75 21.375C19.0484 21.375 19.3345 21.2565 19.5455 21.0455C19.7565 20.8345 19.875 20.5484 19.875 20.25V19.125C19.875 18.8266 19.7565 18.5405 19.5455 18.3295C19.3345 18.1185 19.0484 18 18.75 18ZM21 14.25H19.875V3.75C19.875 3.45163 19.7565 3.16548 19.5455 2.9545C19.3345 2.74353 19.0484 2.625 18.75 2.625C18.4516 2.625 18.1655 2.74353 17.9545 2.9545C17.7435 3.16548 17.625 3.45163 17.625 3.75V14.25H16.5C16.2016 14.25 15.9155 14.3685 15.7045 14.5795C15.4935 14.7905 15.375 15.0766 15.375 15.375C15.375 15.6734 15.4935 15.9595 15.7045 16.1705C15.9155 16.3815 16.2016 16.5 16.5 16.5H21C21.2984 16.5 21.5845 16.3815 21.7955 16.1705C22.0065 15.9595 22.125 15.6734 22.125 15.375C22.125 15.0766 22.0065 14.7905 21.7955 14.5795C21.5845 14.3685 21.2984 14.25 21 14.25ZM5.25 15C4.95163 15 4.66548 15.1185 4.4545 15.3295C4.24353 15.5405 4.125 15.8266 4.125 16.125V20.25C4.125 20.5484 4.24353 20.8345 4.4545 21.0455C4.66548 21.2565 4.95163 21.375 5.25 21.375C5.54837 21.375 5.83452 21.2565 6.0455 21.0455C6.25647 20.8345 6.375 20.5484 6.375 20.25V16.125C6.375 15.8266 6.25647 15.5405 6.0455 15.3295C5.83452 15.1185 5.54837 15 5.25 15ZM7.5 11.25H6.375V3.75C6.375 3.45163 6.25647 3.16548 6.0455 2.9545C5.83452 2.74353 5.54837 2.625 5.25 2.625C4.95163 2.625 4.66548 2.74353 4.4545 2.9545C4.24353 3.16548 4.125 3.45163 4.125 3.75V11.25H3C2.70163 11.25 2.41548 11.3685 2.2045 11.5795C1.99353 11.7905 1.875 12.0766 1.875 12.375C1.875 12.6734 1.99353 12.9595 2.2045 13.1705C2.41548 13.3815 2.70163 13.5 3 13.5H7.5C7.79837 13.5 8.08452 13.3815 8.2955 13.1705C8.50647 12.9595 8.625 12.6734 8.625 12.375C8.625 12.0766 8.50647 11.7905 8.2955 11.5795C8.08452 11.3685 7.79837 11.25 7.5 11.25ZM14.25 6.75H13.125V3.75C13.125 3.45163 13.0065 3.16548 12.7955 2.9545C12.5845 2.74353 12.2984 2.625 12 2.625C11.7016 2.625 11.4155 2.74353 11.2045 2.9545C10.9935 3.16548 10.875 3.45163 10.875 3.75V6.75H9.75C9.45163 6.75 9.16548 6.86853 8.9545 7.0795C8.74353 7.29048 8.625 7.57663 8.625 7.875C8.625 8.17337 8.74353 8.45952 8.9545 8.6705C9.16548 8.88147 9.45163 9 9.75 9H14.25C14.5484 9 14.8345 8.88147 15.0455 8.6705C15.2565 8.45952 15.375 8.17337 15.375 7.875C15.375 7.57663 15.2565 7.29048 15.0455 7.0795C14.8345 6.86853 14.5484 6.75 14.25 6.75Z"/>
                                            </svg>
                                        </button>
                                        <button className="btn btn__grey btn__auto btn__select">Latest</button>
                                        <button className="btn btn__primary btn__auto">Write a Review</button>
                                    </div>
                                </div>
                            </div>
                            <div className="panel__body">
                                <div className="reviews-col-2">
                                    {reviews?.map(item => (
                                        <ReviewBlock dataReview={item}/>
                                    ))}
                                </div>
                            </div>
                            <div className="panel__footer">
                                <button className="btn btn__secondary">Load More Reviews</button>
                            </div>
                        </TabPanel>

                        <TabPanel id="faq" label="Faq">
                            <Accordion>
                                <AccordionItem id="acc-1" label="1. What materials are your clothes made from?">
                                    <p>Our garments are crafted from premium fabrics like cotton, linen, and
                                        polyester blends to ensure comfort, durability, and a great fit. Each
                                        product page lists the exact composition.</p>
                                </AccordionItem>
                                <AccordionItem id="acc-2" label="2. How should I choose my size?">
                                    <p>We recommend checking our detailed size chart before purchasing. If
                                        you’re between sizes, consider sizing up for a relaxed fit or down for a
                                        more fitted look.</p>
                                </AccordionItem>

                                <AccordionItem id="acc-3" label="3. How do I care for my clothes?">
                                    <p>Most items can be machine washed in cold water with similar colors. To
                                        extend the life of your clothing, air dry or tumble dry on low. Always
                                        refer to the care label inside your garment.</p>
                                </AccordionItem>
                            </Accordion>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
            <SectionSell titleSection="You might also like"  data={filteredProductsNew}/>
        </>
    );
};

export default Product;