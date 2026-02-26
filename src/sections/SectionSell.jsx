import React from 'react';
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import card from "../components/Card.jsx";

const SectionSell = (props) => {
    const {
        titleSection,
        data,
        imgPath
    } = props
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
                        {data.map(item => (
                            <Card data={item} imgPath={imgPath}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="section__footer">
                <div className="section__footer-inner container">
                    <Button className="btn__secondary">
                        View All
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SectionSell;