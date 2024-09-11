import { createPortal } from "react-dom";

import "./style.scss";

function BackDrop({ targetId, ...props }) {
    return createPortal(
        <div className={`backDrop backDrop--${targetId}`} {...props}></div>,
        document.getElementById(targetId)
    );
}

export default BackDrop;
