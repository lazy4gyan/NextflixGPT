import  { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
import { LOGO } from "../../utils/constants";
import { LuSearch } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";

const TOP_OFFSET = 66;

type User = Record<string, string>;

const Navbar:React.FC<User> = ({user}) => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setAccountMenu((current) => !current);
  }, []);
  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
      px-4
      md:px-16
      py-6
      flex
      flex-row
      items-center
      transition
      duration-500
     
      ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}
      `}
      >
        <img src={LOGO} alt="logo" className="h-6 lg:h-16" />
        <div
          className="
        flex-row
        ml-8
        gap-7
        hidden
        lg:flex
        "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          {/* <IoIosArrowDown className="text-white transition"/> */}
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <LuSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <FaRegBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src={user?.photoURL} alt="avatar-image" />
              {/* <FaChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180':'rotate-0'}`}/> */}
              <AccountMenu visible={showAccountMenu} avatar={user?.photoURL} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
