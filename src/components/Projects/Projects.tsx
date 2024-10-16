import { useTranslations } from "next-intl"
import { allProjects } from "@/utils/projects"
import ProjectCard from "../ProjectCard/ProjectCard"


export default function Projects(){
    
const t = useTranslations("Projects")
        return(

            <div id="Projects" className="flex flex-col  w-full h-full justify-center px-5 xl:px-2 gap-y-10 items-start  ">

                <h1 className="text-xl text-ecru xl:text-2xl font-semibold">{t("title")}</h1>
                <p className=" text-md xl:text-lg xl:w-11/12">{t("intro")}</p>

                <div className=" flex  flex-col lg:flex-row xl:flex-col justify-center w-full xl:w-11/12 gap-4  items-start">
                        {
                        allProjects.map((project)=>{
                                return(
                                        <ProjectCard
                                                title={project.title}
                                                img={project.img}
                                                alt={project.alt}
                                                description={project.description}
                                                techs={project.techs}
                                                url={project.url}
                                                key={project.title}
                                                
                                                />
                                        )
                                })

                        }
                </div>
                
                    
             </div>


        )


}