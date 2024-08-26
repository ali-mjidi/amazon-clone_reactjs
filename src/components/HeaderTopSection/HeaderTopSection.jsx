import Icon from "../Icon/Icon";
import amazonLogo from "@assets/images/amazon-white.svg";
import "./style.scss";

function HeaderTopSection() {
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
				<select name="category" className="searchBar__select">
					<option value="some">Something else and more than that</option>
				</select>
                <input
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
