import { createPortal } from "react-dom";

import "./style.scss";

function BackDrop({ targetId, ...props }) {
    return createPortal(
        <div className={`backDrop backDrop${targetId === "root" ? "--root" : "--header"}`} {...props}></div>,
        document.getElementById(targetId)
    );
}

export default BackDrop;
