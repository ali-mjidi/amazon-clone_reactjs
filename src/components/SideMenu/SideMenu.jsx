import { useState, useEffect } from "react";

import SideMenuList from "@components/SideMenuList/SideMenuList";
import SideContent from "@components/SideContent/SideContent";
import Icon from "@components/Icon/Icon";
import "./style.scss";

function SideMenu({ isShow }) {
    const [showSideContent, setShowSideContent] = useState(false);
    const data = [
        // Here is the whole data that placed in the sideMenu.
        {
            heading: "Digital Content & Devices",
            list: [
                {
                    content: "Amazon Music",
                    // The handler property is the function that each menu option do or show something with it whenever click happens.
                    // In this case only first option shows the side content
                    handler: { onClick: () => setShowSideContent(true) },
                },
                {
                    content: "Kindle E -readers & Books",
                },
                { content: "Amazon Appstore" },
            ],
        },
        {
            heading: "Shop by Department",
            list: [
                { content: "Shop by Department" },
                { content: "Electronics" },
                { content: "Computer" },
                { content: "Smart Home" },
                { content: "Arts & Crafts" },
                { content: "See all" },
            ],
        },
        {
            heading: "Programs & Features",
            list: [
                { content: "Gift Cards" },
                { content: "Shop By Interest" },
                { content: "Amazon live" },
                { content: "International Shopping" },
                { content: "See all" },
            ],
        },
        {
            heading: "Help & Settings",
            list: [
                { content: "Your Account" },
                {
                    content: (
                        <div className="wrapper">
                            <Icon type="language" size={25} className="icon" />
                            English
                        </div>
                    ),
                },
                {
                    content: (
                        <div className="wrapper">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                                alt="USA Flag"
                                className="sideMenu__flag"
                            />
                            United States
                        </div>
                    ),
                },
                { content: "Customer Service" },
                { content: "Sign in" },
            ],
        },
    ];

    useEffect(() => {
		// Close sideContent component when the sideMenu closes.
        if (!isShow) {
            setShowSideContent(false);
        }
    }, [isShow]);

    return (
        <section
            className={`navBar__sideMenu sideMenu ${
                isShow ? "sideMenu--show" : ""
            }`}>
            <div className="sideMenu__user">
                <div className="sideMenu__iconWrapper">
                    <Icon type="user" size={25} className="icon" />
                </div>
                Hello, sign in
            </div>

            <div
                className="sideMenu__content"
                style={{ 
					// This will hide rest of sideMenu that show on under of sideContent
					// This will prevent to scroll when sideContent shows.
                    overflow: showSideContent && "hidden",
                }}>
                {data.map((data, index) => (
                    <SideMenuList key={index} data={data} prefix="sideMenu" />
                ))}

                <SideContent
                    isShow={showSideContent}
                    closeHandler={() => setShowSideContent(false)}
                />
            </div>
        </section>
    );
}

export default SideMenu;
