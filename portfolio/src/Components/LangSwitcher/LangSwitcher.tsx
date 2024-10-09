'use client'

import { MouseEvent } from "react";
import { GrLanguage } from "react-icons/gr";
import { useState } from "react";
import { useRouter } from "next/navigation";

type propsLang={
  english: string,
  spanish: string
}

const LangSwitcher = ({english, spanish}:propsLang) => {

    const [flag, setFlag]=useState<boolean>(false)


    const router = useRouter();

    const onSelect = (event: MouseEvent<HTMLButtonElement>)=>{

        const finalValue  = event.target as HTMLButtonElement
        const nextLang = finalValue.value
        router.replace(nextLang, {scroll:false})
        setFlag(false)

        }

    const handleClick = ()=>{
        setFlag(true)
        setTimeout(() => {
            setFlag(false)
        }, 5000);
    }
  return (
    <label className='flex h-full items-center justify-center'>

        <button className="w-full h-full flex" onClick={handleClick}>
          <GrLanguage  className="CustomButtonNavbar w-7 h-7 hover:cursor-pointer"/>
        </button>
        
        {flag?
        <div onMouseLeave={()=>{setFlag(false)}} className={flag?'flex flex-col items-center text-sm justify-center border-licor w-[80px] gap-2 border-2 rounded-tr rounded-b bg-wine/10 text-ecru p-1 absolute mt-24 ml-16 ':'sr-only'}id="">
            <button className="CustomButtonNavbar hover:font-bold text-md" onClick={onSelect}  value="es">{spanish}</button>
            <button className="CustomButtonNavbar hover:font-bold text-md" onClick={onSelect} value="en">{english}</button>
        </div>: ""}
    </label>
  )
}

export default LangSwitcher
