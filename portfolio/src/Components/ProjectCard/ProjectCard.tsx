import React from 'react'
import { projectCardProps } from '@/types'
import Image from 'next/image'

const ProjectCard = ({title, img, alt, description, techs, url}:projectCardProps) => {
  return (
    <div className='w-full h-full flex flex-col justify-center gap-4 p-3 items-center bg-wine/10 rounded-lg'>
      <h1 className='text-lg font-semibold'>{title}</h1>
      <div>
      <Image  src={img} width={200} height={100} alt={alt}/>

      </div>
      <p>{description}</p>
      <div className='w-full flex flex-wrap gap-1'>
        {techs.map((e)=>{
            return(
                <div className="text-sm w-fit flex items-center rounded-full bg-wine/20 px-3 py-1  font-medium leading-5 text-ecru" key={e}>{e}</div>
            )
        })}
      </div>
    </div>
  )
}

export default ProjectCard
