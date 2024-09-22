import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NEWSData } from './types/types';
import Newscardlist from './components/newslist/Newscardlist';

async function getNewsData() {
  const response = await fetch("http://localhost:3000/api/news", {
    cache: "no-store",
  }); 

  const newsItems: NEWSData = await response.json();

  return newsItems;
}

export default async function Home() {
  const newsData = await getNewsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      {/* News Section */}
      <section id="news" className="w-full mt-24">
        <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">News</h2>
        <Newscardlist newsData={newsData}/>
        <div className="text-right mr-[10%] mt-8">
          <Link href="/news" className="text-xl font-semibold hover:text-blue-500 transition-colors">See more→</Link>
        </div>
      </section>
      
        {/* About Section */}
      {/* Lab Introduction */}
      <section id="labo" className="w-full mt-24 relative">
        <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">LABO</h2>
        <div className="w-1/2 ml-[200px] mt-8 mb-8 mr-[600px] overflow-y-auto h-[40vh]">
          深層学習を利用した豚肺疾患の検出及び鑑別に関する研究や、パノラマビジョンシステムを利用した胸腔鏡手術支援に関する研究、パターン認識技術を駆使したアプリ制作などを行っています
        </div>
        {/* <div className="text-center my-6">
          <a href="https://www.youtube.com/embed/0u01tlNkWnA?si=BoVtTSs7vOpIjzBR" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">紹介動画</a>
        </div>
        <div className="flex overflow-x-auto space-x-6 my-6">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="flex-none w-[450px]">
              <Image src={`/images/studyimg${num}.jpg`} alt="" width={450} height={300} objectFit="cover" />
            </div>
          ))}
        </div>
        <div className="text-right mr-[10%] mt-8">
          <Link href="/gallery" className="text-xl font-semibold hover:text-blue-500 transition-colors">See more→</Link>
        </div> */}
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