import Icon from "@components/Icon/Icon";
import style from "./style.module.scss";

function SideMenuList({ data, prefix }) {
    const { list, heading, item } = style;
    const rightCaret = <Icon type="right" size={25} className="icon" />;

    return (
        <ul className={`${prefix}__list ${list}`}>
            <h3 className={`${prefix}__heading ${heading}`}>{data.heading}</h3>

            {data.list.map(itemData => (
                <li
                    className={`${prefix}__item ${item}`}
                    {...itemData?.handler}>
                    {itemData.content} {prefix === "sideMenu" && rightCaret}
                </li>
            ))}
        </ul>
    );
}

export default SideMenuList;
