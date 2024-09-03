import {
    IoLocationOutline,
    IoSearch,
    IoCartOutline,
    IoMenu,
} from "react-icons/io5";
import {
    FaDollarSign,
    FaCaretDown,
    FaUser,
    FaStar,
    FaRegStarHalfStroke,
    FaAngleDown,
    FaAngleUp,
} from "react-icons/fa6";
import { MdLanguage, MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { GrNext, GrPrevious } from "react-icons/gr";
import { GoReport } from "react-icons/go";

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
    prev: GrPrevious,
    star: FaStar,
    halfStar: FaRegStarHalfStroke,
    angleDown: FaAngleDown,
    angleUp: FaAngleUp,
    report: GoReport,
};

function Icon({ type, ...props }) {
    const SelectedIcon = iconComponents[type];
    return <SelectedIcon {...props} />;
}

export default Icon;
