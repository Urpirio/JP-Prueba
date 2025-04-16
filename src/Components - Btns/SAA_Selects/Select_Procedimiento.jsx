import { IoMdArrowDropright } from "react-icons/io";

export default function Select_Procedimiento() {
  return (
    <div className="flex flex-col">
        <div>
            <span className="text-gray-600 text-[14px]">Procedimiento<i className="text-red-600 font-bold">*</i></span>
        </div>
        <div className="flex justify-between items-center border-1 border-gray-300  rounded-xs p-1.5 ">
            <span className="text-[14px] text-gray-500">Seleccionar tipo de Procedimiento</span>
            <IoMdArrowDropright className="text-gray-500"/>
        </div>
    </div>
  )
};
