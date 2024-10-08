import React from 'react'
import { CardRecommend } from '@/types'
import Image from 'next/image'


const CustomCardRecommend = ({description, img, subtitle,title}:CardRecommend) => {
  return (
    <div key={title} className='w-full h-full flex flex-col bg-wine/10 rounded-md px-4 py-2 gap-4 justify-evenly items-center'>

        <div className='w-full flex flex-col  xl:flex-row justify-start gap-3  items-start'>

            <Image  width={70} height={70} className='rounded-full h-full' alt={title} src={img} />
                <div>
                    <h1 className='text-lg font-semibold'>{title}</h1>
                    <h2 className='text-md font opacity-40'>{subtitle}</h2>

                </div>
        </div>

        <p className='text-sm'>{description}</p>
        
      
    </div>
  )
}

export default CustomCardRecommend
