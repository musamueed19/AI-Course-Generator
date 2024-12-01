import { HiOutlineHome, HiOutlineShieldCheck } from "react-icons/hi";
import { HiOutlineSquare3Stack3D, HiOutlinePower } from "react-icons/hi2";


const size = 24;

export const menuLists = [
  {
    label: "Home",
    href: "/dashboard",
    src: "",
    icon: <HiOutlineHome size={size} />,
  },
  {
    label: "Explore",
    href: "/dashboard/explore",
    src: "",
    icon: <HiOutlineSquare3Stack3D size={size} />,
  },
  {
    label: "Upgrade",
    href: "/dashboard/upgrade",
    src: "",
    icon: <HiOutlineShieldCheck size={size} />,
  },
  {
    label: "Logout",
    href: "/dashboard/logout",
    src: "",
    icon: <HiOutlinePower size={20} />,
  },
];
