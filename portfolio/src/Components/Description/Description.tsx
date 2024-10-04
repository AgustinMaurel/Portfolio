import { useTranslations } from "next-intl"

export default function Description(){

    const t = useTranslations()
 
    const text:string ='quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. r ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. r ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum. r ejemplo Aldus PageMaker, el cual incluye versiones de LorageMaker, el cualorem Ipsum. '
    return (
        <div id="description" className=" flex  text-white lg:pb-56 h-full max-h-screen min-h-screen w-full justify-start items-center ">


            <div className="flex flex-col w-full h-full justify-center items-start gap-2">
                <h1 className="font-bold text-xl pb-2">{t("Index.title")}</h1>
                <p  className="  text-wrap w-full bg-inherit  outline-none ">
                    {text}
                </p>

            </div>
            
        </div>
    )
}