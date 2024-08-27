import {
    IoLocationOutline,
    IoSearch,
    IoCartOutline,
    IoMenu,
} from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

const iconComponents = {
    location: IoLocationOutline,
    search: IoSearch,
    down: FaCaretDown,
    cart: IoCartOutline,
    burger: IoMenu,
};

function Icon({ type, ...props }) {
    const SelectedIcon = iconComponents[type];
    return <SelectedIcon {...props} />;
}

export default Icon;
