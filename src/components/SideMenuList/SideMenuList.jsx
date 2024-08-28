import Icon from "@components/Icon/Icon";
import "./style.css";

function SideMenuList({ data }) {
    const rightCaret = <Icon type="right" size={25} className="icon" />;

    return (
        <ul className="sideMenu__list">
            <h3 className="sideMenu__heading">{data.heading}</h3>

            {data.list.map(item => (
                <li className="sideMenu__item" {...item?.handler}>
                    {item.content} {rightCaret}
                </li>
            ))}
        </ul>
    );
}

export default SideMenuList;
