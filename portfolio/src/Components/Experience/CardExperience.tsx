'use client'
import React from 'react'

import { ExperienceCard } from '@/types'

const CardExperience = ({title, description, begin, final, tecs}:ExperienceCard) => {
  return (
    <div className='flex flex-col justify-center  items-center  w-full h-full hover:bg-wine/10 hover:bg-opacity-10 transition-all ease-in-out duration-500 rounded-lg p-2 '>

        <div className='flex gap-2 text-xs h-full w-full justify-start place-items-start xl:gap-0 xl:flex-col '>
                <span>{begin}</span>
                <span> {final}</span>
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
