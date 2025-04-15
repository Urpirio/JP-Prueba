import { IoMdArrowDropright } from "react-icons/io";

export default function Select_Juez() {
  return (
    <div className="flex flex-col justify-center w-[45%] border-1">
        <div>
            <span>Juez/a</span>
        </div>
        <div className="flex justify-between items-center border-1 p-1 ">
            <span>Seleccionar sala</span>
            <IoMdArrowDropright/>
        </div>
    </div>
  )
}
