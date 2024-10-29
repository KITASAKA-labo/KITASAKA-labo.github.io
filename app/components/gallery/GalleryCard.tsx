import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GALLERYData } from '@/app/types/types'

interface GalleryCardProps {
    galleryItems: GALLERYData;
}

export const GalleryCard = ({galleryItems}: GalleryCardProps) => {
  
  const {category, year, title, content, img} = galleryItems;

  return (
    <div className="gararry w-[250px] h-[405px] m-[30px] bg-[#c8c7c7] inline-block align-top">
              <div className="photo w-[250px] h-[150px] overflow-hidden">
                <Image
                  src={`${img}`}
                  alt="`${title}`"
                  width={250}
                  height={150}
                  className="w-full h-auto transition-all duration-1000 hover:scale-110"
                />
              </div>
              <div className="gtext w-[90%] h-[100px] mt-[30px] text-[1.1rem] mx-auto">
                {title}
              </div>
              <div className="gbtex w-full h-[100px] mt-[30px] text-[0.9rem] px-4">
                {content}
              </div>
    </div>
  )
}
