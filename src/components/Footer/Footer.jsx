import Icon from "@components/Icon/Icon";
import amazonLogo from "@assets/images/amazon-white.svg";
import "./style.scss";

function Footer() {
    return (
        <footer className="footer">
            <a href="#header" className="footer__elevator">
                Back To Top
            </a>

            <section className="footer__links">
                <div className="footer__wrapper">
                    <ul className="footer__aboutUs">
                        <h3 className="footer__heading">Get to Know Us</h3>
                        <li>
                            <a href="" className="footer__link link">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                About Amazon
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Investor Relations
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Amazon Devices
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Amazon Science
                            </a>
                        </li>
                    </ul>

                    <ul className="footer__makeMoney">
                        <h3 className="footer__heading">Make Money with Us</h3>
                        <li>
                            <a href="" className="footer__link link">
                                Sell products on Amazon
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Sell on Amazon Business
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Sell apps on Amazon
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Become an Affiliate
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Advertise Your Products
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Self-Publish with Us
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Host an Amazon Hubs
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                See More Make Money with Us
                            </a>
                        </li>
                    </ul>

                    <ul className="footer__payment">
                        <h3 className="footer__heading">
                            Amazon Payment Products
                        </h3>

                        <li>
                            <a href="" className="footer__link link">
                                Amazon Business Card
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Shop with Points
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Reload Your Balance
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Amazon Currency Converter
                            </a>
                        </li>
                    </ul>

                    <ul className="footer__help">
                        <h3 className="footer__heading">Let Us Help You</h3>
                        <li>
                            <a href="" className="footer__link link">
                                Amazon and COVID-19
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Your Account
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Your Orders
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Shipping Rates &
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Policies
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Returns &
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Replacements
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Manage Your Content and Devices
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Amazon Assistant
                            </a>
                        </li>
                        <li>
                            <a href="" className="footer__link link">
                                Help
                            </a>
                        </li>
                    </ul>
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
