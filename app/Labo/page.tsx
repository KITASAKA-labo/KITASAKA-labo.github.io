import Image from 'next/image'
import Link from 'next/link'
import prisma from '../../lib/prismaClient'

export default async function Home() {

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

        <div className="relative w-full h-90vh mt-24 align-items:center">
          <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">STUDY</h2>
          <div className="w-1/2 h-40vh ml-50 mt-8 mb-8 mr-150 overflow-y-auto item-center">
            1号館6階に研究室があるのでぜひ遊びに来てください！
          </div>
          {/* 処理 */}
          <div className="absolute w-60vw h-40vh bg-gray-200 bg-opacity-80 top-0 left-0 -z-10"></div>
        </div>

        
        <div className="relative w-full mt-24">
          <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">MEMBER</h2>
          {/* 処理 */}
          <div className="absolute w-60vw h-40vh bg-gray-200 bg-opacity-80 top-15 right-0 -z-10"></div>
        </div>
      </main>
    )
}