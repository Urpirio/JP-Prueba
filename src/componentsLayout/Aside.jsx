
import AsideNav from "@/SubComponents/AsideNav";
import AsidePerfil from "@/SubComponents/AsidePerfil";

export default function Aside() {
  return (
    <aside className=" flex-col shadow-2xl bg-[#DBE8FF] w-[20%] h-screen p-2 hidden sm:flex">
        <AsidePerfil/>
        <AsideNav/>
    </aside>
  )
};
