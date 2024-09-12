import FooterList from "@components/FooterList/FooterList";
import Icon from "@components/Icon/Icon";
import amazonLogo from "@assets/images/amazon-white.svg";
import "./style.scss";

function Footer() {
    const data = [
        {
            heading: "Get to Know Us",
            className: "aboutUs",
            list: [
                "Careers",
                "Blog",
                "About Amazon",
                "Investor Relations",
                "Amazon Devices",
                "Amazon Science",
            ],
        },
        {
            heading: "Make Money with Us",
            className: "makeMoney",
            list: [
                "Sell products on Amazon",
                "Sell on Amazon Business",
                "Sell apps on Amazon",
                "Become an Affiliate",
                "Advertise Your Products",
                "Self-Publish with Us",
                "Host an Amazon Hubs",
                "See More Make Money with Us",
            ],
        },
        {
            heading: "Amazon Payment Products",
            className: "payment",
            list: [
                "Amazon Business Card",
                "Shop with Points",
                "Reload Your Balance",
                "Amazon Currency Converter",
            ],
        },
        {
            heading: "Let Us Help You",
            className: "help",
            list: [
                "Amazon and COVID-19",
                "Your Account",
                "Your Orders",
                "Shipping Rates &",
                "Policies",
                "Returns &",
                "Replacements",
                "Manage Your Content and Devices",
                "Amazon Assistant",
                "Help",
            ],
        },
    ];

    return (
        <footer className="footer">
            <a href="#header" className="footer__elevator">
                Back To Top
            </a>

            <section className="footer__links">
                <div className="footer__wrapper">
                    {data.map((data, index) => (
                        <FooterList key={index} data={data} />
                    ))}
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
