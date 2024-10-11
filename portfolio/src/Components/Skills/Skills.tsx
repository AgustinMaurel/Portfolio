import { useTranslations } from "next-intl"
import { techSkills, softSkills } from "@/utils/Skill"
import SkillsCard from "../SkillsCard/SkillsCard"

export default function Skills () {

        const t = useTranslations("Skills")
        const softSkillsTranslated = softSkills.map((s) => t(`softSkills.${s}`));
        return(

            <div id="Skills" className="flex flex-col w-full h-full gap-y-5 px-2 xl:max-w-screen-md justify-center  items-start xl:gap-y-10 ">

                     <h1 className=" text-xl text-ecru xl:text-2xl font-semibold">{t("title")}</h1>
                     <p className="text-md xl:text-lg xl:w-11/12 text-wrap">{t("intro")}</p>

                <div className="flex flex-col  w-full h-full justify-start items-start gap-5 xl:w-11/12 xl:flex-row"> 
                     <SkillsCard allSkills={techSkills} title="tech" titleKey="hard"/>   
                     <SkillsCard allSkills={softSkillsTranslated} title="soft" titleKey="soft"/>   
                        
                </div>
        </div>


        )

}