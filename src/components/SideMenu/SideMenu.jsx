import Icon from "@components/Icon/Icon";
import "./style.scss";

function SideMenu({ ...props }) {
    const rightCaret = <Icon type="right" size={25} className="icon" />;

    return (
        <section {...props}>
            <p className="sideMenu__user">
                <div className="sideMenu__iconWrapper">
                    <Icon type="user" size={25} className="icon" />
                </div>
                Hello, sign in
            </p>

            <ul className="sideMenu__digitalContent sideMenu__list">
                <h3 className="sideMenu__heading">Digital Content & Devices</h3>
                <li className="sideMenu__item">Amazon Music {rightCaret}</li>
                <li className="sideMenu__item">
                    Kindle E -readers & Books {rightCaret}
                </li>
                <li className="sideMenu__item">Amazon Appstore {rightCaret}</li>
            </ul>

            <ul className="sideMenu__list">
                <h3 className="sideMenu__heading">Shop by Department</h3>
                <li className="sideMenu__item">Electronics {rightCaret}</li>
                <li className="sideMenu__item">Computer {rightCaret}</li>
                <li className="sideMenu__item">Smart Home {rightCaret}</li>
                <li className="sideMenu__item">Arts & Crafts {rightCaret}</li>
                <li className="sideMenu__item">See all {rightCaret}</li>
            </ul>

            <ul className="sideMenu__list">
                <h3 className="sideMenu__heading">Programs & Features</h3>
                <li className="sideMenu__item">Gift Cards {rightCaret}</li>
                <li className="sideMenu__item">
                    Shop By Interest {rightCaret}
                </li>
                <li className="sideMenu__item">Amazon live {rightCaret}</li>
                <li className="sideMenu__item">
                    International Shopping {rightCaret}
                </li>
                <li className="sideMenu__item">See all {rightCaret}</li>
            </ul>

            <ul className="sideMenu__list">
                <h3 className="sideMenu__heading">Help & Settings</h3>
                <li className="sideMenu__item">Your Account {rightCaret}</li>
                <li className="sideMenu__item">
                    <div className="wrapper">
                        <Icon type="language" size={25} className="icon" />
                        English
                    </div>
                    {rightCaret}
                </li>
                <li className="sideMenu__item">
                    <div className="wrapper">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                            alt="USA Flag"
                            className="sideMenu__flag"
                        />
                        United States
                    </div>
                    {rightCaret}
                </li>
                <li className="sideMenu__item">
                    Customer Service {rightCaret}
                </li>
                <li className="sideMenu__item">Sign in {rightCaret}</li>
            </ul>
        </section>
    );
}

export default SideMenu;
