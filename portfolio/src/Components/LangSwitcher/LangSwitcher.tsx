'use client'

import { ChangeEvent } from "react";
import { GrLanguage } from "react-icons/gr";
import { useState } from "react";




const LangSwitcher = () => {

    const [flag, setFlag]=useState<boolean>(false)
    const onSelectChange= (e: ChangeEvent<HTMLSelectElement>)=>{
        console.log(e.target.value)
        setFlag(false)
        }
  return (
    <label className='flex h-full items-center justify-center'>
      <GrLanguage onClick={()=>setFlag(true)} className="CustomButtonNavbar hover:cursor-pointer"/>
        
        {flag?<select   className={flag?'bg-ecru overflow-auto absolute mt-5 border rounded':'sr-only'}id="" onChange={onSelectChange}>
            <option  value="es">Spanish</option>
            <option value="en">English</option>
        </select>: ""}
    </label>
  )
}

export default LangSwitcher
