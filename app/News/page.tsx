import Image from 'next/image'
import Link from 'next/link'
import { NEWSData } from '../types/types'
import NewsGcardlist from '../components/newsgallery/NewsGcardlist'
import prisma from '../../lib/prismaClient'

async function getNewsData() {
  const newsData = await prisma.news.findMany()
  return newsData
}


export default async function Home() {
  const newsData = await getNewsData()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">

      <div id="bodyTitle" className="relative h-screen flex items-center justify-center">
        <div className="Title text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">北坂研究室</h1>
          <h3 className="text-3xl">Medical Image Processing Laboratory</h3>
        </div>
        <div id="bgmovie-mask" className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      <div id="news_g" className="container mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold mb-10">News</h2>
        <ul id="news_garrary" className="space-y-6">
          <NewsGcardlist newsData={newsData}/>
        </ul>
      </div>

    </main>
  )
}