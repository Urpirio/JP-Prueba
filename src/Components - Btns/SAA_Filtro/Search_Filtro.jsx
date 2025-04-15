import { IoSearchOutline } from "react-icons/io5";

export default function Search_Filtro() {
  return (
    <div className="border-1">
      <div>
        <span>Filtro generico</span>
      </div>
      <div className="flex items-center border-1">
        <input type="text" className="p-1 outline-none" placeholder="Ingrese el criterio al filtrar" />
        <button className="p-1">
            <IoSearchOutline/>
        </button>
      </div>
    </div>
  )
};
