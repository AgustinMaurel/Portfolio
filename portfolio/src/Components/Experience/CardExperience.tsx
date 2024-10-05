'use client'
import React from 'react'

import { ExperienceCard } from '@/types'

const CardExperience = ({title, description, begin, final, tecs}:ExperienceCard) => {
  return (
    <div className='flex justify-center  items-center  w-full h-full hover:bg-wine hover:bg-opacity-10 transition-all ease-in-out duration-500 rounded-lg p-4 '>

        <div className='flex flex-col text-xs h-full w-4/12 justify-start place-items-start'>
                <span>{begin}</span>
                <span>{final}</span>
        </div>

        <div className='flex flex-col w-full  gap-5 justify-center items-center'>

                <h1 className='font-semibold text-lg'>{title}</h1>

                <p className='flex w-full justify-center items-center text-md text-wrap'>{description}</p>

                <div className='flex w-full gap-1 justify-start items-center'>
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
