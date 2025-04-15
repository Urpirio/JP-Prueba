import { IoMdArrowDropright } from "react-icons/io";

export default function Select_Criterio() {
  return (
    <div className="flex flex-col border-1 ">
        <div>
            <span className="text-[14px]">Criterio de busqueda</span>
        </div>
        <div className="flex justify-between items-center border-1 p-1.5 w-50">
            <span className="text-[14px]">Seleccionar tipo consulta</span>
            <IoMdArrowDropright/>
        </div>
    </div>
  )
}
