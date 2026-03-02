import React from 'react';
import Button from "../components/Button.jsx";
import {Link} from "react-router-dom";

const Hero = () => {
    const goToTop = ()=> {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__main container">
                <div className="hero__body">
                    <h1 className="hero__title h1" id="hero-title">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>
                    <div className="hero__desc">
                        <p>
                            Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense of
                            style.
                        </p>
                    </div>
                    <div className="hero__button">
                        <Link to="/catalog" className="btn btn__primary btn__max-mobile" onClick={goToTop}> Shop Now</Link>
                    </div>
                </div>
                <div className="hero__metrics metrics">
                    <div className="metrics__list">
                        <dl className="metrics__item">
                            <dt className="metrics__key">International Brands</dt>
                            <dd className="metrics__value h3">200+</dd>
                        </dl>
                        <div className="metrics__divider"/>
                        <dl className="metrics__item">
                            <dt className="metrics__key">High-Quality Products</dt>
                            <dd className="metrics__value h3">2,000+</dd>
                        </dl>
                        <div className="metrics__divider hidden-mobile"/>
                        <dl className="metrics__item">
                            <dt className="metrics__key">Happy Customers</dt>
                            <dd className="metrics__value h3">30,000+</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;