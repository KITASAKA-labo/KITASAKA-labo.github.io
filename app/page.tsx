import Image from 'next/image'
import Link from 'next/link'
import { NEWSData } from './types/types'
import Newscardlist from './components/newslist/Newscardlist'
import prisma from '../lib/prismaClient'
import topImage1 from './images/top/topimg1.png'

async function getNewsData() {
  const newsData = await prisma.news.findMany()
  return newsData
}

export default async function Home() {
  const newsData = await getNewsData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">

      <div id="bodyTitle" className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="Title text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">北坂研究室</h1>
          <h3 className="text-xl md:text-2xl">Medical Image Processing Laboratory</h3>
        </div>
        <div id="top1" className="absolute top-0 left-0 w-full z-2">
          <Image
            src={"https://github.com/KITASAKA-labo/KITASAKA-labo.github.io/blob/main/app/images/top/topimg1.png?raw=true"}
            alt="Top image 1"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        </div>

      {/* News Section */}
      <section id="news" className="w-full mt-24">
        <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">News</h2>
        <Newscardlist newsData={newsData}/>
        <div className="text-right mr-[10%] mt-8">
          <Link href="./News" className="text-xl font-semibold hover:text-blue-500 transition-colors">See more→</Link>
        </div>
      </section>
      
      {/* Lab Introduction */}
      <section id="labo" className="w-full mt-24 relative">
        <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">LABO</h2>
        <div className="w-1/2 ml-[200px] mt-8 mb-8 mr-[600px] overflow-y-auto h-[40vh]">
          深層学習を利用した豚肺疾患の検出及び鑑別に関する研究や、パノラマビジョンシステムを利用した胸腔鏡手術支援に関する研究、パターン認識技術を駆使したアプリ制作などを行っています
        </div>
        <div className="absolute top-0 left-0 w-3/5 h-[40vh] bg-gray-200 bg-opacity-80 -z-10"></div>
      </section>

      {/* Scroll Buttons */}
      <div className="fixed right-[3vw] bottom-[5vh] space-y-2">
        <button id="upBtn" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">↑</button>
        <button id="downBtn" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">↓</button>
      </div>

      {/* Footer */}
      <footer className="w-full mt-36 pt-8 border-t border-gray-300 text-center">
        <div className="mb-24">
          <nav className="space-y-4">
            <Link href="/" className="block hover:text-blue-500 transition-colors">HOME</Link>
            <Link href="/gallery" className="block hover:text-blue-500 transition-colors">研究・制作</Link>
            <Link href="/contact" className="block hover:text-blue-500 transition-colors">お問い合わせ</Link>
          </nav>
        </div>
        <p className="text-sm text-gray-600">© 2024 医用画像処理研究室.</p>
      </footer>
    </main>
  )
}