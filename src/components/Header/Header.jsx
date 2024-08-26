import HeaderTopSection from "../HeaderTopSection/HeaderTopSection";
import "./style.scss";

function Header() {
    return (
        <header className="header">
            <HeaderTopSection />
            <nav>
                <ul></ul>
            </nav>
        </header>
    );
}

export default Header;
