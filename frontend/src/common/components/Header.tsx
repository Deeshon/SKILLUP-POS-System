import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import KebabMenuVertical from "./KebabMenuVertical";
import { TypeHeaderProps } from "../types";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BsFullscreen } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";

const menuItems = [
    {
        icon: <FaLocationCrosshairs size={18} />
    },
    {
        icon: <BsFullscreen size={18} />
    },
    {
        icon: <IoMailOutline size={18} />
    },
    {
        icon: <PiBellSimpleRingingBold size={18} />
    },
    {
        icon: <IoSettings size={18} />
    }
]


const Header = ({ isMenuClose, setIsMenuClose }: TypeHeaderProps) => {
  return (
    <div className="h-1/10 bg-navy-500 border-navy-300 p-2 md:p-0 border-b-2 flex items-center">
      <div className="md:hidden mx-4 my-6 flex items-center justify-between w-full">
        {isMenuClose && (
          <AiOutlineMenuUnfold
            className="text-darkYellow"
            size={35}
            onClick={() => setIsMenuClose(!isMenuClose)}
          />
        )}
        {!isMenuClose && (
          <AiOutlineMenuFold
            className="text-darkYellow"
            size={35}
            onClick={() => setIsMenuClose(!isMenuClose)}
          />
        )}

        <div className="size-25 bg-[url('/swift-pos-logo.png')] bg-center bg-cover bg-no-repeat"></div>

        <KebabMenuVertical />
      </div>
      <div className="hidden mx-0 my-6 md:flex items-center w-full justify-between">
        <div className="border-r-1 border-navy-300 w-1/5">
          <div className="size-25 bg-[url('/swift-pos-logo.png')] bg-center bg-cover bg-no-repeat"></div>
        </div>
        <div className="w-[78%] flex justify-between pr-10">
          <input
            type="text"
            className="border-2 border-navy-300 bg-navy-200 rounded-md p-[0.4rem] px-3 w-3/10 text-white text-sm"
            placeholder="Search"
          />
          <div className="flex justify-between items-center w-6/11">
            <select className="border-2 border-navy-300 text-ash-100 text-xs px-3 py-1 active:bg-ash-900 focus:bg-ash-900 rounded-md focus:outline-0">
              <option>Grocery Alpha</option>
              <option>Grocery Beat</option>
              <option>Grocery Theta</option>
              <option>Grocery Omega</option>
            </select>
            <div className="grid grid-cols-5 gap-3 text-ash-300">
            {menuItems.map((item) => (              <div className="size-10 bg-navy-100 rounded-md items-center flex justify-center">
                {item.icon}
                </div>))}
            </div>
            <div className="flex items-center justify-between w-28">
                <div className="size-10  rounded-md bg-[url('/profile-image-test.png')] bg-center bg-cover bg-no-repeat"></div>
                <div className="">
                  <h4 className="text-xs text-ash-100">John Doe</h4>
                  <h5 className="text-[0.6rem] text-ash-300">Super Admin</h5>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
