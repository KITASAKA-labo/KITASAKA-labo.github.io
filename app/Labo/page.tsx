import Image from 'next/image'
import Link from 'next/link'
import prisma from '../../lib/prismaClient'

export default async function Home() {

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
        {/* 見出しタイトル */}
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

        {/* 研究室紹介 */}
        <div className="relative w-full h-90vh mt-24">
          <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">STUDY</h2>
          <div className="w-1/2 h-40vh ml-50 mt-8 mb-8 mr-150 overflow-y-auto">
            深層学習を利用した豚肺疾患の検出及び鑑別に関する研究や、パノラマビジョンシステムを利用した胸腔鏡手術支援に関する研究、パターン認識技術を駆使したアプリ制作などを行っています
          </div>
          {/* スライダーの実装は別途必要 */}
          <div className="absolute w-60vw h-40vh bg-gray-200 bg-opacity-80 top-0 left-0 -z-10"></div>
        </div>

        {/* メンバー紹介 */}
        <div className="relative w-full mt-24">
          <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">MEMBER</h2>
          {/* メンバー情報の表示ロジックは別途実装が必要 */}
          <div className="absolute w-60vw h-40vh bg-gray-200 bg-opacity-80 top-15 right-0 -z-10"></div>
        </div>

        {/* スクロールボタン */}
        <div className="fixed right-3vw bottom-5vh text-center">
          <button className="mb-2 cursor-pointer">↑</button>
          <button className="cursor-pointer">↓</button>
        </div>

      {/* フッター */}
      <footer className="w-full h-40vh border-t border-gray-300 text-center mt-36 pt-5 text-black">
        <div className="mt-24">
          <ul className="mb-12">
            <li className="mb-2"><Link href="./index.html" className="text-black hover:text-blue-400">HOME</Link></li>
            <li className="mb-2"><Link href="./gararry.html" className="text-black hover:text-blue-400">研究・制作</Link></li>
            <li className="mb-2"><Link href="#" className="text-black hover:text-blue-400">お問い合わせ</Link></li>
          </ul>
          <p>© 2024 医用画像処理研究室.</p>
        </div>
      </footer>
      </main>
    )
}