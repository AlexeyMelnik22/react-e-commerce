import React, {useState} from 'react';
import Hero from "../sections/Hero.jsx";
import BrandLine from "../sections/Brandline.jsx";
import SectionSell from "../sections/SectionSell.jsx";
import BrowseBy from "../sections/BrowseBy.jsx";
import Reviews from "../components/Reviews.jsx";

const Home = () => {
    const cardsNew = [
        {id: "1", image: "src/assets/images/products/t-shirt-with-tape-details.png", title: "T-SHIRT WITH TAPE DETAILS", ratingStar: 4, rating: "3", price: "120", oldPrice: "", discount: "", category: "t-shirt", color: "green" , size: "small", style: "casual" },
        {id: "2", image: "src/assets/images/products/skinny-fit-jeans.png", title: "SKINNY FIT JEANS", ratingStar: 4, rating: "5", price: "240", oldPrice: "260", discount: "-20", category: "shorts", color: "red" , size: "small", style: "casual" },
        {id: "3", image: "src/assets/images/products/checkered-shirt.png", title: "CHECKERED SHIRT", ratingStar: 5, rating: "4", price: "180", oldPrice: "", discount: "", category: "shirts", color: "yellow" , size: "small", style: "formal" },
        {id: "4", image: "src/assets/images/products/sleeve-striped-t-shirt.png", title: "SLEEVE STRIPED T-SHIRT", ratingStar: 5, rating: "5", price: "130", oldPrice: "160", discount: "-30%", category: "jeans", color: "red" , size: "medium", style: "formal" },
    ]
    const cardsTop = [
        {id: "5", image: "src/assets/images/products/vertical-striped-shirt.png", title: "VERTICAL STRIPED SHIRT", ratingStar: 3, rating: "3", price: "212", oldPrice: "232", discount: "-20%", category: "t-shirt", color: "black" , size: "medium", style: "party" },
        {id: "6", image: "src/assets/images/products/courage-graphic-t-shirt.png", title: "COURAGE GRAPHIC T-SHIRT", ratingStar: 4, rating: "5", price: "145", oldPrice: "", discount: "", category: "t-shirt", color: "black" , size: "large", style: "party" },
        {id: "7", image: "src/assets/images/products/loose-fit-bermuda-shorts.png", title: "LOOSE FIT BERMUDA SHORTS", ratingStar: 5, rating: "4", price: "80", oldPrice: "", discount: "", category: "t-shirt", color: "red" , size: "large", style: "gym" },
        {id: "8", image: "src/assets/images/products/faded-skinny-jeans.png", title: "FADED SKINNY JEANS", ratingStar: 5, rating: "5", price: "210", oldPrice: "", discount: "", category: "t-shirt", color: "green" , size: "x-large", style: "gym" },
    ]
    const reviews = [
        {id: "1", name:"Sarah M.",
            text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
            rating: 4
        },
        {id: "2", name:"Sarah M.",
            text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
            rating: 5
        },
        {id: "3", name:"Sarah M.",
            text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
            rating: 3
        },
        {id: "5", name:"Sarah M.",
            text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
            rating: 5
        }
    ]
    const [rating, setRating] = useState(5);
    return (
        <>
            <Hero/>
            <BrandLine/>
            <SectionSell titleSection="NEW ARRIVALS" data={cardsNew} imgPath="images"/>
            <SectionSell titleSection="TOP SELLING" data={cardsTop} imgPath="images"/>
            <BrowseBy/>
            <Reviews dataReviews={reviews}/>
        </>
    );
};

export default Home;