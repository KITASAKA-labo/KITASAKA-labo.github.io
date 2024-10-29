import Image from 'next/image'
import Link from 'next/link'
import { GALLERYData } from '../types/types'
import Gallerylist from '../components/gallery/Gallerylist'
import prisma from '../../lib/prismaClient'

async function getGalleryData() {
  const galleryData = await prisma.study.findMany()
  return galleryData
}

export default async function Home() {
  const galleryData = await getGalleryData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div id="thst" className="text-center pt-24">
        <div className="text-left w-[100%]">
          <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg pb-10">RESEARCH</h2>
        </div>
        <Gallerylist galleryData={galleryData}/>
      </div>

    </main>
  )
}