import { ArrowRight } from 'lucide-react'
import React from 'react'

const NavItem = ({title,subLinks,styles}:{title:string | React.ReactNode,subLinks:string[],styles?:string}) => {
  return (
    <div className=' relative group'>
      <span className={`${!(typeof title ==='string') && 'p-0 cursor-default'  } p-4 peer w-full group-hover:bg-white group-hover:text-gray-800 rounded-full transition-all duration-200 delay-75 cursor-pointer`}>{title}</span>
      <div className={` hidden group-hover:block absolute ${styles||'left-0'} pt-6`}>
        <div className='bg-white w-96 text-gray-900 tracking-wider space-y-1 rounded-2xl p-6'>
          {
            subLinks.map((item,i)=>{
              let customItem
              if(item.includes('[for agents]')){
                 customItem = item.replace('[for agents]','')
              }
              return(
                <p key={i} className='p-3 cursor-pointer rounded-md group/item hover:bg-slate-100 flex justify-between'>{customItem || item} {customItem && <span className='bg-yellow-300 py-1 px-2 font-medium text-gray-700 rounded-full text-sm'>For Agents</span>} {(typeof title ==='string') && <ArrowRight className='opacity-0 group-hover/item:opacity-100'/>} </p>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default NavItem