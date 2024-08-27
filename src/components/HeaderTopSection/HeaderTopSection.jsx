import { useState, useRef } from "react";
import Select from "react-select";

import Icon from "../Icon/Icon";
import amazonLogo from "@assets/images/amazon-white.svg";
import "./style.scss";

const SELECT_OPTIONS = [
    { value: "all", label: "All" },
    { value: "book", label: "Book" },
    { value: "some", label: "something else and more than that" },
];

function HeaderTopSection() {
    const [selectedOption, setSelectedOption] = useState(null);
    const searchInput = useRef();

    return (
        <div className="headerTopSection">
            <img
                src={amazonLogo}
                alt="Amazon Logo"
                className="headerTopSection__logo"
            />

            <div className="headerTopSection__location">
                <Icon
                    type="location"
                    size={27}
                    color="white"
                    className="icon"
                />
                Deliver to <b className="locationName">France</b>
            </div>

            <form
                className="headerTopSection__searchBar searchBar"
                onSubmit={e => e.preventDefault()}>
                <Select
                    className="select"
                    classNamePrefix="select"
                    defaultValue={SELECT_OPTIONS[0]}
                    onChange={option => setSelectedOption(option)}
                    options={SELECT_OPTIONS}
                />

                <input
                    ref={searchInput}
                    type="search"
                    name="search"
                    placeholder="Search Amazon"
                    className="searchBar__input"
                />

                <button type="button" className="searchBar__button">
                    <Icon type="search" size={30} color="black" />
                </button>
            </form>

            <div className="language">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                    alt="USA Flag"
                    className="language__flag"
                />

                <span className="language__name">EN</span>

                <Icon type="down" size={15} color="#b8b0b5" />

                <form className="changeLanguage">
                    <p className="changeLanguage__title">
                        Change Language.{" "}
                        <a href="#" className="changeLanguage__link">
                            Learn more.
                        </a>
                    </p>

                    <ul className="changeLanguage__radioWrapper">
                        <li className="radio">
                            <input
                                type="radio"
                                name="language"
                                id="EN"
                                className="radio__input"
                                checked
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

                    <p className="changeLanguage__title">
                        Change Currency.
                        <a href="#" className="changeLanguage__link">
                            Learn more.
                        </a>
                    </p>

                    <p className="changeLanguage__currency">
                        &#x24;-USD-US Dollar
                        <a href="#" className="changeLanguage__link">
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

                    <a href="#" className="changeLanguage__link changeLanguage__link--changeCountry">
                        Change Country / Region
                    </a>
                </form>
            </div>

            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
    );
}

export default HeaderTopSection;
