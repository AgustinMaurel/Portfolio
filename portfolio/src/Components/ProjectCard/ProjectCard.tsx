
import { projectCardProps } from '@/types'
import Image from 'next/image'
import { useTranslations } from 'next-intl'


const ProjectCard = ({title, img, alt, description, techs, url}:projectCardProps) => {

const t = useTranslations("Projects")
  
  return (
    <div  className='w-full  h-full flex flex-col justify-center gap-4 p-3 items-center bg-wine/10 rounded-lg'>

      <div className='w-full flex justify-start gap-4 items-center'>

        <Image className='w-4/12 bg-ecru/80 rounded-lg' src={img} width={200} height={100} alt={alt}/>
        
        <div className='flex flex-col justify-start items-start gap-3 w-full  h-full'>

         <h1 className='text-xl font-semibold'>{t(`${alt}.${title}`)}</h1>

          <p className='text-md'>{t(`${alt}.${description}`)}</p>

        </div>

      </div>

      <div className='w-full flex  gap-3 justify-start items-center'>
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
