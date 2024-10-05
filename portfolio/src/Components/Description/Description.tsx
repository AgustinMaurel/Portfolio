import { useTranslations } from "next-intl"

export default function Description(){

    const t = useTranslations()
 
    return (
        <div id="description" className=" flex flex-col text-white lg:pb-80 h-full max-h-screen min-h-screen w-full justify-start items-start ">


            <div className="flex flex-col w-full h-full justify-center items-start gap-1">
                <span className="font-bold text-2xl">{t("About.pretitle")}</span>
                <h1 className="font-bold text-[50px] pb-2">{t("About.title")}</h1>
            <p  className=" text-xl text-wrap w-full bg-inherit  outline-none ">
                    {t("About.description")}
                </p>
            </div>
            
        </div>
    )
}