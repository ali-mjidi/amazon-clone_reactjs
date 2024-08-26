import Icon from "../Icon/Icon";
import amazonLogo from "@assets/images/amazon-white.svg";
import "./style.scss";

function HeaderTopSection() {
    return (
        <div className="headerTopSection">
            <img
                // src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg"
                src={amazonLogo}
                alt=""
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
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    );
}

export default HeaderTopSection;
