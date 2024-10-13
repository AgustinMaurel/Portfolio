'use client'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import CardExperience from './CardExperience'
import { arrayExperienceCards } from '@/utils/Experience'


const Experience = () => {

const t = useTranslations("Experience")
const [isLargeScreen, setIsLargeScreen] = useState(false);
  

useEffect(() => {
   const updateIsLargeScreen = () => setIsLargeScreen(window.innerWidth >= 1921); // xl breakpoint in Tailwind

   updateIsLargeScreen(); // Set initial value
   window.addEventListener('resize', updateIsLargeScreen);

   return () => window.removeEventListener('resize', updateIsLargeScreen);
 }, []);

  return (

    < div id="About" className={`flex flex-col w-full h-full xl:pt-20 2xl:pt-0   gap-6 justify-center items-start ${isLargeScreen? "2xl:pt-40":""} `} >

        <h2 className='text-xl text-ecru px-2 font-semibold'>{t("about")}</h2>

            <div className='flex flex-col gap-3 px-2 h-full w-full items-center justify-center xl:items-start text-wrap xl:text-md 2xl:text-lg '>

                <p className='w-full text-md xl:w-11/12'>{t("description")} </p>
                <p className='w-full text-md xl:w-11/12' >{t("description2")} </p>

            </div>


        <h1 className='font-semibold text-xl px-2 text-ecru xl:text-2xl'>{t("title")}</h1>

        <div id='CardsContainer' className='flex flex-col w-full h-full xl:w-11/12 gap-20 justify-between items-center'>
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
