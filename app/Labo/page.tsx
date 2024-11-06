import Image from 'next/image'
import Link from 'next/link'
import prisma from '../../lib/prismaClient'
import Memberlist from '../components/member/Memberlist'

function nowdate(){
  const now = new Date();
  const year = now.getFullYear();
  return year
}

async function getMemberData() {
  const year = nowdate() + 2;
  const memberData = await prisma.member.findMany({
    where:{
      graduation: year.toString()
    }
  });
  return memberData
}

async function getMemberData2() {
  const year = nowdate() + 1;
  const memberData = await prisma.member.findMany({
    where:{
      graduation: year.toString()
    }
  });
  return memberData
}

async function getMemberData3() {
  const year = nowdate() + 1;
  const memberData = await prisma.member.findMany({
    where:{
      graduation: {
        lt: year.toString()
      }
    }
  });
  return memberData
}

export default async function Home() {
  const memberData = await getMemberData();
  const memberData2 = await getMemberData2();
  const memberData3 = await getMemberData3();

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">

        <div id="bodyTitle" className="relative z-10 flex flex-col flex-start items-left justify-center h-screen w-screen text-white z-2 px-20">
        <div className="Title text-left mb-8">
          <h1 className="text-9xl md:text-8xl font-bold mb-2">北坂研究室</h1>
          <h3 className="text-2xl lmd:text-2xl">Medical Image Processing Laboratory</h3>
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
          <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg content-center">RESEARCH</h2>
          <div className="w-1/2 ml-[200px] mt-8 mb-8 mr-[600px] overflow-y-auto h-[40vh] align-items:center">
            1号館6階に研究室があるのでぜひ遊びに来てください！
          </div>
          <div className="absolute w-60vw h-40vh bg-gray-200 bg-opacity-80 top-0 left-0 -z-10">
          </div>
          <div className="absolute w-60vw h-40vh bg-gray-200 bg-opacity-80 top-0 left-0 -z-10"></div>
        </div>
        
        <div className="relative w-full mt-24">
          <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">MEMBER</h2>
          <div id="members" className='text-center mt-5'>
            <div className='text-3xl font-bold align-middle'>B3(学部3年性)</div>
            <div className='align-items:center'><Memberlist memberData={memberData} /></div>
            <div className='text-3xl font-bold align-middle'>B4(学部4年性)</div>
            <div className='align-items:center'><Memberlist memberData={memberData2} /></div>
            <div className='text-3xl font-bold align-middle'>卒業生</div>
            <div className='align-items:center'><Memberlist memberData={memberData3} /></div>
            <div className="absolute w-60vw h-40vh bg-gray-200 bg-opacity-80 top-15 right-0 -z-10"></div>
          </div>
        </div>
      </main>
    )
}