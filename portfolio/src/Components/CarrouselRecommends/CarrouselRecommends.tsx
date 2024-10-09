'use client'
import { NextButton, PrevButton, usePrevNextButtons } from './ButtonCarrousel';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from "embla-carousel-react"
import CustomCardRecommend from "../CustomCardRecommend/CustomCardRecommend"
import Autoplay from "embla-carousel-autoplay"
import { useTranslations } from 'next-intl'
import { useCallback } from 'react';
import { allRefs } from '@/utils/Recommendations';

type CarrouselProps = {
  slidesOnScreen :number,
  options?: EmblaOptionsType,
  
}

export default function CarrouselRecommends ({ slidesOnScreen=1, options}: CarrouselProps) {

  const t = useTranslations("Recommendations")

  const [emblaRef, emblaApi]= useEmblaCarousel({
    ...options,
    align: 'start',
    slidesToScroll: slidesOnScreen,
    containScroll: 'trimSnaps',
  },
  [Autoplay()],
)

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
    <div className="flex  w-11/12 h-full gap-2 items-center rounded-md p-1 justify-center  overflow-hidden">

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

      <div className="w-full overflow-hidden" ref={emblaRef}>

        <div className="flex min-h-fit gap-2 w-full">
          {allRefs.map((item) => (
            <div
              className={`flex w-full min-w-0 flex-none items-center justify-center `}
              key={item.reference}
            >
              <CustomCardRecommend 
                reference={item.reference}
                description={t(`${item.reference}.${item.description}`)}
                key={item.title}
                img={item.img}
                title={t(`${item.reference}.${item.title}`)}
                subtitle={t(`${item.reference}.${item.subtitle}`)}/>
            </div>
          ))}
        </div>
      </div>
      
       
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
     
    </div>
  )
}

