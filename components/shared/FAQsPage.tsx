'use client'
import React from 'react'
import CustomButton from '../CustomButton'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const FAQsPage = () => {
  return (
    <main className='px-12 py-32 border-b-2 border-slate-300'>
      <div className='flex justify-between items-end'>
        <h1 className='text-5xl text-gray-800 font-semibold'>Got questions?<br/>We've got answers</h1>
        <CustomButton title='Our Products' handleClick={()=>null}/>
      </div>
      <div className='mt-10 grid grid-cols-3 gap-6'>
        <div className='p-8 rounded-lg bg-slate-100 flex flex-col gap-6'>
          <h2 className='text-2xl font-semibold text-gray-900 '>Buying your first home<br/>with Better</h2>
          <ArrowRight className='size-10 cursor-pointer text-gray-900 rounded-full p-2 ring-1 ring-slate-400 hover:bg-primary hover:text-white hover:ring-primary transition-all delay-75 duration-200'/>
          <Image
            className='rounded-lg'
            src={'/images/faq-1.webp'}
            alt='home'
            width={500}
            height={70}
          />
        </div>
        <div className='flex gap-6 col-span-2 p-8 rounded-lg bg-slate-100  '>
            <div className='flex flex-col gap-6'>
              <h2 className='text-2xl font-semibold text-gray-900 '>One Day Mortgage</h2>
              <p className='text-sm text-gray-600'>Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.</p>
              <ArrowRight className='size-10 cursor-pointer text-gray-900 rounded-full p-2 ring-1 ring-slate-400 hover:bg-primary hover:text-white hover:ring-primary transition-all delay-75 duration-200'/>
            </div>
            <Image
              className='rounded-lg'
              src={'/images/faq-2.webp'}
              alt='home'
              width={300}
              height={70}
            />
        </div>
        <div className='flex gap-6 col-span-2 p-8 rounded-lg bg-slate-100  '>
            <Image
              className='rounded-lg'
              src={'/images/faq-3.webp'}
              alt='home'
              width={300}
              height={70}
            />
            <div className='flex flex-col gap-6'>
              <h2 className='text-2xl font-semibold text-gray-900 '>Better HELOC</h2>
              <p className='text-sm text-gray-600'>Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.</p>
              <ArrowRight className='size-10 cursor-pointer text-gray-900 rounded-full p-2 ring-1 ring-slate-400 hover:bg-primary hover:text-white hover:ring-primary transition-all delay-75 duration-200'/>
            </div>
        </div>
        <div className='p-8 rounded-lg bg-slate-100 flex flex-col gap-6'>
          <h2 className='text-2xl font-semibold text-gray-900 '>Insurance</h2>
          <ArrowRight className='size-10 cursor-pointer text-gray-900 rounded-full p-2 ring-1 ring-slate-400 hover:bg-primary hover:text-white hover:ring-primary transition-all delay-75 duration-200'/>
          <Image
            className='rounded-lg'
            src={'/images/faq-4.webp'}
            alt='home'
            width={500}
            height={70}
          />
        </div>
      </div>
    </main>
  )
}

export default FAQsPage