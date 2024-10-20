'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import CustomButton from '../CustomButton'
import { reviewers } from '@/constants/homeItems'

const ReviewPage = () => {

  const [currentImgId, setCurrentImgId] = useState('1')

    const [currentImg] =reviewers.filter(({id})=>currentImgId===id)
  
  return (
    <div className='p-32  flex justify-between items-center'>
      <main className='relative '>
        <Image
         className='rounded-2xl '
         src={currentImg.src}
         alt='reviewer'
         width={350}
         height={700}
        />
        <div className='flex justify-center gap-6 mt-8'>
          {
            reviewers.map(({id,name})=>{
              return(
                <CustomButton key={id} id={id} title={name} activeId={currentImg.id} handleClick={(id)=>setCurrentImgId(id)}/>
              )
            })
          }
        </div>
      </main>
      <div>
        <h1 className='text-8xl leading-none text-gray-900 font-medium tracking-tight'>Find out why<br/> we&apos;re better.</h1>
        <button className="py-4 px-8 mt-6 mb-4 text-md font-bold text-white bg-primary hover:bg-emerald-600 rounded-full transition-all delay-75 duration-200">See all out stories</button>
        <div className='flex items-end gap-3  '>
          <Image
           src={'/icons/trustpilot.svg'}
           alt='trust pilot logo'
           width={90}
           height={90}
          />
          <p className='text-gray-600 font-semibold leading-none'>Excellent 4.4 out of 5</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewPage