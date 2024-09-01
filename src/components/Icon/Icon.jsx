import {
    IoLocationOutline,
    IoSearch,
    IoCartOutline,
    IoMenu,
} from "react-icons/io5";
import { FaDollarSign, FaCaretDown, FaUser } from "react-icons/fa6";
import { MdLanguage, MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { GrNext, GrPrevious } from "react-icons/gr";

const iconComponents = {
    location: IoLocationOutline,
    search: IoSearch,
    down: FaCaretDown,
    cart: IoCartOutline,
    burger: IoMenu,
    language: MdLanguage,
    dollar: FaDollarSign,
    user: FaUser,
    right: MdOutlineNavigateNext,
    back: IoMdArrowBack,
	next: GrNext,
	prev: GrPrevious
};

function Icon({ type, ...props }) {
    const SelectedIcon = iconComponents[type];
    return <SelectedIcon {...props} />;
}

export default Icon;
