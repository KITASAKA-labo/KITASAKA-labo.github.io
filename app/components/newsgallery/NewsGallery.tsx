import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NEWSData } from '@/app/types/types'

interface NewsCardProps {
    newsItems: NEWSData;
}

export const NewsGallery = ({newsItems}: NewsCardProps) => {
  
  const {day, news, img, url} = newsItems;

  return (
    <li className="newsitem_g border-t border-gray-200 pt-4">
        <Link href={`${url}`} className="flex flex-col md:flex-row justify-between items-start text-black no-underline">
            <div className="newsday_g font-semibold mb-2 md:mb-0 md:w-1/4">{day}</div>
            <div className="newscontent_g md:w-3/4">{news}</div>
        </Link>
    </li>
  )
}
