import React, {useState, useEffect} from 'react';
import Hero from "../sections/Hero.jsx";
import BrandLine from "../sections/Brandline.jsx";
import SectionSell from "../sections/SectionSell.jsx";
import BrowseBy from "../sections/BrowseBy.jsx";
import Reviews from "../components/Reviews.jsx";
import useFetch from '../hooks/useFetch.js';
import {supabase} from "../supabaseClient.js";

const Home = () => {

    // const { data: reviews, loading: reviewsLoading, error: reviewsError } = useFetch('data/reviews.json');
    const { data: cardsNew, loading: cardsNewLoading, error: cardsNewError } = useFetch('data/products.json');
    const { data: cardsTop, loading: cardsTopLoading, error: cardsTopError } = useFetch('data/products.json');
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const filterTypeNew = 'new';
    const filterTypeTop = 'top';


    const filteredProductsNew = cardsNew?.filter(product => {
        return product.type === filterTypeNew;
    });
    const filteredProductsTop = cardsTop?.filter(product => {
        return product.type === filterTypeTop;
    });

    // Downloading database Supabase
    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            // .select('*') means "take all columns"
            const { data, error } = await supabase
                .from('reviews')
                .select('*')
                .order('id', { ascending: false }); // Нові зверху

            if (error) throw error;
            if (data) setReviews(data);
        } catch (error) {
            console.error("Помилка завантаження з Supabase:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Hero/>
            <BrandLine id="brands"/>
            <SectionSell id="new-arrivals" titleSection="NEW ARRIVALS" loading={cardsNewLoading} error={cardsNewError} data={filteredProductsNew} imgPath="images"/>
            <SectionSell id="top-selling" titleSection="TOP SELLING" loading={cardsTopLoading} error={cardsTopError} data={filteredProductsTop} imgPath="images"/>
            <BrowseBy/>
            <Reviews dataReviews={reviews} />
        </>
    );
};

export default Home;