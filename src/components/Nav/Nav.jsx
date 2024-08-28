import { useState } from "react";

import Icon from "../Icon/Icon";
import "./style.scss";
import BackDrop from "../BackDrop/BackDrop";

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navBar">
            <ul className="navBar__wrapper">
                <li
                    className="navBar__item navBar__item--sideMenuOpener"
                    onClick={() => setShowMenu(true)}>
                    <Icon type="burger" size={20} color="white" /> All
                </li>
                <li className="navBar__item">Today's Deals</li>
                <li className="navBar__item">Customer Service</li>
                <li className="navBar__item">Registry</li>
                <li className="navBar__item">Gift Cards</li>
                <li className="navBar__item">Sell</li>
            </ul>

            <div
                className={`navBar__sideMenu sideMenu ${
                    showMenu ? "sideMenu--show" : ""
                }`}
                onClick={() => setShowMenu(false)}></div>

            {showMenu && (
                <BackDrop
                    targetId="root"
                    closeFunc={() => setShowMenu(false)}
                />
            )}
        </nav>
    );
}

export default Nav;
