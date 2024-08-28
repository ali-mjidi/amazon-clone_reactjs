import { createPortal } from "react-dom";

import "./style.scss";

function BackDrop({ targetId, closeFunc }) {
    return createPortal(
        <div className="backDrop" onClick={closeFunc}></div>,
        document.getElementById(targetId)
    );
}

export default BackDrop;
