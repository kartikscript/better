'use client'
import CustomButton from '@/components/CustomButton'
import { CircleDollarSign, CirclePercent, Phone, Smartphone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='text-gray-800 '>
      <div className='sticky top-0 mt-4'>
        <div className='relative bg-white w-[80%] mx-auto pt-8 pb-10 flex justify-between items-center'>
          <div className='space-y-[2px]'>
            <Image 
            src={'/icons/logo.svg'}
            alt='logo'
            width={55}
            height={50}
            />
          <p className='text-gray-500 tracking-wide font-medium leading-none'>Mortgage</p>
          </div>
          <button className='flex items-center gap-2 tracking-wide font-semibold text-gray-700'><Phone className='bg-emerald-100 stroke-emerald-100 fill-emerald-800 p-1 size-9 rounded-full '/>Need help? Call (415) 345 2345</button>
          <div className='absolute w-full h-1 bg-slate-200 left-0 bottom-0 rounded-full'/>
          <Image
          className='rounded-full absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2'
          src={'/images/start.jpg'}
          alt='client'
          width={50}
          height={30}
          />
        </div>
      </div>
      <h1 className='text-4xl mt-20 font-semibold text-center'>Hi, I&apos;m Betsy!<br/>What can I help you with?</h1>
      <div className='flex flex-col gap-6 w-[40%] mx-auto mt-8'>
        <CustomButton
        title={(<p className='flex items-center gap-8'>
          <Image
           src={'/icons/start-1.svg'}
           alt='icon'
           width={35}
           height={70}
          />
          Buying a home
        </p>
        )}
        style='rounded-lg px-10 py-4'
        />
        <CustomButton
        title={(<p className='flex items-center gap-8'>
          <Image
           src={'/icons/start-2.svg'}
           alt='icon'
           width={35}
           height={70}
          />
          Refinance my mortgage
        </p>
        )}
        style='rounded-lg px-10 py-4'
        />
        <CustomButton
        title={(<p className='flex items-center gap-8'>
          <Image
           src={'/icons/start-3.svg'}
           alt='icon'
           width={35}
           height={70}
          />
          Get cash from my home
        </p>
        )}
        style='rounded-lg px-10 py-4'
        />
        <div className='flex justify-between my-8'>
          <div className='flex flex-col gap-4 '>
            <h1 className='font-medium text-center text-gray-900 text-4xl'>$100B</h1>
            <p className='text-gray-500 text-sm'>home loans funded entirely online</p>
          </div>
          <div className='flex flex-col gap-4 '>
            <h1 className='font-medium text-center text-gray-900 text-4xl'>400K</h1>
            <p className='text-gray-500 text-sm'>Customers who chose a Better Mortgage</p>
          </div>
        </div>
        <div className='w-full py-4 text-gray-500 bg-slate-100 flex flex-col items-center gap-4 '>
            <p className='mb-1'>After a few questions, you&apos;l unlock:</p>
            <div className='*:self-start space-y-3'>
              <p className='flex items-center gap-2'><CirclePercent className='text-emerald-700'/>Custom mortgage rates</p>
              <p className='flex items-center gap-2'><CircleDollarSign className='text-emerald-700'/>Exclusive offers</p>
              <p className='flex items-center gap-2'><Smartphone className='text-emerald-700'/>A personalized dashboard</p>
            </div>
        </div>
      </div>
    </main>
  )
}

export default page