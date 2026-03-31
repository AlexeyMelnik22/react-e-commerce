import React from 'react';
import svgSprite from "../assets/sprite.svg";
import Rating from "./Rating.jsx";
import {Link} from "react-router-dom";
import getImageUrl from "../hooks/imageUtil.jsx";
import { motion } from "motion/react"

const Card = (props) => {
    const {
        data,
        loading,
        error
    }= props

    if (loading) return <div className="container">Loading...</div>;
    if (error) return <div className="container">Error: {error}</div>;

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
    const prodName = data.title.toLowerCase().replace(/\s+/g, '-') + ".png"

    return (
        <motion.div className="card card-product" initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y:0 }}>
            <div className="card__preview">
                <Link to={`/catalog/${data.title.toLowerCase().replace(/\s+/g, '-')}?id=${data.id}&size=${data.size}&color=${data.color}`} className="card__preview--link"
                      title={data.title}
                      aria-label="Open product page" onClick={handleClick}>
                    <img
                        src={getImageUrl("products", prodName)}
                        alt=""
                        className="card__image"
                        width={295}
                        height={298}
                    />
                </Link>
            </div>
            <div className="card__info">
                <h6 className="card__name h6">
                    <Link to={`/catalog/${data.title.toLowerCase().replace(/\s+/g, '-')}?id=${data.id}&size=${data.size}&color=${data.color}`}
                          className="card__name-link link link-dark"
                          title={data.title}
                          aria-label="Open product page"
                          onClick={handleClick}>
                        {data.title}
                    </Link>
                </h6>
                <div className="card__rating">
                    <Rating value={data.rating}/>
                </div>
                <div className="card__price">
                    <div className="price">${data.price}</div>
                    {data.oldPrice ? (
                        <div className="price-old">{data.oldPrice}</div>
                    ) : (
                        <div></div>
                    )}
                    {data.discount ? (
                        <div className="discount">-{data.discount}%</div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </motion.div>

    );
};

export default Card;