import SideMenuList from "@components/SideMenuList/SideMenuList";
import Icon from "@components/Icon/Icon";
import "./style.scss";

function SideContent({ isShow, closeHandler }) {
    const data = {
        heading: "Stream Music",
        list: [
            { content: "Amazon Music Unlimited" },
            { content: "Free Streaming Music" },
            { content: "Podcasts" },
            { content: "Open Web Player" },
            { content: "Download the app" },
        ],
    };
    return (
        <section className={`sideContent sideContent${isShow ? "--show" : ""}`}>
            <button className="sideContent__back" onClick={closeHandler}>
                <Icon type="back" size={28} className="icon" /> Main Menu
            </button>

            <SideMenuList data={data} prefix="sideContent" />
        </section>
    );
}

export default SideContent;
