import svgSprite from "../assets/sprite.svg"
import React, {useRef, useState, useEffect} from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import getImageUrl from "../hooks/imageUtil.jsx";
import { useCart } from './context/CartContext.jsx';
import { motion } from "motion/react"
import Dropdown from "./Dropdown/Dropdown.jsx"
import Button from "../components/Button.jsx";

const Header = () => {

    // const cartLength = JSON.parse(localStorage.getItem('cart')) || "";

    const { cartCount } = useCart();

    const [promoAlert, setPromoAlert] = useState(true)
    const [menu, setMenu] = useState("")
    const [search, setSearch] = useState("");
    const [openSearch, setOpenSearch] = useState("");

    const { data: cards, loading: cardsLoading, error: cardsError } = useFetch('data/products.json');

    const filteredProducts = cards?.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    const searchRef = useRef(null);
    const searchBlockRef = useRef(null);

    const location = useLocation();

    const [currentUser, setCurrentUser] = useState(null);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    // State for switch form mode
    const [isLoginMode, setIsLoginMode] = useState(true);

    // Check if active session while first render
    useEffect(() => {
        const loggedUser = localStorage.getItem('activeUser');
        if (loggedUser) {
            setCurrentUser(JSON.parse(loggedUser));
        }
    }, []);

    //when change route - close searchBlock
    useEffect(() => {
        setSearch('');
    }, [location, setSearch]);

    useEffect(() => {
        setOpenSearch('');
    }, [location, setOpenSearch]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchBlockRef.current &&
                !searchBlockRef.current.contains(event.target)
            ) {
                setSearch('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [setSearch]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setOpenSearch("");
            }
        };
        if (openSearch) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        //Cleanup function to avoid memory leaks
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openSearch]); // Hook works while change state isActive
    const onOpenMenu = ()=> {
        setMenu("is-active")
    }
    const onCloseMenu = ()=> {
        setMenu("")
    }
    const onOpenSearch = ()=> {
        setOpenSearch("is-active")
    }
    // (LOGIN)
    const handleLogin = () => {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Шукаємо користувача з таким логіном та паролем
        const user = existingUsers.find(
            (u) => u.login === login && u.password === password
        );

        if (user) {
            localStorage.setItem('activeUser', JSON.stringify(user));
            setCurrentUser(user);
            setLogin('');
            setPassword('');
            alert(`Welcome, ${user.login}!`);

        } else {
            alert("Incorrect login or password");
        }
    };
    // (REG)
    const handleRegister = () => {
        if (!login || !password) {
            alert("Please, fill the all fields");
            return;
        }

        // 1. Get existing users from LocalStorage (or an empty array)
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // 2. Checking if such a login already exists
        const userExists = existingUsers.some(user => user.login === login);
        if (userExists) {
            alert("This login is already taken");
            return;
        }

        // 3.Add new user
        const newUser = { login, password };
        const updatedUsers = [...existingUsers, newUser];

        // 4. Saving back to LocalStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        localStorage.setItem('activeUser', JSON.stringify(newUser));
        setCurrentUser(newUser);

        alert("Registration successful!");
        setLogin('');
        setPassword('');
    };
    const handleLogout = () => {
        localStorage.removeItem('activeUser');
        setCurrentUser(null);
    };
    const signUpPromo = ()=> {
        document.querySelector(".header__profile").click();
        setIsLoginMode(false);
    }

    return (
        <>
            <header className="header" data-lp="" data-header="">
                {!currentUser && (
                    <div className="header__promo" style={{display: promoAlert === true ? "" : "none"}}>
                        <div className="header__promo-inner container">
                            <div>
                                Sign up and get 20% off to your first order.
                                <a title="" className="header__promo-link link link-hover" onClick={signUpPromo}>
                                    Sign Up Now
                                </a>
                            </div>
                            <button
                                title="Close"
                                className="header__promo-close hidden-mobile"
                                type="button"
                                aria-label="Close promo"
                                onClick={()=> {
                                    setPromoAlert(false)
                                }}
                            >
                                <svg
                                    className="icon"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.2882 14.9617C16.4644 15.1378 16.5633 15.3767 16.5633 15.6258C16.5633 15.8749 16.4644 16.1137 16.2882 16.2898C16.1121 16.466 15.8733 16.5649 15.6242 16.5649C15.3751 16.5649 15.1362 16.466 14.9601 16.2898L9.99997 11.3281L5.03825 16.2883C4.86213 16.4644 4.62326 16.5633 4.37418 16.5633C4.12511 16.5633 3.88624 16.4644 3.71012 16.2883C3.534 16.1122 3.43506 15.8733 3.43506 15.6242C3.43506 15.3751 3.534 15.1363 3.71012 14.9602L8.67184 10L3.71168 5.03828C3.53556 4.86216 3.43662 4.62329 3.43662 4.37422C3.43662 4.12515 3.53556 3.88628 3.71168 3.71016C3.8878 3.53404 4.12668 3.43509 4.37575 3.43509C4.62482 3.43509 4.86369 3.53404 5.03981 3.71016L9.99997 8.67188L14.9617 3.70938C15.1378 3.53326 15.3767 3.43431 15.6257 3.43431C15.8748 3.43431 16.1137 3.53326 16.2898 3.70938C16.4659 3.8855 16.5649 4.12437 16.5649 4.37344C16.5649 4.62251 16.4659 4.86138 16.2898 5.0375L11.3281 10L16.2882 14.9617Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
                <div className="header__body">
                    <div className="header__body-inner container">
                        <button
                            className="header__burger-menu burger__button visible-mobile icon-menu"
                            onClick={onOpenMenu}
                        >
                            <span className="burger__line"/>
                            <span className="burger__line"/>
                            <span className="burger__line"/>
                        </button>
                        <Link aria-label="Home" title="Home" className="header__logo logo" to="/">
                            <svg className="logo__image" width={160} height={22}>
                                <use href={`${svgSprite}#logo`}/>
                            </svg>
                        </Link>
                        <nav className={`header__menu ${menu}`} data-header-menu="">
                            <ul className="header__menu-list">
                                {menu === "is-active" ?
                                    (
                                        <>
                                            <motion.li className="header__menu-item" initial={{opacity: 0, x: 200}}
                                                       whileInView={{opacity: 1, x: 0}}>
                                                <Link to="/catalog" className="header__menu-link"
                                                      onClick={menu === "is-active" && onCloseMenu}>Shop</Link>
                                            </motion.li>
                                            <motion.li className="header__menu-item" initial={{opacity: 0, x: 200}}
                                                       whileInView={{opacity: 1, x: 0}}>
                                                <Link to="/#top-selling" className="header__menu-link"
                                                      onClick={menu === "is-active" && onCloseMenu}>Top Selling</Link>
                                            </motion.li>
                                            <motion.li className="header__menu-item" initial={{opacity: 0, x: 200}}
                                                       whileInView={{opacity: 1, x: 0}}>
                                                <Link to="/#new-arrivals" className="header__menu-link"
                                                      onClick={menu === "is-active" && onCloseMenu}>New Arrivals</Link>
                                            </motion.li>
                                            <motion.li className="header__menu-item" initial={{opacity: 0, x: 200}}
                                                       whileInView={{opacity: 1, x: 0}}>
                                                <Link to="/#brands" className="header__menu-link"
                                                      onClick={menu === "is-active" && onCloseMenu}>Brands</Link>
                                            </motion.li>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <li className="header__menu-item">
                                                <Link to="/catalog" className="header__menu-link"
                                                      onClick={menu === "is-active" && onCloseMenu}>Shop</Link>
                                            </li>
                                            <li className="header__menu-item">
                                                <Link to="/#top-selling" className="header__menu-link"
                                                      onClick={menu === "is-active" && onCloseMenu}>Top Selling</Link>
                                            </li>
                                            <li className="header__menu-item">
                                                <Link to="/#new-arrivals" className="header__menu-link"
                                                      onClick={menu === "is-active" && onCloseMenu}>New Arrivals</Link>
                                            </li>
                                            <li className="header__menu-item">
                                                <Link to="/#brands" className="header__menu-link"
                                                      onClick={menu === "is-active" && onCloseMenu}>Brands</Link>
                                            </li>
                                        </>
                                    )
                                }
                            </ul>
                            <button
                                type="button"
                                className="header__menu-close"
                                onClick={onCloseMenu}
                            >
                                <svg
                                    className="icon"
                                    width={24}
                                    height={25}
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19.5459 18.4541C19.7572 18.6654 19.876 18.952 19.876 19.2509C19.876 19.5498 19.7572 19.8365 19.5459 20.0478C19.3346 20.2592 19.0479 20.3779 18.749 20.3779C18.4501 20.3779 18.1635 20.2592 17.9521 20.0478L12 14.0937L6.0459 20.0459C5.83455 20.2573 5.54791 20.376 5.24902 20.376C4.95014 20.376 4.66349 20.2573 4.45215 20.0459C4.2408 19.8346 4.12207 19.5479 4.12207 19.2491C4.12207 18.9502 4.2408 18.6635 4.45215 18.4522L10.4062 12.5L4.45402 6.54593C4.24268 6.33459 4.12395 6.04795 4.12395 5.74906C4.12395 5.45017 4.24268 5.16353 4.45402 4.95218C4.66537 4.74084 4.95201 4.62211 5.2509 4.62211C5.54978 4.62211 5.83643 4.74084 6.04777 4.95218L12 10.9062L17.954 4.95125C18.1654 4.7399 18.452 4.62117 18.7509 4.62117C19.0498 4.62117 19.3364 4.7399 19.5478 4.95125C19.7591 5.16259 19.8778 5.44924 19.8778 5.74812C19.8778 6.04701 19.7591 6.33365 19.5478 6.545L13.5937 12.5L19.5459 18.4541Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                        </nav>
                        <div className={`header__search ${openSearch}`} ref={searchRef} >
                            <label className="input__search input__content input__field">
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
                                            d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z"
                                            fill="black"
                                            fillOpacity="0.4"
                                        />
                                    </svg>
                                </button>
                                <input
                                    onChange={(event)=> setSearch(event.target.value)}
                                    value={search}
                                    type="search"
                                    name="Main search"
                                    className="input__control"
                                    placeholder="Search for products..."
                                />
                            </label>
                            <div className={`header__search-block ${search && "active"}`} ref={searchBlockRef}>
                                <ul className="header__search-list">
                                    {filteredProducts?.map((product) => (
                                        <li className="header__search-item" key={product.id}>
                                            <Link
                                                to={`/catalog/${product.title.toLowerCase().replace(/\s+/g, '-')}?id=${product.id}&size=${product.size}&color=${product.color}`}
                                                className="header__search-link"
                                                title={product.title}
                                                aria-label="Open product page">

                                                <div className="header__search-img">
                                                    <img src={getImageUrl("products", product.image)} width={100} height={100} alt=""/>
                                                </div>
                                                <div className="header__search-info">
                                                    <div className="header__search-title">
                                                        {product.title}
                                                    </div>
                                                    <div className="header__search-price">
                                                        {product.price}
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                    {filteredProducts?.length === 0 && (
                                        <p>Нічого не знайдено!</p>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="header__controls">
                            <button
                                type="button"
                                title=""
                                className="header__search-button header__control"
                                onClick={onOpenSearch}
                            >
                                <svg className="icon" width={24} height={24}>
                                    <use href={`${svgSprite}#search`}/>
                                </svg>
                            </button>
                            <Link to="/cart" className="header__cart header__control">
                                <svg className="icon" width={24} height={24}>
                                    <use href={`${svgSprite}#cart`}/>
                                </svg>
                                <span className="notify">
                                    {cartCount === 0 ? "" : cartCount }
                                </span>
                            </Link>
                            {currentUser ? (
                                <Dropdown trigger={
                                    <button
                                        type="button"
                                        title=""
                                        className="header__profile header__control"
                                    >
                                        <svg className="icon" width={24} height={24}>
                                            <use href={`${svgSprite}#user`}/>
                                        </svg>
                                        <span>{currentUser.login}</span>
                                    </button>
                                }>
                                    <Button onClick={handleLogout}>Log Out</Button>
                                </Dropdown>
                            ) : (
                                <Dropdown trigger={
                                    <button
                                        type="button"
                                        title=""
                                        className="header__profile header__control"
                                    >
                                        <svg className="icon" width={24} height={24}>
                                            <use href={`${svgSprite}#user`}/>
                                        </svg>
                                    </button>
                                }>
                                    <div className="auth-form">
                                        <h5 className="h5 auth-form__title">{isLoginMode ? 'Sign In' : 'Sign Up'}</h5>
                                        <div className="input__field">
                                            <input
                                                type="text"
                                                placeholder="Login"
                                                value={login}
                                                className="input__control input-square"
                                                onChange={(e) => setLogin(e.target.value)}
                                            />
                                        </div>
                                        <div className="input__field">
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                className="input__control input-square"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        {isLoginMode ? (
                                            <>
                                                <Button className="btn btn__primary btn__max" onClick={handleLogin}>Увійти</Button>
                                                <p style={{fontSize: '12px'}}>
                                                    Don't have an account?
                                                    <span
                                                        onClick={() => setIsLoginMode(false)}
                                                        style={{ color: '#063AF5', cursor: 'pointer', marginLeft: '5px' }}
                                                    >
                                        Sign Up
                                    </span>
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <Button className="btn btn__primary btn__max" onClick={handleRegister}>Створити акаунт</Button>
                                                <p style={{ fontSize: '12px' }}>
                                                    Already have an account?
                                                    <span
                                                        onClick={() => setIsLoginMode(true)}
                                                        style={{ color: '#063AF5', cursor: 'pointer', marginLeft: '5px' }}>Sign In</span>
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </Dropdown>
                            )}
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header