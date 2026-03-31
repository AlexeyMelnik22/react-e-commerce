import React from 'react';
import Button from "../components/Button.jsx";
import {Link} from "react-router-dom";
import { motion } from "motion/react"

const Hero = () => {
    const goToTop = ()=> {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero__main container">
                <motion.div className="hero__body" initial={{ opacity: 0, x: -700 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
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
                </motion.div>
                <div className="hero__metrics metrics">
                    <div className="metrics__list">
                        <motion.dl className="metrics__item" style={{ willChange: "transform, opacity" }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <dt className="metrics__key">International Brands</dt>
                            <dd className="metrics__value h3">200+</dd>
                        </motion.dl>
                        <div className="metrics__divider"/>
                        <motion.dl className="metrics__item" style={{ willChange: "transform, opacity" }} initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <dt className="metrics__key">High-Quality Products</dt>
                            <dd className="metrics__value h3">2,000+</dd>
                        </motion.dl>
                        <div className="metrics__divider hidden-mobile"/>
                        <motion.dl className="metrics__item" style={{ willChange: "transform, opacity" }} initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <dt className="metrics__key">Happy Customers</dt>
                            <dd className="metrics__value h3">30,000+</dd>
                        </motion.dl>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;