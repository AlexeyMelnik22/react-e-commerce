import React, {useState, useEffect} from 'react';
import Hero from "../sections/Hero.jsx";
import BrandLine from "../sections/Brandline.jsx";
import SectionSell from "../sections/SectionSell.jsx";
import BrowseBy from "../sections/BrowseBy.jsx";
import Reviews from "../components/Reviews.jsx";
import useFetch from '../hooks/useFetch.js';

const Home = () => {

    const { data: reviews, loading: reviewsLoading, error: reviewsError } = useFetch('data/reviews.json');
    const { data: cardsNew, loading: cardsNewLoading, error: cardsNewError } = useFetch('data/products.json');
    const { data: cardsTop, loading: cardsTopLoading, error: cardsTopError } = useFetch('data/products.json');

    const [filterTypeNew, setFilterTypeNew] = useState('new');
    const [filterTypeTop, setFilterTypeTop] = useState('top');



    // Фільтр за type
    const filteredProductsNew = cardsNew?.filter(product => {
        return product.type === filterTypeNew;
    });
    const filteredProductsTop = cardsTop?.filter(product => {
        return product.type === filterTypeTop;
    });

    return (
        <>
            <Hero/>
            <BrandLine/>
            <SectionSell titleSection="NEW ARRIVALS" loading={cardsNewLoading} error={cardsNewError} data={filteredProductsNew} imgPath="images"/>
            <SectionSell titleSection="TOP SELLING" loading={cardsTopLoading} error={cardsTopError} data={filteredProductsTop} imgPath="images"/>
            <BrowseBy/>
            <Reviews dataReviews={reviews} loading={reviewsLoading} error={reviewsError}/>
        </>
    );
};

export default Home;