'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import CardExperience from './CardExperience'
import { arrayExperienceCards } from '@/utils/Experience'


const Experience = () => {

const t = useTranslations("Experience")


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
                    begin={t(`${cardData.key}.begin`)}
                    final={t(`${cardData.key}.final`)}
                    description={t(`${cardData.key}.description`)}
                    title={t(`${cardData.key}.title`)}
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
