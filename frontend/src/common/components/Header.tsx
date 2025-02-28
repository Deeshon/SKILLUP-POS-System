import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import KebabMenuVertical from "./KebabMenuVertical";
import { TypeHeaderProps } from "../types";

const Header = ({ isMenuClose, setIsMenuClose }: TypeHeaderProps) => {
  return (
    <div className="h-1/10 bg-navy-500 border-navy-300 p-2 border-b-2 flex items-center">
      <div className="mx-4 my-6 flex items-center justify-between w-full">
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

        <KebabMenuVertical />
      </div>
    </div>
  );
};

export default Header;
