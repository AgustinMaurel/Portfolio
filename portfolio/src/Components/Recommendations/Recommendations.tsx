
import { useTranslations } from "next-intl";

import CarrouselRecommends from "../CarrouselRecommends/CarrouselRecommends";



export default function Recommendations (){
        const t = useTranslations()
  return (
    <div id="Recommendations" className="w-full  h-fit flex flex-col justify-center gap-10 items-start ">
        <h1 className='text-2xl font-semibold'>{t("Recommendations.title")}</h1>
        <p className="text-lg w-11/12 text-wrap">{t("Recommendations.intro")}</p>
      <CarrouselRecommends slidesOnScreen={1} key={"2"} options={{}}/>
    </div>
  )
}

