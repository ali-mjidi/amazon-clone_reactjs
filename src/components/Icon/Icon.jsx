import { IoLocationOutline } from "react-icons/io5";

const iconComponents = {
    location: IoLocationOutline,
};

function Icon({ type, ...props }) {
    const SelectedIcon = iconComponents[type];
    return <SelectedIcon {...props} />;
}

export default Icon;
