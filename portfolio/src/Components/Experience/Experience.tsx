'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { ExperienceCard } from '@/types'
import CardExperience from './CardExperience'

const Experience = () => {

    const t = useTranslations()

 const arrayExperienceCards : ExperienceCard[] = [
    {
        title: t("Experience.Card1.title"),
        key: 1,
    description : t("Experience.Card1.description"),
    tecs : ["TailwindCSS", "ThreeJS", "Web3", "Firebase", "Moralis"],
    begin: t("Experience.Card1.begin"),
    final: t("Experience.Card1.final")
        },
    {
            title: t("Experience.Card2.title"),
            key: 2,
    description : t("Experience.Card2.description"),
    tecs : ["Scrum", "Git", "React", "Express",],
    begin: t("Experience.Card2.begin"),
    final: t("Experience.Card2.final")
        },


]
  return (

    < div id="About" className="flex flex-col w-full h-full min-h-screen max-w-screen-md gap-10 justify-center items-center ">

        <div className='flex flex-col gap-3  w-10/12 items-center justify-center '>
            <p>{t("Experience.description")} </p>
            <p>{t("Experience.description2")} </p>
        </div>

        <h1 className='font-semibold text-xl'>{t("Experience.title")}</h1>

        <div id='CardsContainer' className='flex flex-col w-10/12 gap-2 justify-center items-center'>
            {
            arrayExperienceCards?.map((cardData)=>{
                return (
                    <CardExperience 

                    tecs={cardData.tecs}
                    begin={cardData.begin}
                    final={cardData.final}
                    description={cardData.description}
                    title={cardData.title}
                    key={cardData.key} 
                    />
                )
            })
            }
        </div>

     </div>
  )
}

export default Experience
