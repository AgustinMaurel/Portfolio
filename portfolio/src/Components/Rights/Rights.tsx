import React from 'react'
import { useTranslations } from 'next-intl'

const Rights = () => {

    const t = useTranslations("Rights")

  return (
    <div className='w-full h-full flex flex-col justify-center items-center xl:justify-start xl:items-start pb-20 px-2'>

        <p className="span-sm span-wrap xl:w-8/12">
        <span className='opacity-30'>{t("designed")}</span>
         <a href="https://www.figma.com" target='_blank' className='font-semibold opacity-60  span-opacity-0 hover:text-ecru'>{`${t("figma")}`}</a>
        <span className='opacity-30'>{t("and")}</span>
         <a href="https://code.visualstudio.com/" target='_blank' className='font-semibold opacity-60  span-opacity-0 hover:text-ecru'>{`${t("visual")}`}</a>
        <span className='opacity-30'>{t("build")}</span>
         <a href="https://nextjs.org/" target='_blank' className='font-semibold opacity-60  span-opacity-0 hover:text-ecru'>{`${t("next")}`}</a>
        <span className='opacity-30'>{t("and1")}</span>
         <a href="https://tailwindcss.com/" target='_blank' className='font-semibold opacity-60  span-opacity-0 hover:text-ecru '>{`${t("tailwind")}`}</a>
        <span className='opacity-30'>{t("deploy")}</span>
         <a href="https://vercel.com/" target='_blank' className='font-semibold opacity-60  span-opacity-0 hover:text-ecru'>{`${t("vercel")}`}</a>
         
         
         </p>
         <span className='text-md  opacity-30'>{t("created")}</span>
    </div>
  )
}

export default Rights
