import Icon from "@components/Icon/Icon";
import style from "./style.module.scss";

/*
	This is each list that shows on the sideMenu and sideContent,
	that contains title of each section and related menu options
*/

function SideMenuList({ data, prefix }) {
    const { list, heading, item } = style;
    const rightCaret = <Icon type="right" size={25} className="icon" />;

    return (
        <ul className={`${prefix}__list ${list}`}>
            <h3 className={`${prefix}__heading ${heading}`}>{data.heading}</h3>

            {data.list.map((itemData, index) => (
                <li
                    key={index}
                    className={`${prefix}__item ${item}`}
                    {...itemData?.handler}>
                    {itemData.content}
                    {/* 
						The caret only shows on sideMenu options, not on the sideContent.
					*/}
                    {prefix === "sideMenu" && rightCaret} 
                </li>
            ))}
        </ul>
    );
}

export default SideMenuList;
