
import AsideNav from "@/SubComponents/AsideNav";
import AsidePerfil from "@/SubComponents/AsidePerfil";

export default function Aside() {
  return (
    <aside className=" flex-col border-1 w-[20%] p-2 hidden sm:flex">
        <AsidePerfil/>
        <AsideNav/>
    </aside>
  )
};
