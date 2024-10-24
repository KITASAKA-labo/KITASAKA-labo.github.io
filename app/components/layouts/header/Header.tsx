'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'

export default function Component() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 30)
  }

  return (
    <nav className="fixed w-[100%] bg-white border-b border-gray-300 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="../../../" className="text-2xl font-bold text-black hover:text-[#b2c7ff] transition-colors duration-300">
              Lab.KITASAKA
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => handleMouseEnter('study')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="../../Gallery"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition duration-150 ease-in-out h-full"
                >
                  
                  STUDY
                </Link>
                {activeMenu === 'study' && (
                  <div className="absolute left-0 top-full mt-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <Link href="../../Gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">研究一覧</Link>
                    <Link href="./gararry.html?cat=production" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">制作一覧</Link>
                    <Link href="../../News" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">活動情報</Link>
                    <Link href="../../Work" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">成果一覧</Link>
                  </div>
                )}
              </div>
              <div className="relative flex items-center h-full">
                <Link
                  href="https://fpms.aitech.ac.jp/Main.php?action=profile&type=detail&tchCd=4d7a67784e7a63324d4441774d412e2e&pre_action=&pre_andor=&andor=&pre_key1=&key1=&pre_key2=&key2=&pre_key3=&key3=&pre_Facultyk=&Facultyk=&pre_kkb_c=&kkb_c=&pre_kbnCode=&kbnCode=&pre_fName=&fName=&pre_gName=&gName=&pre_FacultyVal=&FacultyVal=&pre_DepartmentVal=&DepartmentVal=&pre_job=&job=&pre_Society=&Society=&pre_FieldKeyword=&FieldKeyword=&pre_gsk_author=&gsk_author=&pre_gsk_title=&gsk_title=&pre_offset=&offset=&pre_cntno=&cntno=&searched="
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition duration-150 ease-in-out h-full">
                  FACULTY
                </Link>
              </div>
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="../../Labo"
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition duration-150 ease-in-out h-full"
                >
                  CONTACT
                </Link>
                {activeMenu === 'contact' && (
                  <div className="absolute right-0 top-full mt-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <Link href="https://www.ait.ac.jp/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">学校情報</Link>
                    <Link href="https://www.ait.ac.jp/faculty/info-science/index.html#headline-1421584671" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">学部情報</Link>
                    <Link href="../../Labo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">研究室情報</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}