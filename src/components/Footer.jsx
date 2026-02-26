import React from 'react';
import svgSprite from "../assets/sprite.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__top">
                    <div className="newsletter">
                        <h3 className="newsletter__title h3">
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h3>
                        <div className="newsletter__actions">
                            <label className="input__field">
                                <button className="input__icon" type="submit" title="Search">
                                    <svg
                                        className="icon"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z"
                                            fill="black"
                                            fillOpacity="0.4"
                                        />
                                    </svg>
                                </button>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input__control input-light"
                                    placeholder="Enter your email address"
                                />
                            </label>
                            <button className="btn btn__light" type="submit">
                                Subscribe to Newsletter
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer__body">
                    <div className="footer__info">
                        <a
                            aria-label="Home"
                            title="Home"
                            href="/"
                            className="footer__logo logo"
                        >
                            <svg className="logo__image" width={160} height={22}>
                                <use href={`${svgSprite}#logo`}/>
                            </svg>
                        </a>
                        <blockquote className="footer__quote">
                            We have clothes that suits your style and which you’re proud to wear.
                            From women to men.
                        </blockquote>
                        <div className="footer__social">
                            <ul className="footer__social-list">
                                <li className="footer__social-item">
                                    <a
                                        href=""
                                        className="footer__social-link"
                                        title="Twitter"
                                        target="_blank"
                                    >
                                        <svg
                                            className="icon footer__social-icon"
                                            width={28}
                                            height={28}
                                        >
                                            <use xlinkHref={`${svgSprite}#twitter-x`}/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="footer__social-item">
                                    <a
                                        href=""
                                        className="footer__social-link"
                                        title="Facebook"
                                        target="_blank"
                                    >
                                        <svg
                                            className="icon footer__social-icon"
                                            width={28}
                                            height={28}
                                        >
                                            <use xlinkHref={`${svgSprite}#facebook`}/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="footer__social-item">
                                    <a
                                        href=""
                                        className="footer__social-link"
                                        title="Instagram"
                                        target="_blank"
                                    >
                                        <svg
                                            className="icon footer__social-icon"
                                            width={28}
                                            height={28}
                                        >
                                            <use xlinkHref={`${svgSprite}#instagram`}/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="footer__social-item">
                                    <a
                                        href=""
                                        className="footer__social-link"
                                        title="Github"
                                        target="_blank"
                                    >
                                        <svg
                                            className="icon footer__social-icon"
                                            width={28}
                                            height={28}
                                        >
                                            <use xlinkHref={`${svgSprite}#github`}/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <nav className="footer__nav">
                        <div className="footer__nav-column">
                            <h6 className="footer__nav-column-title">Company</h6>
                            <ul className="footer__nav-list">
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        About
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Features
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Works
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Career
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__nav-column">
                            <h6 className="footer__nav-column-title">Help</h6>
                            <ul className="footer__nav-list">
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Customer Support
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Delivery Details
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__nav-column">
                            <h6 className="footer__nav-column-title">FAQ</h6>
                            <ul className="footer__nav-list">
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Account
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Manage Deliveries
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Orders
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Payments
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__nav-column">
                            <h6 className="footer__nav-column-title">Resources</h6>
                            <ul className="footer__nav-list">
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Free eBooks
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Development Tutorial
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        How to - Blog
                                    </a>
                                </li>
                                <li className="footer__nav-item">
                                    <a href="#" className="footer__nav-link" title="">
                                        Youtube Playlist
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="footer__bottom">
                    <div className="footer__copyright">
                        <p>Shop.co © 2000-2025, All Rights Reserved</p>
                    </div>
                    <div className="footer__payments">
                        <div className="footer__payments-list">
                            <div className="footer__payments-item">
                                <div title="visa" className="footer__payments-link">
                                    <svg className="footer__payments-icon" width={46} height={30}>
                                        <use href={`${svgSprite}#visa`}/>
                                    </svg>
                                </div>
                            </div>
                            <div className="footer__payments-item">
                                <div title="mastercard" className="footer__payments-link">
                                    <svg className="footer__payments-icon" width={46} height={30}>
                                        <use href={`${svgSprite}#mastercard`}/>
                                    </svg>
                                </div>
                            </div>
                            <div className="footer__payments-item">
                                <div title="paypal" className="footer__payments-link">
                                    <svg className="footer__payments-icon" width={46} height={30}>
                                        <use href={`${svgSprite}#paypal`}/>
                                    </svg>
                                </div>
                            </div>
                            <div className="footer__payments-item">
                                <div title="apple pay" className="footer__payments-link">
                                    <svg className="footer__payments-icon" width={46} height={30}>
                                        <use href={`${svgSprite}#applepay`}/>
                                    </svg>
                                </div>
                            </div>
                            <div className="footer__payments-item">
                                <div title="google pay" className="footer__payments-link">
                                    <svg className="footer__payments-icon" width={46} height={30}>
                                        <use href={`${svgSprite}#googlepay`}/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;