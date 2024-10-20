import React from 'react'

const page = () => {
  return (
    <div className='*:px-12 *:py-8 text-gray-800'>
      <main className='bg-slate-100 space-y-8'>
        <h1 className='text-5xl font-medium tracking-wide'>Mortgage calculator</h1>
        <p className='text-gray-500 w-[60%]'>Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.</p>
        <div className='flex justify-between items-start'> 
          <div className='w-[25%] space-y-4'>
            <h2 className='font-semibold'>Home price</h2>
            <div className='relative text-black  font-medium text-5xl '>
              <input
                className='w-full py-4 pr-2 pl-10 ring-1 ring-gray-400 rounded-lg ring-inset hover:ring-4 hover:ring-primary transition-all duration-200 delay-75'
                type='number'
                value={50000}
              />
              <div className='absolute top-1/2 -translate-y-1/2 left-2'>$</div>
            </div>
          </div>
          <div className='space-y-6'>
            <h2 className='font-semibold'>Monthly payment</h2>
            <h3 className=' text-gray-900   font-semibold text-5xl '>$886/mo</h3>
          </div>
          <button className="self-end py-5 px-8 mt-6 mb-4 text-md font-bold text-emerald-50 hover:bg-primary bg-emerald-700 rounded-lg transition-all delay-75 duration-200">Get pre-approved</button>
        </div>

        <div className='px-6  my-4'>
          <input 
            className='w-full'
            type="range" 
            min="50000" 
            max="3000000" 
            step="100" 
            // value={homePrice} 
            // onChange={handlePriceChange} 
         />
        </div>

        <div className='text-gray-700 font-semibold flex justify-between gap-8'>
          <div className='flex  gap-4 items-center'>
              <div className='relative w-60'>
                <input
                  className=' pb-1 px-3 pt-6 ring-1 ring-gray-400 rounded-lg ring-inset hover:ring-4 hover:ring-primary transition-all duration-200 delay-75'
                  type='number'
                  value={50000}
                />
                <div className='absolute text-gray-500 text-xs font-normal top-2 left-3'>ZIP code</div>
              </div>
              <div className='relative w-60 flex items-center'>
                  <input
                    className='rounded-r-none w-[70%] pb-1 pr-3 pl-8 pt-6 ring-1 ring-gray-400 rounded-lg ring-inset hover:ring-4 hover:ring-primary transition-all duration-200 delay-75'
                    type='number'
                    value={50000}
                  />
                  <div className='absolute text-gray-500 text-xs font-normal top-2 left-3'>Down Payment</div>
                  <div className='absolute font-normal bottom-1 left-3'>$</div>
                  <input
                    className='rounded-l-none  w-[30%] pt-6 pb-1 pr-3 pl-4 ring-1 ring-gray-400 rounded-lg ring-inset hover:ring-4 hover:ring-primary transition-all duration-200 delay-75'
                    type='number'
                    value={50}
                  />
              </div>
              
          </div>
          <div className='flex  gap-4 items-center'>
              <div className='relative w-60'>
                <input
                  className=' pb-1 px-3 pt-6 ring-1 ring-gray-400 rounded-lg ring-inset hover:ring-4 hover:ring-primary transition-all duration-200 delay-75'
                  type='number'
                  value={50000}
                />
                <div className='absolute text-gray-500 text-xs font-normal top-2 left-3'>Interest rate</div>
                <div className='absolute text-gray-500 text-xs font-normal bottom-2 right-3'>%</div>
              </div>
              <div className='relative w-60 flex items-center'>
                  <input
                    className='rounded-r-none w-[70%] pb-1 pr-3 pl-8 pt-6 ring-1 ring-gray-400 rounded-lg ring-inset hover:ring-4 hover:ring-primary transition-all duration-200 delay-75'
                    type='number'
                    value={50000}
                  />
                  <div className='absolute text-gray-500 text-xs font-normal top-2 left-3'>Down Payment</div>
                  <div className='absolute font-normal bottom-1 left-3'>$</div>
                  <input
                    className='rounded-l-none  w-[30%] pt-6 pb-1 pr-3 pl-4 ring-1 ring-gray-400 rounded-lg ring-inset hover:ring-4 hover:ring-primary transition-all duration-200 delay-75'
                    type='number'
                    value={50}
                  />
              </div>
              
          </div>
          
        </div>
      </main>
    </div>
  )
}

export default page