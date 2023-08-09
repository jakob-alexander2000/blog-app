import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import Ad1 from "public/assets/ad-1.jpg";
import { BsFillPeaceFill } from 'react-icons/bs';
type Props = {}

const Navbar = (props: Props) => {
  return (
   <header className='mb-5'>
    <nav className='flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4'>
        <div className='hidden sm:block'>
        <div className='flex justify-between items-center gap-7'><BsFillPeaceFill size={28} color="black"/>
    <a href='/' target='_blank rel="noreferrer'><BsFillPeaceFill size={28} color="black"/>
    <BsFillPeaceFill size={28} color="white"/>
    {/* <Image className='{`${isDark ? "brightness-0" : ""}hover:opacity-50`}
     alt="twitter" 
     src={Twitter} 
     width={20}
    height={20}/> */}
    
    </a>
    </div>
            </div>
     <div className='flex justify-between items-center gap-20'>
        <Link href="/">Home</Link>
        <Link href="/"></Link>
        <Link href="/"></Link>
    </div>
    </nav>
   <div className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
    <div className='basis-2/3 md:mt-3'>
        <h1 className='font-bold italic font font-serif text-center text-3xl md:text-10xl border-black-3px'>ISSUES IV</h1>
        <p className='text-sm mt-3 text-center italic font-serif'>
        Edit and Post
        </p>
    </div>
    {/* <div className='basis-full relative w-auto h-32 bg-wh-500'>
     <Image 
                fill
                style={{ objectFit: "cover" }}
                alt="advert1"
                // placeholder='blur'
                sizes='(max-width: 480px) 100vw,
                (max.width: 768px) 75vw,
                max-width: 1060px) 50vw,
                33vw'
                src={Ad1}
                />
       
    </div> */}
   </div>
   <hr className='border-1 mx-10'></hr>
   </header>
  )
}

export default Navbar