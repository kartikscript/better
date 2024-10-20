import React from 'react'
import { twMerge } from 'tailwind-merge'

const CustomButton = ({id,title,activeId,handleClick,style}:{id?:string,title:string|React.ReactNode,activeId?:string,handleClick?:(id:string)=>void,style?:string}) => {
  const isActive =id&& id===activeId
  return (
    <button id={id} onClick={()=>handleClick && handleClick(id ||'1')}
     className={twMerge(
      'text-gray-700 font-semibold ring-1 ring-slate-400 rounded-full py-3 px-6 hover:text-emerald-700 hover:ring-4 hover:ring-emerald-700 ring-inset transition-all delay-75 duration-200',
      isActive && 'ring-4 text-emerald-700 ring-emerald-700',
      style
    ) }
     >
        {title}
    </button>
  )
}

export default CustomButton