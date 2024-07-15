"use client"

import Link from "next/link"

export function Appbar() {
    return (
        <div className="relative h-14 flex justify-between p-5 px-3 bg-gradient-to-b from-black-500 to-transparent">
            <div className="flex flex-col justify-center h-full ml-4 font-bold text-sm text-white">
                <Link href={'/'}>CYBER WORLD</Link>
            </div>
            <div className="flex text-white text-sm">
                <div className="flex flex-col justify-center h-full mr-10 group relative w-max">
                    <Link href={'/#services'}>Services</Link>  
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span> 
                </div>
                <div className="flex flex-col justify-center h-full mr-10 group relative w-max">
                    <Link href={'/blogs'}>Blogs</Link>   
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                </div>
                <div className="flex flex-col justify-center h-full mr-10 group relative w-max">
                    <Link href={'/#about'}>About</Link>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                </div>
                <div className="flex flex-col justify-center h-full mr-10 group relative w-max">
                    <Link href={'/#contact'}>Contact</Link>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>   
                </div>
                <div className="flex flex-col justify-center h-full mr-10 group relative w-max">
                <Link href={'/our-team'}>Our Team</Link>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-red-500 group-hover:w-3/6"></span>   
                </div>
            </div>
        </div>
    );
}
