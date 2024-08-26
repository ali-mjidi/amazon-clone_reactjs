import { IoLocationOutline } from "react-icons/io5";

const iconComponents = {
    location: IoLocationOutline,
};

function Icon({ type, size, color }) {
    const SelectedIcon = iconComponents[type];
    return <SelectedIcon size={size} color={color} />;
}

export default Icon;
