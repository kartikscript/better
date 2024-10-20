import { companyLinks, contactLinks, footerServices, legalLinks, resouceLinks } from '@/constants/homeItems'
import Image from 'next/image'
import React from 'react'
import LinkButton from '../LinkButton'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

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
          <div className='flex flex-col gap-4 '>
            <h1 className='font-semibold mb-2 text-gray-800'>Resources</h1>
            {
              resouceLinks.map((item,i)=>{
                return(
                  <LinkButton key={i} title={item}/>
                )
              })
            }
          </div>
          <div className='flex flex-col gap-4 '>
            <h1 className='font-semibold mb-2 text-gray-800'>Company</h1>
            {
              companyLinks.map((item,i)=>{
                return(
                  <LinkButton key={i} title={item}/>
                )
              })
            }
          </div>
          <div className='flex flex-col gap-4 '>
            <h1 className='font-semibold mb-2 text-gray-800'>Contact Us</h1>
            {
              contactLinks.map((item,i)=>{
                return(
                  <LinkButton key={i} title={item}/>
                )
              })
            }
            <h1 className='font-semibold my-2 text-gray-800'>Legal</h1>
            {
              legalLinks.map((item,i)=>{
                return(
                  <LinkButton key={i} title={item}/>
                )
              })
            }
          </div>
          

        </main>

        <div className='flex gap-4 text-black mt-40 mb-10'>
          <Facebook/>
          <Instagram/>
          <Linkedin/>
        </div>
        <p className='text-sm'>
        1 Better Mortgage&apos;s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.
        <br/>
        <br/>
        2Better Mortgage&apos;s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.
        <br/>
        <br/>
        3Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrowers home value.
        </p>
        <div className='w-full h-[1px] bg-slate-500 my-10'/>
        <p className='text-sm'>
        © 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
        <br/>
        <br/>
        Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access
        <br/>
        <br/>
        Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLCs license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
        <br/>
        <br/>
        New York State Housing and Anti-Discrimination Notice
        <br/>
        <br/>
        Texas Real Estate Commission: Information About Brokerage Services | Consumer Protection Notice
        <br/>
        <br/>
        Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
        <br/>
        <br/>
        Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
        <br/>
        <br/>
        Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLCs license numbers.
        <br/>
        <br/>
        Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
        <br/>
        <br/>
        Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
        <br/>
        <br/>
        Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
        </p>
    </footer>
  )
}

export default Footer