'use client'

import { EmblaOptionsType } from 'embla-carousel'

import useEmblaCarousel from "embla-carousel-react"
import { CardRecommend } from "@/types"
import CustomCardRecommend from "../CustomCardRecommend/CustomCardRecommend"
import Autoplay from "embla-carousel-autoplay"

type CarrouselProps = {
  slidesOnScreen :number,
  options?: EmblaOptionsType,
  
}

const allRefs : CardRecommend[] =[
  {
    description:"He was a valuable team member, possessing expertise and a proactive approach to problem-solving. His teamwork and effective communication with the UX team helped reach our goals.",
    img: "/img1.jpg",
    subtitle: "Diseñador de Producto, Gráfico & Multimedial | Tutor",
    title: " Fernando Gabriel Villabrille",
    key:1
  },
  {
    description:"He was a valuable team member, possessing expertise and a proactive approach to problem-solving. His teamwork and effective communication with the UX team helped reach our goals.",
    img: "/img2.jpg",
    subtitle: "Diseñador de Producto, Gráfico & Multimedial | Tutor",
    title: " Fernando Gabriel Villabrille",
    key:2
  },
  {
    description:"He was a valuable team member, possessing expertise and a proactive approach to problem-solving. His teamwork and effective communication with the UX team helped reach our goals.",
    img: "/img3.jpg",
    subtitle: "Diseñador de Producto, Gráfico & Multimedial | Tutor",
    title: " Fernando Gabriel Villabrille",
    key:3
  },
  
]
export default function CarrouselRecommends ({ slidesOnScreen=1, options}: CarrouselProps) {

  const [emblaRef, emblaApi]= useEmblaCarousel({
    ...options,
    align: 'start',
    slidesToScroll: slidesOnScreen,
    containScroll: 'trimSnaps',
  },
  [Autoplay()],
)

  



  return (
    <div className="flex flex-col w-10/12 h-full gap-2 items-center rounded-md p-1 justify-center  overflow-hidden">
      <h1 className='text-xl font-semibold'>Recommendations</h1>
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

