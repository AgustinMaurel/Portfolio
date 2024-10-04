'use client'

import { MouseEvent } from "react";
import { GrLanguage } from "react-icons/gr";
import { useState } from "react";
import { useRouter } from "next/navigation";


const LangSwitcher = () => {

    const [flag, setFlag]=useState<boolean>(false)


    const router = useRouter();

    const onSelect = (event: MouseEvent<HTMLButtonElement>)=>{

        const finalValue  = event.target as HTMLButtonElement
        const nextLang = finalValue.value
        router.replace(nextLang)
        setFlag(false)

        }

    const handleClick = ()=>{
        setFlag(true)
    }
  return (
    <label className='flex h-full items-center justify-center'>
        <button onClick={handleClick}>
      <GrLanguage  className="CustomButtonNavbar hover:cursor-pointer"/>

        </button>
        
        {flag?
        <div onMouseLeave={()=>{setFlag(false)}} className={flag?'flex flex-col items-center text-sm justify-center border-licor w-[70px] gap-2 border-2 rounded-tl rounded-b bg-ecru text-licor p-1 absolute mt-20 mr-12 ':'sr-only'}id="">
            <button className="CustomButtonNavbar hover:font-bold hover:text-licor" onClick={onSelect}  value="es">Spanish</button>
            <button className="CustomButtonNavbar hover:font-bold hover:text-licor" onClick={onSelect} value="en">English</button>
        </div>: ""}
    </label>
  )
}

export default LangSwitcher
