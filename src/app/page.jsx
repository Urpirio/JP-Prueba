import BtnConfiguration from "@/Components - Btns/BtnConfiguration";
import { BtnNavBlock } from "@/Components - Btns/NavBlock/BtnNavBlock";
import { BtnBelow, BtnOver } from "@/Components - Btns/SAA_Btns/Btns/Btns";
import Search_Filtro from "@/Components - Btns/SAA_Filtro/Search_Filtro";
import Select_Asunto from "@/Components - Btns/SAA_Selects/Select_Asunto";
import Select_Criterio from "@/Components - Btns/SAA_Selects/Select_Criterio";
import Select_Juez from "@/Components - Btns/SAA_Selects/Select_Juez";
import Select_Procedimiento from "@/Components - Btns/SAA_Selects/Select_Procedimiento";
import Select_Sala from "@/Components - Btns/SAA_Selects/Select_Sala";


export default function Home() {
  return (
   <main className="border-1 p-5">

    <section className="border-1">

      <div className="flex justify-end">
        <BtnConfiguration/>
      </div>

      <div>
        {/* Navegacion */}
        <nav className="flex border-1">
          <BtnNavBlock/>
        </nav>
        {/* Formulario */}
        <div className="flex flex-col py-5">

          <div className="px-5">
            <h2>SORTEO A ABOGADO AYUDANTE</h2>
          </div>

          <div className="flex gap-2 py-5 px-5">
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

          <div>

          </div>

        </div>
      </div>

    </section>
    
   </main>
  )
};
