import React from 'react'
// import { PrismaClient } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { NEWSData } from '@/app/types/types'
import { NewsCard } from './NewsCard'

interface NewscardlistProps {
    newsData: NEWSData[];
}

const Newscardlist = ({newsData}: NewscardlistProps) => {
  return (
    <div id="newsbox" className="flex flex-wrap justify-center my-16">
        {newsData.map((newsItems: NEWSData) => (
          <NewsCard key={newsItems.id} newsItems={newsItems} />
        ))}
    </div>
  )
}

export default Newscardlist;