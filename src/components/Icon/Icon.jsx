import { IoLocationOutline, IoSearch, IoCartOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

const iconComponents = {
    location: IoLocationOutline,
    search: IoSearch,
    down: FaCaretDown,
    cart: IoCartOutline,
};

function Icon({ type, ...props }) {
    const SelectedIcon = iconComponents[type];
    return <SelectedIcon {...props} />;
}

export default Icon;
