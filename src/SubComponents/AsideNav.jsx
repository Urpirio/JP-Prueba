'use client'
import { DataAsideNav } from "@/Data/DataAsideNav";

export default function AsideNav() {

  const BtnNavegacion = () => {
    const listBtnNav = DataAsideNav.map( DAN => {
      return(<li key={DAN.key} className="flex items-center gap-1 border-1 text-[18px] p-1">{DAN.Icon}<span>{DAN.Title}</span></li>)
    })
    return(listBtnNav)
  };



  return (
    <nav>
        <ul className="flex flex-col gap-1">
          <BtnNavegacion/>
        </ul>
    </nav>
  )
}
