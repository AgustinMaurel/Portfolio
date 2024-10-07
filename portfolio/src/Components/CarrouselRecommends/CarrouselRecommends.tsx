'use client'

import { EmblaOptionsType } from 'embla-carousel'

import useEmblaCarousel from "embla-carousel-react"
import { CardRecommend } from "@/types"
import CustomCardRecommend from "../CustomCardRecommend/CustomCardRecommend"
import Autoplay from "embla-carousel-autoplay"
import { useTranslations } from 'next-intl'

type CarrouselProps = {
  slidesOnScreen :number,
  options?: EmblaOptionsType,
  
}


export default function CarrouselRecommends ({ slidesOnScreen=1, options}: CarrouselProps) {

  const t = useTranslations()

  const [emblaRef, emblaApi]= useEmblaCarousel({
    ...options,
    align: 'start',
    slidesToScroll: slidesOnScreen,
    containScroll: 'trimSnaps',
  },
  [Autoplay()],
)

const allRefs : CardRecommend[] =[
  {
    description:t("Recommendations.ref1.description"),
    img: "/img3.jpg",
    subtitle: t("Recommendations.ref1.subtitle"),
    title: t("Recommendations.ref1.title"),
  },
  {
    description:t("Recommendations.ref2.description"),
    img: "/img2.jpg",
    subtitle: t("Recommendations.ref2.subtitle"),
    title: t("Recommendations.ref2.title"),
  },
  {
    description:t("Recommendations.ref3.description"),
    img: "/img1.jpg",
    subtitle: t("Recommendations.ref3.subtitle"),
    title: t("Recommendations.ref3.title"),
  }
  
]

  return (
    <div className="flex flex-col w-10/12 h-full gap-2 items-center rounded-md p-1 justify-center  overflow-hidden">
      
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex min-h-fit gap-2 w-full">
          {allRefs.map((item) => (
            <div
              className={`flex w-full min-w-0 flex-none items-center justify-center `}
              key={item.key}
            >
              <CustomCardRecommend description={item.description} key={item.key} img={item.img} title={item.title} subtitle={item.subtitle}/>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-x-12">
   
      </div>
    </div>
  )
}

