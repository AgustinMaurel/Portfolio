import React from 'react'
import { CardRecommend } from '@/types'
import Image from 'next/image'


const CustomCardRecommend = ({description, key, img, subtitle,title}:CardRecommend) => {
  return (
    <div key={key} className='w-full flex flex-col bg-wine/10 rounded-md px-4 py-2 justify-center items-center'>
        <div className='w-full flex justify-start gap-3 items-center'>

        <Image  width={80} height={80} className='rounded-full h-full' alt={title} src={img} />
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>

            </div>
        </div>

        <p>{description}</p>
        
      
    </div>
  )
}

export default CustomCardRecommend
