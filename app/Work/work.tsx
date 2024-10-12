import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isNavHidden, setIsNavHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsNavHidden(true)
      } else {
        setIsNavHidden(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="main relative w-full min-h-screen overflow-hidden">
      <nav className={`fixed flex w-full h-20 items-center justify-between bg-white border-b border-gray-300 transition-transform duration-200 ${isNavHidden ? '-translate-y-full' : ''} z-10`}>
        <div className="nvlogo ml-[5vw] mr-3 mb-5">
          <h2><Link href="./index.html" className="text-black no-underline">Lab.KITASAKA</Link></h2>
        </div>
        <div className="navlink flex-1">
          <ul className="flex justify-end pr-[10%]">
            <li id="study" className="relative group">
              <Link href="./gararry.html" className="font-semibold text-black no-underline transition-colors duration-300 hover:text-[#b2c7ff]">STUDY</Link>
              <div id="navdet-g" className="absolute right-0 top-full bg-white p-5 hidden group-hover:block">
                <Link href="./gararry.html?cat=study" className="block mb-2">研究一覧</Link>
                <Link href="./gararry.html?cat=production" className="block mb-2">制作一覧</Link>
                <Link href="./news.html" className="block mb-2">活動情報</Link>
                <Link href="./work.html" className="block">成果一覧</Link>
              </div>
            </li>
            <li className="ml-4">
              <Link href="https://fpms.aitech.ac.jp/Main.php?action=profile&type=detail&tchCd=4d7a67784e7a63324d4441774d412e2e&pre_action=&pre_andor=&andor=&pre_key1=&key1=&pre_key2=&key2=&pre_key3=&key3=&pre_Facultyk=&Facultyk=&pre_kkb_c=&kkb_c=&pre_kbnCode=&kbnCode=&pre_fName=&fName=&pre_gName=&gName=&pre_FacultyVal=&FacultyVal=&pre_DepartmentVal=&DepartmentVal=&pre_job=&job=&pre_Society=&Society=&pre_FieldKeyword=&FieldKeyword=&pre_gsk_author=&gsk_author=&pre_gsk_title=&gsk_title=&pre_offset=&offset=&pre_cntno=&cntno=&searched=" className="font-semibold text-black no-underline transition-colors duration-300 hover:text-[#b2c7ff]">FACULTY</Link>
            </li>
            <li id="school" className="relative group ml-4">
              <Link href="#" className="font-semibold text-black no-underline transition-colors duration-300 hover:text-[#b2c7ff]">CONTACT</Link>
              <div id="navdet-s" className="absolute right-0 top-full bg-white p-5 hidden group-hover:block">
                <Link href="https://www.ait.ac.jp/" className="block mb-2">学校情報</Link>
                <Link href="https://www.ait.ac.jp/faculty/info-science/index.html#headline-1421584671" className="block mb-2">学部情報</Link>
                <Link href="./labo.html" className="block">研究室情報</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

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
    </div>
  )
}