import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NEWSData } from '@/app/types/types'
import { Url } from 'url'

interface NewsCardProps {
    newsItems: NEWSData;
}

export const NewsCard = ({newsItems}: NewsCardProps) => {
  
  const {day, news, img, url} = newsItems;

  return (
    <div className="w-48 h-[500px] m-5 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
        <Link href={url as unknown as Url} rel="noopener noreferrer">
            <div className="relative w-full h-48 overflow-hidden">
            <Image 
                src={img}
                alt="" 
                layout="fill" 
                objectFit="cover" 
                className="group-hover:scale-110 transition-transform duration-300" 
            />
            </div>
            <div className="p-4">
                <div className="text-center font-semibold my-5">{day}</div>
                <div className="text-sm mt-7 h-[200px] justify-center overflow-hidden text-center">{news}</div>
            </div>
        </Link>
    </div>
  )
}
