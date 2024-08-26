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
        </div>
    );
}

export default HeaderTopSection;
