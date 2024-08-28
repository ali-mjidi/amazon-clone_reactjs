import { useState } from "react";

import Icon from "@components/Icon/Icon";
import SideMenu from "@components/SideMenu/SideMenu";
import BackDrop from "@components/BackDrop/BackDrop";
import "./style.scss";

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

            <SideMenu
                className={`navBar__sideMenu sideMenu ${
                    showMenu ? "sideMenu--show" : ""
                }`}
            />

            {showMenu && (
                <BackDrop targetId="root" onClick={() => setShowMenu(false)} />
            )}
        </nav>
    );
}

export default Nav;
