import { IoMdSettings } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

export default function BtnConfiguration() {
  return (
    <button className="flex items-center border-1 p-1 rounded-md">
        <IoMdSettings/>
        <span>Configuracion</span>
        <IoMdArrowDropdown/>
    </button>
  )
};
