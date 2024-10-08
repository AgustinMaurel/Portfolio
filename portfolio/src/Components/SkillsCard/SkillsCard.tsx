import { useTranslations } from "next-intl"

type skillCardProps ={
    title: string,
    allSkills: string[],
    titleKey: string,

}

const SkillsCard = ({allSkills,title,titleKey}:skillCardProps) => {

const t =useTranslations("Skills")

  return (
    <div key={title} className=" h-full full gap-3 flex flex-wrap justify-center items-center px-3 py-4  bg-wine/10 rounded-lg ">
        
        <h2 className="text-lg">{t(titleKey)}</h2>

        <div className=" h-full full gap-3 flex flex-wrap justify-center items-center ">

            {
            allSkills.map((e)=>{
                    return (
                            <div className="text-sm w-fit flex items-center rounded-full bg-wine/20 px-3 py-1  font-medium leading-5 text-ecru" key={e}>{e}</div>
                    )
            })}


        </div>
</div>
  )
}

export default SkillsCard
