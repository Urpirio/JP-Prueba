import BtnConfiguration from "@/Components - Btns/BtnConfiguration";
import { BtnNavBlock } from "@/Components - Btns/NavBlock/BtnNavBlock";
import { BtnBelow, BtnOver } from "@/Components - Btns/SAA_Btns/Btns/Btns";
import Search_Filtro from "@/Components - Btns/SAA_Filtro/Search_Filtro";
import Select_Asunto from "@/Components - Btns/SAA_Selects/Select_Asunto";
import Select_Criterio from "@/Components - Btns/SAA_Selects/Select_Criterio";
import Select_Juez from "@/Components - Btns/SAA_Selects/Select_Juez";
import Select_Procedimiento from "@/Components - Btns/SAA_Selects/Select_Procedimiento";
import Select_Sala from "@/Components - Btns/SAA_Selects/Select_Sala";
import Table from "@/Components - Btns/SAA_Table/Table";


export default function Home() {
  return (
   <main className="  p-5">

    <section className="">

      <div className="flex justify-end">
        <BtnConfiguration/>
      </div>

      <div >
        {/* Navegacion */}
        <nav className="flex justify-center items-baseline-last relative">
          <div className="flex w-[100%]">
            <BtnNavBlock/>
          </div>
          <div className="h-[2px] rounded-2xl w-[100%] bg-blue-600 absolute"></div>
        </nav>
        {/* Formulario */}
        <div className="px-5 py-2 text-gray-600 border-b-2 border-l-1 border-r-1 border-gray-300">
            <h2>SORTEO A ABOGADO AYUDANTE</h2>
          </div>
        <div className="flex flex-col border-b-1 border-l-1 border-r-1 py-2 border-gray-300 rounded-b-xs rounded-xs shadow-xl">

          

          <div className="flex gap-2 py-2 px-5">
            <BtnOver/>
          </div>

          <div className="flex justify-around px-1 gap-10 w-[100%] mb-5">
            <Select_Sala/>
            <Select_Juez/>
          </div>

          <div className="flex justify-around px-1 w-[100%]">
              <Select_Procedimiento/>
              <Select_Asunto/>
              <Select_Criterio/>
              <Search_Filtro/>
          </div>

          <div className="flex justify-end p-5 gap-2">
            <BtnBelow/>
          </div>

          <div className="flex justify-center p-5">
            <Table/>
          </div>

        </div>
      </div>

    </section>
    
   </main>
  )
};
