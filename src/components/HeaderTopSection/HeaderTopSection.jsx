import Icon from "../Icon/Icon";
import "./style.scss";

function HeaderTopSection() {
    return (
        <div className="headerTopSection">
            <img src="" alt="" className="headerTopSection__logo" />
            <div className="headerTopSection__location">
                <Icon type="location" size={16} color="black" />
                Deliver to <b>France</b>
            </div>
			
        </div>
    );
}

export default HeaderTopSection;
