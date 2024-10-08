'use client'
import { NextButton, PrevButton, usePrevNextButtons } from './ButtonCarrousel';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from "embla-carousel-react"
import { CardRecommend } from "@/types"
import CustomCardRecommend from "../CustomCardRecommend/CustomCardRecommend"
import Autoplay from "embla-carousel-autoplay"
import { useTranslations } from 'next-intl'
import { useCallback } from 'react';

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

const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
  const autoplay = emblaApi?.plugins()?.autoplay;
  if (!autoplay) return;

  const resetOrStop =
    autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

  resetOrStop();
}, []);

const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className="flex  w-10/12 h-full gap-2 items-center rounded-md p-1 justify-center  overflow-hidden">

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

      <div className="w-full overflow-hidden" ref={emblaRef}>

        <div className="flex min-h-fit gap-2 w-full">
          {allRefs.map((item) => (
            <div
              className={`flex w-full min-w-0 flex-none items-center justify-center `}
              key={item.title}
            >
              <CustomCardRecommend description={item.description} key={item.title} img={item.img} title={item.title} subtitle={item.subtitle}/>
            </div>
          ))}
        </div>
      </div>
      
       
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
     
    </div>
  )
}

