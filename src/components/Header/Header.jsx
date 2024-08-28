import HeaderTopSection from "@components/HeaderTopSection/HeaderTopSection";
import Nav from "@components/Nav/Nav";
import "./style.scss";

function Header() {
    return (
        <header className="header" id="header">
            <HeaderTopSection />
            <Nav />
        </header>
    );
}

export default Header;
