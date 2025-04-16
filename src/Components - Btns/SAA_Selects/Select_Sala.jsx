import { IoMdArrowDropright } from "react-icons/io";

export default function Select_Sala() {
  return (
    <div className="flex flex-col justify-center w-[45%]">
        <div>
            <span className="text-gray-600 text-[14px]">Sala<i className="text-red-600 font-bold">*</i></span>
        </div>
        <div className="flex justify-between items-center border-1 border-gray-300  rounded-xs p-1 ">
            <span className="text-gray-500">Seleccionar sala</span>
            <IoMdArrowDropright className="text-gray-500"/>
        </div>
    </div>
  )
};
