import {
    IoLocationOutline,
    IoSearch,
    IoCartOutline,
    IoMenu,
    IoEarthOutline,
} from "react-icons/io5";
import {
    FaDollarSign,
    FaCaretDown,
    FaUser,
    FaStar,
    FaRegStarHalfStroke,
    FaAngleDown,
    FaAngleUp,
    FaBarcode,
} from "react-icons/fa6";
import {
    MdLanguage,
    MdOutlineCalendarMonth,
    MdOutlineNavigateNext,
} from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { GrNext, GrPrevious } from "react-icons/gr";
import { GoReport } from "react-icons/go";
import { BsBook } from "react-icons/bs";
import { PiBabyDuotone, PiBuildingOffice } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";

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
    BsBook,
    IoEarthOutline,
    PiBuildingOffice,
    MdOutlineCalendarMonth,
    RxDimensions,
    FaBarcode,
    PiBabyDuotone,
};

function Icon({ type, ...props }) {
    const SelectedIcon = iconComponents[type];
    return <SelectedIcon {...props} />;
}

export default Icon;
