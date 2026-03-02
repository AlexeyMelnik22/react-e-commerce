import React from 'react';
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import {Link} from "react-router-dom";

const SectionSell = (props) => {
    const {
        titleSection,
        data,
        imgPath,
        loading,
        error
    } = props

    const goToTop = ()=> {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (
        <section className="section section-bordered">
            <div className="section__header">
                <div className="section__header-inner container">
                    <h2 className="section__header-headline h2">
                        {titleSection}
                    </h2>
                </div>
            </div>
            <div className="section__body">
                <div className="section__body-inner container">
                    <div className="cards-carousel">
                        {data?.map(item => (
                            <Card loading={loading} error={error} data={item} imgPath={imgPath}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="section__footer">
                <div className="section__footer-inner container">
                    <Link to="/catalog" className="btn btn__secondary" onClick={goToTop}>View All</Link>
                </div>
            </div>
        </section>
    );
};

export default SectionSell;