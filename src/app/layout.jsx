import Header from "@/Components/Header";
import Aside from "../componentsLayout/Aside";
import '@/style/Global.css';
import Footer from "@/Components/Footer";

export default function layout({children}) {
  return (

    <html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body className="flex">
      <Aside/>
      <main className="w-[80%] overflow-hidden">
        <Header/>
        {children}
        <Footer/>
      </main>
    </body>
    </html>
  )
}

