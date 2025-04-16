import Image from "next/image";
import PhotoPerfil from '@/../public/Perfil/PerfilPhoto.png';

export default function AsidePerfil() {
  return (
    <section className="flex flex-col items-center py-2">
        <div className="rounded-[100%] ">
            <Image className="h-20 w-20 rounded-[100%] object-contain" src={PhotoPerfil} alt="Img Perfil"/>
        </div>
        <div className="
        flex
        flex-col
        text-center
        [&div>h2]:text-2xl
        [&div>h2]:text-blue-600
        [&div>span]:text-xs

        ">
            <h2>Sandy Garcia</h2>
            <span>Administrador</span>
        </div>
    </section>
  )
}
