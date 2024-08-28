import { useState } from "react";

import SideMenuList from "@components/SideMenuList/SideMenuList";
import SideContent from "@components/SideContent/SideContent";
import Icon from "@components/Icon/Icon";
import "./style.scss";

function SideMenu({ ...props }) {
    const [showSideContent, setShowSideContent] = useState(false);
    const data = [
        {
            heading: "Digital Content & Devices",
            list: [
                {
                    content: "Amazon Music",
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

    return (
        <section {...props}>
            <p className="sideMenu__user">
                <div className="sideMenu__iconWrapper">
                    <Icon type="user" size={25} className="icon" />
                </div>
                Hello, sign in
            </p>

            <div className="sideMenu__content">
                {data.map(data => (
                    <SideMenuList data={data} prefix="sideMenu" />
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
