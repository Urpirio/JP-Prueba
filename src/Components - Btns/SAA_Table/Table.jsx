
export default function Table() {
  return (
    <table className=" w-[100%]">
        <thead className="bg-[#DBE8FF]">
            <tr>
                <th className="p-2 text-[#3371F1] font-normal" scope="col">NUC</th>
                <th className="p-2 text-[#3371F1] font-normal" scope="col">Tramite</th>
                <th className="p-2 text-[#3371F1] font-normal" scope="col">Solicitud</th>
                <th className="p-2 text-[#3371F1] font-normal" scope="col">Asunto</th>
                <th className="p-2 text-[#3371F1] font-normal" scope="col">Materia</th>
                <th className="p-2 text-[#3371F1] font-normal" scope="col">Objeto</th>
                <th className="p-2 text-[#3371F1] font-normal" scope="col">Fecha asignacion juez/a</th>
                <th className="p-2 text-[#3371F1] font-normal" scope="col">Estatus</th>
                <th className="p-2 text-[#3371F1] font-normal" scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody className="bg-gray-100 text-gray-500">
            <td className="text-center p-5" scope="row" colSpan={`9`}>
                Ningun dato disponible en esta tabla
            </td>
        </tbody>
        <tfoot>

           

        </tfoot>
    </table>
  )
};

