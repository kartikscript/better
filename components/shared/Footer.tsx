import { footerServices } from '@/constants/homeItems'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='p-20 text-gray-600'>
        <Image
         src={'/icons/logo.svg'}
         alt='logo'
         width={100}
         height={100}
        />
        <main className='mt-6 flex justify-between'>
          <div className='flex flex-col gap-4 w-[30%]'>
            <p className='mb-2'>Better is a family of companies serving all your homeownership needs.</p>
            {
              footerServices.map(({title,description},i)=>{
                return(
                  <div key={i} className='flex flex-col gap-3'>
                    <div className='flex gap-1 items-center'>
                        <Image
                          src={'/icons/logo.svg'}
                          alt='logo'
                          width={60}
                          height={50}
                          />
                          <p className='text-gray-400 text-xl leading-none'>{title}</p>
                    </div>
                    <p>{description}</p>
                  </div>
                )
              })
            }
          </div>
          <div>
            <h1 className='font-semibold mb-2 text-gray-800'>Resources</h1>
            
          </div>
          <div>
            s
          </div>
          <div>
s
          </div>

        </main>
    </footer>
  )
}

export default Footer