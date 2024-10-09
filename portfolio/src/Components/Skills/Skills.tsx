import { useTranslations } from "next-intl"
import { techSkills, softSkills } from "@/utils/Skill"
import SkillsCard from "../SkillsCard/SkillsCard"

export default function Skills () {

        const t = useTranslations("Skills")
        const softSkillsTranslated = softSkills.map((s) => t(`softSkills.${s}`));
        return(

            <div id="Skills" className="flex flex-col w-full max-h-screen max-w-screen-md justify-center pt-20 items-start gap-y-10 ">

                     <h1 className="text-2xl font-semibold">{t("title")}</h1>
                     <p className="text-lg w-11/12 text-wrap">{t("intro")}</p>

                <div className="flex w-11/12 justify-start items-start gap-5"> 
                     <SkillsCard allSkills={techSkills} title="tech" titleKey="hard"/>   
                     <SkillsCard allSkills={softSkillsTranslated} title="soft" titleKey="soft"/>   
                        
                </div>
        </div>


        )

}