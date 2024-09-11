import { createPortal } from "react-dom";

import "./style.scss";

function BackDrop({ targetId, ...props }) {
    /* 
		This component is the dark thing that appears when 
		user clicks on the side menu or hover on dropdown menus on the header, 
		and when the use clicks on it, the menu will close.
	*/
    return createPortal(
        <div className={`backDrop backDrop--${targetId}`} {...props}></div>,
        document.getElementById(targetId)
    );
}

export default BackDrop;
