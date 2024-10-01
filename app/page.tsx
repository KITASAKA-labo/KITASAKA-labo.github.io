import Image from 'next/image'
import Link from 'next/link'
import { NEWSData } from './types/types'
import Newscardlist from './components/newslist/Newscardlist'
import prisma from '../lib/prismaClient'

async function getNewsData() {
  const newsData = await prisma.news.findMany()
  return newsData
}

export default async function Home() {
  const newsData = await getNewsData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">

      <div id="bodyTitle" className="relative z-10 flex flex-col items-center justify-center h-screen text-white z-2">
        <div className="Title text-center mb-8">
          <h1 className="text-4xl md:text-12xl font-bold mb-2">北坂研究室</h1>
          <h3 className="text-xl md:text-6xl ">Medical Image Processing Laboratory</h3>
        </div>
        </div>
        <div id="top1" className="absolute top-0 left-0 w-screen h-screen z-1">
          <Image
            src={"https://github.com/KITASAKA-labo/KITASAKA-labo.github.io/blob/main/public/images/top/topimg1.png?raw=true"}
            alt="Top image 1"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

      
      <section id="news" className="w-full mt-24">
        <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">News</h2>
        <Newscardlist newsData={newsData}/>
        <div className="text-right mr-[10%] mt-8">
          <Link href="./News" className="text-xl font-semibold hover:text-blue-500 transition-colors">See more→</Link>
        </div>
      </section>
      
      
      <section id="labo" className="w-full mt-24 relative">
        <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">LABO</h2>
        <div className="w-1/2 ml-[200px] mt-8 mb-8 mr-[600px] overflow-y-auto h-[40vh]">
          深層学習を利用した豚肺疾患の検出及び鑑別に関する研究や、パノラマビジョンシステムを利用した胸腔鏡手術支援に関する研究、パターン認識技術を駆使したアプリ制作などを行っています
        </div>
        <div className="absolute top-0 left-0 w-3/5 h-[40vh] bg-gray-200 bg-opacity-80 -z-10">
        {/* 処理 */}
        </div>
        <div className="text-right mr-[10%] mt-8">
          <Link href="./Labo" className="text-xl font-semibold hover:text-blue-500 transition-colors">See more→</Link>
        </div>
      </section>
    </main>
  )
}