import Image from "next/image";
import LogoHeader from '@/../public/HeaderSistem/LogoHeader.png';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header() {
  return (
    <header className="flex border-1 justify-between p-1">
        <div>
            <Image className="h-10 w-50 object-contain" src={LogoHeader} alt="Logo Header"/>
        </div>
        <div className="flex items-center">
            <div className="flex justify-end relative">
                <span className="flex justify-center items-center absolute bg-red-600 text-white rounded-[100%] h-2 w-2 p-2 ">1</span>
                <IoMdNotificationsOutline className="text-3xl text-blue-600"/>
            </div>
            <div>
                <AiOutlineQuestionCircle className="text-3xl text-blue-600"/>
            </div>
        </div>
    </header>
  )
}
