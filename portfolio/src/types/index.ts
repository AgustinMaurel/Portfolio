import { MouseEventHandler } from "react";


export type projectCardProps = {
    title: string,
    img: string ,
    alt: string,
    description: string,
    techs: string[],
    url: string
}

export type Tech =
  | 'Javascript'
  | 'Typescript'
  | 'MongoDB'
  | 'React'
  | 'React Native'
  | 'NextJS'
  | 'NodeJS'
  | 'TailwindCSS'
  | 'PostgreSQL'
  | 'Azure'
  | 'Firebase'
  | 'Redux'
  | 'GIT'
  | 'ThreeJs'
  | 'ExpressJS'
  | 'CSS'
  | 'Web3'
  | 'Scrum'
  | 'Lean'
  | 'HTML';


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
    
}
