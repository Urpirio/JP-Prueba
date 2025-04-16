import { IoMdSettings } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

export default function BtnConfiguration() {
  return (
    <button className="flex items-center border-1 py-0.5 px-1 rounded-xs bg-[#7A838A] text-white">
        <IoMdSettings/>
        <span className="mb-1">Configuracion</span>
        <IoMdArrowDropdown/>
    </button>
  )
};
