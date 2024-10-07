
import { useTranslations } from "next-intl";

import CarrouselRecommends from "../CarrouselRecommends/CarrouselRecommends";



export default function Recommendations (){
        const t = useTranslations()
  return (
    <div id="Recommendations" className="w-full  h-fit flex flex-col justify-center gap-10 items-start ">
        <h1 className='text-xl font-semibold'>{t("Navbar.recommendations")}</h1>
        <p>gesgsegsgesg</p>
      <CarrouselRecommends slidesOnScreen={1} key={"2"} options={{}}/>
    </div>
  )
}

