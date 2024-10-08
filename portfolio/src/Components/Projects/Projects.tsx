import { useTranslations } from "next-intl"

export default function Projects(){
    
const t = useTranslations("Projects")
        return(

            <div id="Projects" className="flex flex-col w-full h-full justify-center gap-10 items-start mb-20 pt-20 ">
                    <h1 className="text-2xl font-semibold">{t("title")}</h1>
                    <p className="text-lg">{t("intro")}</p>
                    
             </div>


        )


}