import { useTranslations } from "next-intl"

export default function Skills () {

        const t = useTranslations()

        return(

            <div id="Skills" className="flex flex-col w-full h-full min-h-screen max-w-screen-md justify-center items-start gap-10 ">
                     <h1 className="text-2xl font-semibold">{t("Skills.title")}</h1>
                     <p className="text-lg text-wrap">{t("Skills.intro")}</p>
             </div>


        )

}