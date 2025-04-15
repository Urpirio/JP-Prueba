import { IoMdArrowDropright } from "react-icons/io";

export default function Select_Asunto() {
  return (
    <div className="flex flex-col border-1">
        <div>
            <span>Asunto</span>
        </div>
        <div className="flex justify-between items-center border-1 p-1.5 w-50">
            <span className="text-[14px]">Seleccionar asunto</span>
            <IoMdArrowDropright/>
        </div>
    </div>
  )
}
