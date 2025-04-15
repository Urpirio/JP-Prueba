import { IoMdArrowDropright } from "react-icons/io";

export default function Select_Procedimiento() {
  return (
    <div className="flex flex-col border-1">
        <div>
            <span>Procedimiento</span>
        </div>
        <div className="flex justify-between items-center border-1 p-1.5 ">
            <span className="text-[14px]">Seleccionar tipo de Procedimiento</span>
            <IoMdArrowDropright/>
        </div>
    </div>
  )
};
