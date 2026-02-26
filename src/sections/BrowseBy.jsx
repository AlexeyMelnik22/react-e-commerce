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
                                <li className="browse-by__cards-item">
                                    <h4 className="h4 browse-by__cards-item__title">
                                        Casual
                                    </h4>
                                    <img src="" alt="" className="browse-by__cards-item__image"/>
                                </li>
                                <li className="browse-by__cards-item">
                                    <h4 className="h4 browse-by__cards-item__title">
                                        Formal
                                    </h4>
                                    <div className="browse-by__cards-item__image">

                                    </div>
                                </li>
                                <li className="browse-by__cards-item">
                                    <h4 className="h4 browse-by__cards-item__title">
                                        Party
                                    </h4>
                                    <div className="browse-by__cards-item__image">

                                    </div>
                                </li>
                                <li className="browse-by__cards-item">
                                    <h4 className="h4 browse-by__cards-item__title">
                                        Gym
                                    </h4>
                                    <div className="browse-by__cards-item__image">

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowseBy;