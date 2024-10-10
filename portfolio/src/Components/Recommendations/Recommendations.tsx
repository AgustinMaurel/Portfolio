
import { useTranslations } from "next-intl";

import CarrouselRecommends from "../CarrouselRecommends/CarrouselRecommends";

export default function Recommendations (){
        const t = useTranslations("Recommendations")
  return (
    <div id="Recommendations" className="w-full  h-full px-2 flex flex-col justify-center gap-10 items-start ">
        <h1 className='text-xl 2xl:text-2xl font-semibold text-ecru'>{t("title")}</h1>
        <p className="text-md w-full ">{t("intro")}</p>
      <CarrouselRecommends slidesOnScreen={1} key={"2"} options={{}}/>
    </div>
  )
}

