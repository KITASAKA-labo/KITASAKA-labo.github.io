import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GALLERYData } from '@/app/types/types'

interface GalleryCardProps {
    galleryItems: GALLERYData;
}

export const GalleryCard = ({galleryItems}: GalleryCardProps) => {
  
  const {category, year, title, content, img} = galleryItems;
  let categoryText = '';

  if(category === 'study') {
    categoryText = '研究';
  }else if(category === 'production') {
    categoryText = '制作';
  }

  const imageUrl = img === 'none' || img === ''
    ? 'https://github.com/KITASAKA-labo/KITASAKA-labo.github.io/blob/main/public/images/NoImage.png?raw=true'
    : img;

  return (
    <div className="gararry w-[250px] h-[405px] m-[30px] bg-[#c8c7c7] inline-block align-top">
              <div className="photo w-[250px] h-[150px] overflow-hidden">
                <Image
                  src={imageUrl}
                  alt=""
                  width={250}
                  height={150}
                  className="w-full h-auto transition-all duration-1000"
                />
              </div>
              <div className="gtext w-[90%] h-[30px] mt-[10px] text-[1.1rem] mx-auto font-bold">
                卒業{categoryText}
              </div>
              <div className="gtext w-[90%] h-[100px] mt-[30px] text-[1.1rem] mx-auto">
                {title}
              </div>
              <div className="gbtex w-full h-[70px] mt-[10px] text-[0.9rem] px-4">
                {content}
              </div>
    </div>
  )
}
