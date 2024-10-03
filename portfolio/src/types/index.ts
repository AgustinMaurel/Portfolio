import { MouseEventHandler } from "react";



export interface ButtonNavbarProps {
    title: string,
    href: string,
    styles?: string,
    handleClick?: MouseEventHandler<HTMLAnchorElement>

}