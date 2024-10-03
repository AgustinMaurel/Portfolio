'use client'
import { ButtonNavbarProps } from '@/types'
import Link from 'next/link'
import React from 'react'

const CustomButtonNavbar = ({title, href, styles, handleClick}:ButtonNavbarProps) => {
  return (
    <Link 
      onClick={handleClick}
      className={styles}
      href={href}>
      {title}
    </Link>
  )
}

export default CustomButtonNavbar
