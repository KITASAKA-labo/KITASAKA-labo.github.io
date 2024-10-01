import Image from 'next/image'
import Link from 'next/link'
import prisma from '../../lib/prismaClient'

export default async function Home() {

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* メインコンテンツ */}
      <main className="pt-20">
        {/* 見出しタイトル */}
        <div className="relative w-full h-screen flex items-center justify-center">
          <div className="absolute w-2/5 text-6xl text-white filter drop-shadow-lg left-32 z-10">
            <h1>北坂研究室</h1>
            <h3 className="text-3xl">Medical Image Processing Laboratory</h3>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-30 z-20"></div>
          <div className="absolute inset-0 z-0">
            <Image src="/images/top/topimg1.png" alt="" layout="fill" objectFit="cover" className="animate-slide-1" />
            <Image src="/images/top/topimg2.png" alt="" layout="fill" objectFit="cover" className="animate-slide-2" />
            <Image src="/images/top/topimg3.png" alt="" layout="fill" objectFit="cover" className="animate-slide-3" />
          </div>
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
      </main>

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
    </div>
  );
}