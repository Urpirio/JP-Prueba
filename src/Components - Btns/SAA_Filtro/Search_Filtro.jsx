import { IoSearchOutline } from "react-icons/io5";

export default function Search_Filtro() {
  return (
    <div className="flex flex-col">
      <div>
        <span className="text-gray-600 text-[14px]">Filtro generico<i className="text-red-600 font-bold">*</i></span>
      </div>
      <div className="flex items-center border-1 border-gray-300 rounded-xs">
        <input type="text" className="p-1 outline-none" placeholder="Ingrese el criterio al filtrar" />
        <button className="p-2 border-1 border-gray-400  rounded-r-xs bg-gray-400 text-white">
            <IoSearchOutline/>
        </button>
      </div>
    </div>
  )
};
