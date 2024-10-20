import { timelines } from '@/constants/aboutItems'
import { CirclePlay } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='text-gray-800'>
      <main className=' w-[80%] mx-auto'>
        <div className='h-screen px-6 flex flex-col gap-8 items-center justify-center '>
          <h2 className='text-3xl text-emerald-700 font-semibold'>Our mission</h2>
          <h1 className='text-5xl font-medium text-center'>We&apos;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</h1>
        </div>

        <div className=' flex  items-center justify-between'>
          <div className='flex w-[50%] flex-col items-start gap-6'>
            <h2 className='font-semibold text-3xl'>The status quo is broken</h2>
            <p className=' text-gray-500'>The traditional processes around homeownership are opaque and stressful. Fees aren&apos;t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It&apos;s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
            <button className="py-5 px-8 mt-6 mb-4 text-md font-bold text-emerald-50 hover:bg-primary bg-emerald-700 rounded-lg transition-all delay-75 duration-200">Read Vishal's story</button>
          </div>
          <div className='w-[450px] aspect-square relative'>
            <Image
            className='bg-contain opacity-95'
            src={'/images/about.jpg'}
            alt='Vishal'
            fill
            />
            <CirclePlay className='absolute size-20 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
          </div>
        </div>
      </main>
      <div className='bg-emerald-700 my-32 py-20 px-40 text-white'>
        <h1 className='text-5xl font-medium'>How we&apos;re changing things</h1>
        <p className='font-medium mt-8'>
          Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers&apos;.
          <br/><br/>
          That&apos;s why Better.com is redefining the homeownership process from the ground up. We&apos;re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
          </p>
      </div>
      <h2 className='text-3xl font-semibold text-center'>Backed by</h2>
      <div className='flex justify-center gap-6 my-20'>
        {
          ['1','2','3','4','5','6','7'].map(item=>{
            return(
              <Image
              key={item}
              src={`/icons/about-${item}.svg`}
              alt='logo'
              width={150}
              height={150}
              />
            )
          })
        }
      </div>
      <h2 className='text-3xl font-semibold text-center my-10'>Company timeline</h2>
      <div className='w-[60%] relative mx-auto flex flex-col gap-8 items-center'>
        <div className='absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-black/10 z-0'/>
        {
          timelines.map(({text,type,buttonTitle},i)=>{
            let styles;
            if(type === 'date') styles='py-2 px-8 bg-emerald-800 text-white text-2xl font-medium rounded-full'
            else styles='w-96 p-10 text-gray-500 rounded-md bg-black/10 '
            return(
              <div key={i} className={`${styles} z-10 ${type==='content-left' && 'self-start'} ${type==='content-right' && 'self-end'} `}>
                  {text}
                  {buttonTitle && <button className='p-3 mt-3 bg-emerald-800 text-bold block text-white rounded-lg'>{buttonTitle}</button>}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default page