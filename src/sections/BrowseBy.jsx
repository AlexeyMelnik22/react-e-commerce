import { motion } from "motion/react"

const BrowseBy = () => {
    return (
        <section className="browse-by">
            <div className="container">
                <div className="browse-by__inner">
                    <div className="browse-by__header">
                        <h3 className="browse-by__headline h3">
                            BROWSE BY dress STYLE
                        </h3>
                    </div>
                    <div className="browse-by__body">
                        <div className="browse-by__cards">
                            <ul className="browse-by__cards-list">
                                <motion.li className="browse-by__cards-item" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y:0 }}>
                                    <h4 className="h4 browse-by__cards-item__title">
                                        Casual
                                    </h4>
                                    <img src="" alt="" className="browse-by__cards-item__image"/>
                                </motion.li>
                                <motion.li className="browse-by__cards-item" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x:0 }}>
                                    <h4 className="h4 browse-by__cards-item__title">
                                        Formal
                                    </h4>
                                    <div className="browse-by__cards-item__image">

                                    </div>
                                </motion.li>
                                <motion.li className="browse-by__cards-item" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x:0 }}>
                                    <h4 className="h4 browse-by__cards-item__title">
                                        Party
                                    </h4>
                                    <div className="browse-by__cards-item__image">

                                    </div>
                                </motion.li>
                                <motion.li className="browse-by__cards-item" initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y:0 }}>
                                    <h4 className="h4 browse-by__cards-item__title">
                                        Gym
                                    </h4>
                                    <div className="browse-by__cards-item__image">

                                    </div>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowseBy;