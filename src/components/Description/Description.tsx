import { useTranslations } from "next-intl"

export default function Description(){

    const t = useTranslations()
 
    return (
        <div id="description" className=" cursor-auto flex flex-col px-2 pt-10 lg:pb-48 w-screen relative justify-center items-start text-white xl:pb-36 2xl:pb-96 xl:pl-0 xl:h-full xl:w-full xl:max-h-screen xl:min-h-screen">


            <div className="flex flex-col  w-full h-full justify-center items-start ">

                <span className="font-bold text-xl 2xl:text-2xl">{t("About.pretitle")}</span>
                <h1 className="font-bold text-[35px] 2xl:text-[45px] text-ecru ">{t("About.title")}</h1>
                
            <p  className=" text-wrap w-full bg-inherit  outline-none xl:text-md 2xl:text-lg ">
                    {t("About.description")}
                </p>
            </div>
            
        </div>
    )
}