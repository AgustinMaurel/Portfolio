import { useTranslations } from "next-intl"
import { allProjects } from "@/utils/data"
import ProjectCard from "../ProjectCard/ProjectCard"

export default function Projects(){
    
const t = useTranslations("Projects")
        return(

            <div id="Projects" className="flex flex-col  w-full h-full justify-ce gap-y-10 items-start mb-20 pt-20 ">

                <h1 className="text-2xl font-semibold">{t("title")}</h1>
                <p className="text-lg w-11/12">{t("intro")}</p>

                <div className=" flex justify-center w-11/12 gap-4  items-start">
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