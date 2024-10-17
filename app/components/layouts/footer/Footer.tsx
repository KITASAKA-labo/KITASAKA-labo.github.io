'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'

export default function Component() {
  

  return (
    <footer className="w-full mt-36 pt-8 border-t border-gray-300 text-center">
        <div className="mb-24">
          <nav className="space-y-4">
            <Link href="../../index.html" className="block hover:text-blue-500 transition-colors">HOME</Link>
            <Link href="../../../Gallery" className="block hover:text-blue-500 transition-colors">研究・制作</Link>
            <Link href="../../../Labo" className="block hover:text-blue-500 transition-colors">お問い合わせ</Link>
          </nav>
        </div>
        <p className="text-sm text-gray-600">© 2024 医用画像処理研究室.</p>
        
      </footer>
  )
}