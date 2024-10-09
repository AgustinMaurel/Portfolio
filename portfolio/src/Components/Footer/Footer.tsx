
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { useTranslations } from "next-intl";

export default function Footer(){

    const t = useTranslations('Footer')
    const classIcons = "text-2xl hover:text-ecru cursor-pointer"
    return(
        <div className="flex flex-col w-full h-20 pb-64 fixed  bottom-0 justify-start gap-3 items-center bg-transparent">

            <div className="flex  w-full   bottom-0 justify-start gap-3 items-center bg-transparent">

                <a href="mailto:maurel.a97@gmail.com" target="_blank" className="flex text-nowrap gap-1 text-md justify-center items-end">
                    <span className="text-sm">{t('contact')}</span>
                    <MdOutlineMailOutline  className={classIcons}/>
                </a>

                <a href="https://github.com/AgustinMaurel" target="_blank">
                <FaGithub  className={classIcons}/>
                </a>

                <a href="https://www.linkedin.com/in/agustin-maurel/" target="_blank">
                <FaLinkedin className={classIcons}/>
                </a>
            </div>

            <a target="_blank" href="https://drive.google.com/drive/folders/1b_pelGR7aSNqiWeGMUwMtLDzkT_NYs2L?usp=drive_link" className="w-full flex justify-start gap-1 items-end">
                <span className="text-sm">{t('download')}</span>
                <TbFileCv className={classIcons}/>
            </a>
        </div>
    )
}