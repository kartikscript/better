import Navbar from "@/components/shared/Navbar";
import { AlarmClock } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-[150vh] flex flex-col relative bg-primary">
          {/* <div className="z-30 relative">
            <Navbar/>
          </div> */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <Image
            className="size-10"
            src={'/icons/heroIcon.svg'}
            alt="hero icon"
            width={50}
            height={50}
            />
            <h2 className="text-3xl ">Rate drop alert</h2>
          </div>
          <h1 className="text-[7rem] leading-none font-bold text-center mt-10 z-10 relative">The rate drop you&apos;ve<br/> been waiting for</h1>
          <Image
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
          src={'/images/hero.webp'}
          alt="hero img"
          width={550}
          height={550}
          />
          <div className=" mx-auto flex-1 flex  items-center justify-between w-[80%]">
            <div >
              <button className="py-4 px-8 mb-2 text-md font-bold text-gray-800 bg-emerald-400 hover:bg-transparent hover:text-white rounded-full transition-all delay-75 duration-200">Start my approval</button>
              <p className="flex justify-center items-center gap-1 text-sm text-white/70 tracking-wide"><AlarmClock className="size-4"/> 3 min | No credit impact</p>
            </div>
            <div>
              <div className="flex items-center ">
                <Image
                  className="mr-3"
                  src={'/icons/google.svg'}
                  alt="google"
                  width={25}
                  height={25}
                />
                {
                  ['1','2','3','4'].map(item=>{
                    return(
                    <Image
                      key={item}
                      src={'/icons/star-full.svg'}
                      alt="google"
                      width={25}
                      height={25}
                    />
                    )
                  })
                }
                <Image
                  src={'/icons/star-half.svg'}
                  alt="google"
                  width={25}
                  height={25}
                />
              </div>
              <p className="text-xs mt-2">4.6 Stars | 3177 Google reviews</p>
            </div>
          </div>
      </div>
      <div className="h-screen bg-white">

      </div>
    </>

  );
}
