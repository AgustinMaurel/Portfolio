import { MouseEventHandler } from "react";



export interface ButtonNavbarProps {
    title: string,
    href: string,
    styles?: string,
    handleClick?: MouseEventHandler<HTMLAnchorElement>

}

export interface ExperienceCard {
    key: number,
    title: string,
    description : string,
    tecs : string[],
    begin: string,
    final: string
}

export interface CardRecommend {
    img: string,
    title: string,
    subtitle: string,
    description: string,
    key:number
}