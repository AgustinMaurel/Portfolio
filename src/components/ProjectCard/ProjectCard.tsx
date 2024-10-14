
import { projectCardProps } from '@/types'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaGithub } from 'react-icons/fa'


const ProjectCard = ({title, img, alt, description, techs, url}:projectCardProps) => {

const t = useTranslations("Projects")
  
 
  return (
    <div  className='w-full  h-full flex flex-col justify-center gap-4 p-3 items-center bg-wine/10 rounded-lg'>

      <div className='w-full h-full flex flex-col justify-start gap-4 items-center  sm:flex-row'>

        <Image
            className={` ${alt === "turnify"? "bg-white p-3":"bg-ecru/80 p-3" }   rounded-lg sm:w-4/12 md:w-3/12 lg:w-6/12 xl:w-4/12 lg:h-full`}
            src={img}
            width={200}
            height={100}
            alt={alt}
          />
        
        <div className='flex flex-col justify-start items-start gap-3 w-full h-full'>

              <div className='flex w-full justify-start gap-3 items-start'>
                    <h1 className=' text-xl font-semibold'>{t(`${alt}.${title}`)}</h1>
                    {url?
                    <a  href={url} target='_blank'>
                      <FaGithub  className={"text-2xl hover:text-ecru cursor-pointer"}/>

                    </a>: ""
                  }
              </div>

          <p className='text-md'>{t(`${alt}.${description}`)}</p>

        </div>

      </div>

      <div className='w-full flex flex-wrap gap-3 lg:gap-5 justify-start items-center'>
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
