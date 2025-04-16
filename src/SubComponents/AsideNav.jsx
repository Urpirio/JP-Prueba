'use client'
import { DataAsideNav } from "@/Data/DataAsideNav";

export default function AsideNav() {

  const BtnNavegacion = () => {
    const listBtnNav = DataAsideNav.map( DAN => {
      return(<li key={DAN.key} className="flex items-center gap-1 text-[15px] p-1.5 hover:bg-blue-200 hover:text-white cursor-pointer rounded-md w-[100%]">{DAN.Icon}<span>{DAN.Title}</span></li>)
    })
    return(listBtnNav)
  };



  return (
    <nav className=" h-[100%] w-[100%] flex justify-center">
        <ul className="flex flex-col gap-1 w-[100%]">
          <BtnNavegacion/>
        </ul>
    </nav>
  )
}
