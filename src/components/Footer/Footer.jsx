import Icon from "@components/Icon/Icon";
import amazonLogo from "@assets/images/amazon-white.svg";
import "./style.scss";

function Footer() {
    return (
        <footer className="footer">
            <a href="#" className="footer__elevator">
                Back To Top
            </a>
			
            <section className="footer__links">
                <div className="footer__wrapper">
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                    <ul></ul>
                </div>
            </section>
			
            <div className="footer__info">
                <img
                    src={amazonLogo}
                    alt="Amazon Logo"
                    className="footer__logo"
                />
                <div className="footer__language footer__infoItem">
                    <Icon type="language" size={17} className="icon" />
                    English
                </div>
                <div className="footer__currency footer__infoItem">
                    <Icon type="dollar" size={15} className="icon" />
                    USD - U.s Dollar
                </div>
                <div className="footer__currency footer__infoItem">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                        alt="USA Flag"
                        className="footer__flag"
                    />
                    United States
                </div>
            </div>
        </footer>
    );
}

export default Footer;
