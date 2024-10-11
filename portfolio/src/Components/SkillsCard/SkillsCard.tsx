import { useTranslations } from "next-intl"

type skillCardProps ={
    title: string,
    allSkills: string[],
    titleKey: string,

}

const SkillsCard = ({allSkills,title,titleKey}:skillCardProps) => {

const t =useTranslations("Skills")

  return (
    <div key={title} className=" h-full w-full gap-3 flex flex-col justify-start items-start px-3 py-4  bg-wine/10 rounded-lg ">
        
        <h2 className="text-md xl:text-lg">{t(titleKey)}</h2>

        <div className=" h-fit w-full gap-3 flex flex-wrap justify-start items-start ">

            {
            allSkills.map((e)=>{
                    return (
                            <div className="text-sm w-fit   rounded-full bg-wine/20 px-3 py-1  font-medium leading-5 text-ecru" key={e}>{e}</div>
                    )
            })}


        </div>
</div>
  )
}

export default SkillsCard
