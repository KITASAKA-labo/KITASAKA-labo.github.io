import React from 'react'
// import { PrismaClient } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { GALLERYData } from '@/app/types/types'
import { GalleryCard } from './GalleryCard'

interface GallerylistProps {
    galleryData: GALLERYData[];
}

const Gallerylist = ({galleryData}: GallerylistProps) => {
  return (
    <div id="gararryarea" className="flex flex-wrap justify-center">
          {galleryData.map((galleryItems: GALLERYData) => (
          <GalleryCard key={galleryItems.id} galleryItems={galleryItems} />
          ))}
        </div>
  )
}

export default Gallerylist;