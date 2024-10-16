'use client'
import React from 'react'

import { ExperienceCard } from '@/types'

const CardExperience = ({title, description, begin, final, tecs}:ExperienceCard) => {
  return (
    <div className='flex flex-col xl:flex-row justify-center   items-center  w-full h-full hover:bg-wine/10 hover:bg-opacity-10 transition-all ease-in-out duration-500 rounded-lg p-5 '>

        <div className='flex font-semibold opacity-50 text-xs h-full w-full justify-start items-start xl:w-4/12 xl:gap-4  xl:justify-start '>
                <span>{begin} — {final}</span>
                
        </div>

        <div className='flex flex-col w-full  gap-5 justify-start items-start'>

                <h1 className='font-semibold text-lg'>{title}</h1>

                <p className='flex w-full justify-center items-center text-md text-wrap'>{description}</p>

                <div className='flex w-full gap-1 justify-start items-center flex-wrap'>
                {tecs.map(tec=>{
                    return (
                        <label className='text-xs w-fit flex items-center rounded-full bg-wine/20 px-3 py-1 font-medium leading-5 text-ecru' key={tec}>{tec}</label>
                    )
                        })}
                </div>
        </div>
    </div>
            )
}


export default CardExperience
