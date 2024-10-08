'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { ExperienceCard } from '@/types'
import CardExperience from './CardExperience'


const Experience = () => {

const t = useTranslations("Experience")

const arrayExperienceCards : ExperienceCard[] = [
{
    title: t("Card1.title"),
    key: 1,
description : t("Card1.description"),
tecs : ["TailwindCSS", "ThreeJS", "Web3", "Firebase", "Moralis"],
begin: t("Card1.begin"),
final: t("Card1.final")
    },
{
        title: t("Card2.title"),
        key: 2,
description : t("Card2.description"),
tecs : ["Scrum", "Git", "React", "Express",],
begin: t("Card2.begin"),
final: t("Card2.final")
    },


]
  return (

    < div id="About" className="flex flex-col w-full h-full min-h-screen max-w-screen-md gap-16 justify-center items-start ">

        <div className='flex flex-col gap-3 text-lg w-10/12 items-center justify-center '>
            <p>{t("description")} </p>
            <p>{t("description2")} </p>
        </div>

        <h1 className='font-semibold text-2xl'>{t("title")}</h1>

        <div id='CardsContainer' className='flex flex-col h-full w-11/12 gap-20 justify-between items-center'>
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
