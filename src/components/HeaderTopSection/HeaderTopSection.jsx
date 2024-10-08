import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import { ProductContext } from "@context/ProductContext";
import Icon from "@components/Icon/Icon";
import amazonLogo from "@assets/images/amazon-white.svg";
import BackDrop from "@components/BackDrop/BackDrop";
import "./style.scss";

function HeaderTopSection() {
    const {
        state: { categories, cart, userLocation },
    } = useContext(ProductContext);
    const SELECT_OPTIONS = [
        { value: "all", label: "All" },
        ...categories.map(category => ({ value: category, label: category })),
    ]; // All the values that we want for category selector beside search bar
    const [selectedOption, setSelectedOption] = useState(SELECT_OPTIONS[0]);
    const [showBackDrop, setShowBackDrop] = useState(false);
    const [isFormFocus, setIsFormFocus] = useState(false);
    const searchInput = useRef();

    function handleShowBackDrop() {
        setShowBackDrop(true);
    }

    function handleRemoveBackDrop() {
        setShowBackDrop(false);
    }

    function handleChangeSelect(option) {
        setSelectedOption(option);
        searchInput.current.focus();
    }

    function handleInputFocus() {
        handleShowBackDrop();
        setIsFormFocus(true);
    }

    function handleInputBlur() {
        handleRemoveBackDrop();
        setIsFormFocus(false);
    }

    return (
        <div className="headerTopSection">
            <Link to="/">
                <img
                    src={amazonLogo}
                    alt="Amazon Logo"
                    className="headerTopSection__logo"
                />
            </Link>

            <div className="headerTopSection__location">
                <Icon
                    type="location"
                    size={27}
                    color="white"
                    className="icon"
                />
                <span className="locationText">Deliver to</span>
                <b className="locationName">{userLocation || "Unknown"}</b>
            </div>

            <form
                className={`headerTopSection__searchBar searchBar ${
                    isFormFocus && "searchBar--focus"
                }`}
                onSubmit={e => e.preventDefault()}>
                <Select
                    className="select"
                    classNamePrefix="select"
                    defaultValue={selectedOption}
                    options={SELECT_OPTIONS}
                    onChange={handleChangeSelect}
                />

                <input
                    ref={searchInput}
                    type="search"
                    name="search"
                    placeholder="Search Amazon"
                    className="searchBar__input"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />

                <button type="button" className="searchBar__button">
                    <Icon type="search" size={30} color="black" />
                </button>
            </form>
            <div
                className="language"
                onPointerEnter={handleShowBackDrop}
                onMouseLeave={handleRemoveBackDrop}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                    alt="USA Flag"
                    className="language__flag"
                />

                <span className="language__name">EN</span>

                <Icon type="down" size={15} color="#b8b0b5" />

                <form className="changeLanguage">
                    <h4 className="changeLanguage__title">
                        Change Language.{" "}
                        <a href="#" className="changeLanguage__link link">
                            Learn more.
                        </a>
                    </h4>

                    <ul className="changeLanguage__radioWrapper">
                        <li className="radio">
                            <input
                                type="radio"
                                name="language"
                                id="EN"
                                className="radio__input"
                                defaultChecked
                            />
                            <label htmlFor="EN" className="radio__label">
                                English - EN
                            </label>
                        </li>
                        <li className="radio">
                            <input
                                type="radio"
                                name="language"
                                id="ES"
                                className="radio__input"
                            />
                            <label htmlFor="ES" className="radio__label">
                                Español - ES
                            </label>
                        </li>
                        <li className="radio">
                            <input
                                type="radio"
                                name="language"
                                id="AR"
                                className="radio__input"
                            />
                            <label htmlFor="AR" className="radio__label">
                                العربية - AR
                            </label>
                        </li>
                        <li className="radio">
                            <input
                                type="radio"
                                name="language"
                                id="DE"
                                className="radio__input"
                            />
                            <label htmlFor="DE" className="radio__label">
                                Deutsch - DE
                            </label>
                        </li>
                        <li className="radio">
                            <input
                                type="radio"
                                name="language"
                                id="HE"
                                className="radio__input"
                            />
                            <label htmlFor="HE" className="radio__label">
                                עברית - HE
                            </label>
                        </li>
                        <li className="radio">
                            <input
                                type="radio"
                                name="language"
                                id="KO"
                                className="radio__input"
                            />
                            <label htmlFor="KO" className="radio__label">
                                한국어 - KO
                            </label>
                        </li>
                        <li className="radio">
                            <input
                                type="radio"
                                name="language"
                                id="PT"
                                className="radio__input"
                            />
                            <label htmlFor="PT" className="radio__label">
                                Português - PT
                            </label>
                        </li>
                        <li className="radio">
                            <input
                                type="radio"
                                name="language"
                                id="ZH"
                                className="radio__input"
                            />
                            <label htmlFor="ZH" className="radio__label">
                                中文 (简体) - ZH
                            </label>
                        </li>
                    </ul>

                    <hr className="changeLanguage__separator" />

                    <h4 className="changeLanguage__title">
                        Change Currency.
                        <a href="#" className="changeLanguage__link link">
                            Learn more.
                        </a>
                    </h4>

                    <p className="changeLanguage__currency">
                        &#x24;-USD-US Dollar
                        <a href="#" className="changeLanguage__link link">
                            Change
                        </a>
                    </p>

                    <hr className="changeLanguage__separator" />

                    <p className="changeLanguage__status">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                            alt="USA Flag"
                            className="language__flag"
                        />
                        You are shopping on Amazon.com.
                    </p>

                    <a
                        href="#"
                        className="changeLanguage__link link changeLanguage__link--changeCountry">
                        Change Country / Region
                    </a>
                </form>
            </div>
            <div
                className="signIn"
                onPointerEnter={handleShowBackDrop}
                onMouseLeave={handleRemoveBackDrop}>
                <span className="signIn__username">Hello, sign in</span>
                <strong className="signIn__options">
                    Account & Lists
                    <Icon type="down" size={15} color="#b8b0b5" />
                </strong>

                <div className="account">
                    <div className="account__signInSection">
                        <button className="account__signInBtn">Sign In</button>
                        <p className="account__newCustomer">
                            New Customer?&nbsp;
                            <a href="#" className="account__link link">
                                Start Here
                            </a>
                        </p>
                    </div>

                    <ul className="account__userList userList">
                        <h3 className="userList__heading">Your Lists</h3>
                        <li className="userList__options">
                            <a href="#" className="userList__link link">
                                Create a List
                            </a>
                        </li>
                        <li className="userList__options">
                            <a href="#" className="userList__link link">
                                Find a List Registry
                            </a>
                        </li>
                    </ul>

                    <ul className="account__userAccount userAccount">
                        <h3 className="userAccount__heading">Your Account</h3>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                Account
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                orders
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                Recommendations
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                Browsing
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                History
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                Watchlist
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                Video
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                Purchases & Rentals
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                Kindle Unlimited
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                Subscribe & Save Items
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                Memberships & Subscriptions
                            </a>
                        </li>
                        <li className="userAccount__options">
                            <a href="#" className="userAccount__link link">
                                Music Library
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="headerTopSection__return">
                Returns
                <strong className="headerTopSection__order">& Orders</strong>
            </div>
            <Link to="/cart" className="toCart">
                <div className="toCart__count">
                    <Icon type="cart" size={45} color="white" />
                    <span className="toCart__countNumber">{cart.length}</span>
                </div>
                <span className="toCart__text">Cart</span>
            </Link>

            {showBackDrop && <BackDrop targetId="header" />}
        </div>
    );
}

export default HeaderTopSection;
