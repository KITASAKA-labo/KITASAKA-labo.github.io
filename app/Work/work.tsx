import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">

      <div id="publications" className="w-full mt-24">
        <h2 className="text-4xl font-bold ml-[10%] filter drop-shadow-lg">成果一覧</h2>
        <div id="publications_b" className="text-center mt-16">
          <h3 className="text-3xl font-semibold mb-8">書籍</h3>
          <ul id="pub_books" className="w-4/5 mx-auto list-none"></ul>
        </div>
        <div id="publications_p" className="text-center mt-16">
          <h3 className="text-3xl font-semibold mb-8">論文</h3>
          <ul id="pub_papers" className="w-4/5 mx-auto list-none"></ul>
        </div>
      </div>

      <div className="bottun fixed right-[3vw] bottom-[5vh] text-center">
        <div id="upBtn" className="cursor-pointer mb-2">↑</div>
        <div id="downBtn" className="cursor-pointer">↓</div>
      </div>

      <footer id="footer" className="w-full h-[40vh] border-t border-gray-300 text-center mt-36 pt-5 text-black">
        <div className="foottext w-full h-24 mt-24">
          <div className="footerlink mb-8">
            <ul className="list-none">
              <li className="mb-2"><Link href="./index.html" className="text-black no-underline">HOME</Link></li>
              <li className="mb-2"><Link href="./gararry.html" className="text-black no-underline">研究・制作</Link></li>
              <li><Link href="" className="text-black no-underline">お問い合わせ</Link></li>
            </ul>
          </div>
          <p>© 2024 医用画像処理研究室.</p>
        </div>
      </footer>
    </main>
  )
}