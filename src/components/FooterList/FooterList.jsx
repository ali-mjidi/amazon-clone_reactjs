function FooterList({ data }) {
    return (
        <ul className={`footer__${data.className}`}>
            <h3 className="footer__heading">{data.heading}</h3>
            {data.list.map((item, index) => (
                <li key={index}>
                    <a href="#" className="footer__link link">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default FooterList;